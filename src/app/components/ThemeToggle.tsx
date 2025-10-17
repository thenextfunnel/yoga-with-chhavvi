// src/app/components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("beyoutiful_theme");
    if (saved) return saved === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("beyoutiful_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("beyoutiful_theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((s) => !s)}
      className="px-3 py-1 rounded-full border"
      style={{
        borderColor: "color:var(--color-foreground)/0.12",
        backgroundColor: dark ? "var(--color-foreground)" : "transparent",
        color: dark ? "var(--color-background)" : "var(--color-foreground)",
      }}
      aria-label="Toggle color mode"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
