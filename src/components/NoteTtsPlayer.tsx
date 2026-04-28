"use client";

import { useMemo, useState } from "react";

type NoteTtsPlayerProps = {
  title: string;
  text: string;
};

export function NoteTtsPlayer({ title, text }: NoteTtsPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rate, setRate] = useState<1 | 1.25 | 1.5>(1);
  const isSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  const cleanedText = useMemo(() => {
    return text
      .replace(/\s+/g, " ")
      .trim();
  }, [text]);

  const handlePlay = () => {
    if (!isSupported || !cleanedText) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanedText);
    utterance.rate = rate;
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice =
      voices.find((voice) => voice.lang.startsWith("en-GB")) ??
      voices.find((voice) => voice.lang.startsWith("en-US")) ??
      voices[0];
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  if (!isSupported) {
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
          className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-700 transition"
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
        <span className="text-sm text-slate-600 self-center">{isPlaying ? "Playing..." : "Idle"}</span>
      </div>
    </div>
  );
}
