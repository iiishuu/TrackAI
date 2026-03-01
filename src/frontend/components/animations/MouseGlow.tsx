"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useReducedMotion } from "framer-motion";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    if (shouldReduce) return;
    const glow = glowRef.current;
    if (!glow) return;

    function handleMove(e: MouseEvent) {
      glow!.style.setProperty("--glow-x", `${e.clientX}px`);
      glow!.style.setProperty("--glow-y", `${e.clientY}px`);
      glow!.style.opacity = "1";
    }

    function handleLeave() {
      glow!.style.opacity = "0";
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [shouldReduce]);

  if (shouldReduce) return null;

  const glowColor = isDark
    ? "oklch(0.65 0.2 255 / 0.15)"
    : "oklch(0.50 0.2 255 / 0.10)";

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-[1] opacity-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), ${glowColor}, transparent 40%)`,
      }}
    />
  );
}
