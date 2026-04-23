"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/notes", label: "Field Notes" },
  { href: "/playbook", label: "Playbook" },
  { href: "/work-with-me", label: "Work with TDR" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur" style={{ borderColor: "var(--brand-border)", background: "#EBEEF6F2" }}>
      <div className="container-width py-2 flex flex-col gap-2 md:h-16 md:flex-row md:items-center md:justify-between">
        <BrandLogo small />
        <nav className="flex w-full items-center gap-2 overflow-x-auto whitespace-nowrap md:w-auto md:gap-6 md:overflow-visible">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-1.5 text-xs transition md:text-sm ${
                  active ? "font-medium shadow-sm" : "hover:opacity-80"
                }`}
                style={{
                  background: active ? "var(--brand-navy)" : "transparent",
                  color: active ? "#FFFFFF" : "var(--brand-navy-soft)",
                  border: active ? "1px solid var(--brand-navy)" : "1px solid transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
