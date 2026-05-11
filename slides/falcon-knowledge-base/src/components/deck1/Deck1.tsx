"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { S01_Title } from "./S01_Title";
import { S02_WhatIsKB } from "./S02_WhatIsKB";
import { S03_Features } from "./S03_Features";
import { S04_Create } from "./S04_Create";
import { S05_Formats } from "./S05_Formats";
import { S06_Review } from "./S06_Review";
import { S07_LiveDemo } from "./S07_LiveDemo";
import { S08_QA } from "./S08_QA";

const slides = [
  { component: S01_Title, title: "知識庫功能指南" },
  { component: S02_WhatIsKB, title: "什麼是知識庫" },
  { component: S03_Features, title: "四大功能" },
  { component: S04_Create, title: "三步驟建立" },
  { component: S05_Formats, title: "知識點來源" },
  { component: S06_Review, title: "審核機制" },
  { component: S07_LiveDemo, title: "Live Demo" },
  { component: S08_QA, title: "Q&A" },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export function Deck1() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showNav, setShowNav] = useState(false);

  const go = useCallback(
    (next: number) => {
      if (next < 0 || next >= slides.length) return;
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") go(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(current - 1);
      if (e.key === "Home") { setDirection(-1); setCurrent(0); }
      if (e.key === "End") { setDirection(1); setCurrent(slides.length - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go]);

  const CurrentSlide = slides[current].component;

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: "var(--bg)" }}
      onMouseMove={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showNav && (
          <>
            {current > 0 && (
              <motion.button
                key="prev"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                onClick={() => go(current - 1)}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
              >
                <ChevronLeft size={20} />
              </motion.button>
            )}
            {current < slides.length - 1 && (
              <motion.button
                key="next"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                onClick={() => go(current + 1)}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
              >
                <ChevronRight size={20} />
              </motion.button>
            )}
          </>
        )}
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        <span style={{ fontSize: 12, fontFamily: "monospace", color: "var(--muted)" }}>{current + 1} / {slides.length}</span>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="rounded-full transition-all cursor-pointer"
              style={{ width: i === current ? 20 : 6, height: 6, background: i === current ? "var(--accent)" : "var(--border)" }}
            />
          ))}
        </div>
        <span style={{ fontSize: 12, color: "var(--border)" }}>{slides[current].title}</span>
      </div>

      <div className="absolute bottom-6 right-6 text-xs z-50" style={{ color: "var(--border)" }}>
        ← → Space
      </div>
    </div>
  );
}
