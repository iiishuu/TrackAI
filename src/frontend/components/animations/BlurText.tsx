"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "characters";
  direction?: "top" | "bottom";
  stepDuration?: number;
  threshold?: number;
  onAnimationComplete?: () => void;
}

export function BlurText({
  text,
  className = "",
  delay = 100,
  animateBy = "words",
  direction = "top",
  stepDuration = 0.35,
  threshold = 0.1,
  onAnimationComplete,
}: BlurTextProps) {
  const shouldReduce = useReducedMotion();
  const elements =
    animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (shouldReduce) {
      setInView(true);
      return;
    }
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, shouldReduce]);

  const from = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(12px)", opacity: 0, y: -30 }
        : { filter: "blur(12px)", opacity: 0, y: 30 },
    [direction]
  );

  const to = useMemo(
    () => ({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
    }),
    []
  );

  if (shouldReduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {elements.map((segment, index) => (
        <motion.span
          className="inline-block will-change-[transform,filter,opacity]"
          key={index}
          initial={from}
          animate={inView ? to : from}
          transition={{
            duration: stepDuration,
            delay: (index * delay) / 1000,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
        >
          {segment === " " ? "\u00A0" : segment}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
}
