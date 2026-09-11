"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type NoteTtsPlayerProps = {
  title: string;
  text: string;
};

const MAX_UTTERANCE_CHARS = 2800;

function chunkTextForSpeech(text: string): string[] {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= MAX_UTTERANCE_CHARS) {
    return normalized ? [normalized] : [];
  }
  const chunks: string[] = [];
  let start = 0;
  while (start < normalized.length) {
    let end = Math.min(start + MAX_UTTERANCE_CHARS, normalized.length);
    if (end < normalized.length) {
      const slice = normalized.slice(start, end);
      const lastSentence = slice.lastIndexOf(". ");
      const lastSpace = slice.lastIndexOf(" ");
      const prefer = lastSentence > 400 ? lastSentence + 2 : lastSpace > 400 ? lastSpace + 1 : end;
      end = prefer > start ? prefer : end;
    }
    const piece = normalized.slice(start, end).trim();
    if (piece) chunks.push(piece);
    start = end;
  }
  return chunks;
}

function pickPreferredVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  return (
    voices.find((v) => v.lang?.toLowerCase().startsWith("en-gb")) ??
    voices.find((v) => v.lang?.toLowerCase().startsWith("en-us")) ??
    voices.find((v) => v.lang?.toLowerCase().startsWith("en")) ??
    voices[0]
  );
}

export function NoteTtsPlayer({ title, text }: NoteTtsPlayerProps) {
  const [ready, setReady] = useState(false);
  const [supported, setSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rate, setRate] = useState<1 | 1.25 | 1.5>(1);
  const chunkIndexRef = useRef(0);
  const chunksRef = useRef<string[]>([]);

  const cleanedText = useMemo(() => text.replace(/\s+/g, " ").trim(), [text]);

  useEffect(() => {
    const ok = typeof window !== "undefined" && "speechSynthesis" in window;
    setSupported(ok);
    setReady(true);
  }, []);

  const speakChunks = useCallback(
    (chunks: string[]) => {
      if (!supported || chunks.length === 0 || typeof window === "undefined") return;

      window.speechSynthesis.cancel();
      chunkIndexRef.current = 0;
      chunksRef.current = chunks;

      const speakNext = () => {
        const idx = chunkIndexRef.current;
        const list = chunksRef.current;
        if (idx >= list.length) {
          setIsPlaying(false);
          return;
        }

        const utterance = new SpeechSynthesisUtterance(list[idx]);
        utterance.rate = rate;
        const voices = window.speechSynthesis.getVoices();
        const voice = pickPreferredVoice(voices);
        if (voice) {
          utterance.voice = voice;
        }

        utterance.onend = () => {
          chunkIndexRef.current += 1;
          window.setTimeout(speakNext, 60);
        };
        utterance.onerror = () => {
          window.speechSynthesis.cancel();
          setIsPlaying(false);
        };

        try {
          window.speechSynthesis.speak(utterance);
        } catch {
          setIsPlaying(false);
        }
      };

      setIsPlaying(true);
      try {
        window.speechSynthesis.resume();
      } catch {
        /* ignore */
      }
      speakNext();
    },
    [rate, supported],
  );

  useEffect(() => {
    if (!supported || typeof window === "undefined") return;

    const onVoicesChanged = () => {
      /* Voices list populated; no-op — next Play will use fresh getVoices() */
    };
    window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
    window.speechSynthesis.getVoices();

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
    };
  }, [supported]);

  const handlePlay = () => {
    if (!supported || !cleanedText || typeof window === "undefined") return;

    const chunks = chunkTextForSpeech(cleanedText);
    if (chunks.length === 0) return;

    window.speechSynthesis.cancel();

    try {
      window.speechSynthesis.resume();
    } catch {
      /* ignore */
    }

    void window.speechSynthesis.getVoices();

    let started = false;
    let fallbackTimer: number | undefined;

    const onVoices = () => {
      start();
    };

    const start = () => {
      if (started) return;
      started = true;
      window.speechSynthesis.removeEventListener("voiceschanged", onVoices);
      if (fallbackTimer !== undefined) {
        window.clearTimeout(fallbackTimer);
      }
      speakChunks(chunks);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
      start();
      return;
    }

    window.speechSynthesis.addEventListener("voiceschanged", onVoices);
    fallbackTimer = window.setTimeout(() => {
      start();
    }, 400);
  };

  const handlePause = () => {
    if (!supported || typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  if (!ready) {
    return (
      <div className="card" aria-hidden>
        <h2 className="heading-serif text-2xl mb-2">Listen to this note</h2>
        <p className="text-sm text-slate-600">Loading audio controls…</p>
      </div>
    );
  }

  if (!supported) {
    return (
      <p className="text-sm text-slate-600">
        Text-to-speech is not supported in this browser.
      </p>
    );
  }

  return (
    <div className="card">
      <h2 className="heading-serif text-2xl mb-2">Listen to this note</h2>
      <p className="text-sm text-slate-600 mb-4">
        Browser TTS playback for <span className="font-medium">{title}</span> with speed control.
      </p>
      <div className="mb-4 flex items-center gap-3">
        <label htmlFor="tts-speed" className="text-sm text-slate-600">
          Speed
        </label>
        <select
          id="tts-speed"
          value={rate}
          onChange={(event) => setRate(Number(event.target.value) as 1 | 1.25 | 1.5)}
          className="rounded-md border border-slate-300 px-2 py-1 text-sm text-slate-700"
        >
          <option value={1}>1x</option>
          <option value={1.25}>1.25x</option>
          <option value={1.5}>1.5x</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handlePlay}
          disabled={!cleanedText}
          className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-700 transition disabled:opacity-50"
        >
          Play
        </button>
        <button
          type="button"
          onClick={handlePause}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
        >
          Stop
        </button>
        <span className="text-sm text-slate-600 self-center">{isPlaying ? "Playing…" : "Idle"}</span>
      </div>
    </div>
  );
}
