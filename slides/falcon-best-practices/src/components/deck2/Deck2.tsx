"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { S01_Title } from "./S01_Title";
import { S02_SystemOverview } from "./S02_SystemOverview";
import { S02b_Capabilities } from "./S02b_Capabilities";
import { S03_GoodTitle } from "./S03_GoodTitle";
import { S03_Good01 } from "./S03_Good01";
import { S03_Good02 } from "./S03_Good02";
import { S03_Good03 } from "./S03_Good03";
import { S03_Good05 } from "./S03_Good05";
import { S03_Good06 } from "./S03_Good06";
import { S04_BadTitle } from "./S04_BadTitle";
import { S04_Bad01 } from "./S04_Bad01";
import { S04_Bad02 } from "./S04_Bad02";
import { S04_Bad03 } from "./S04_Bad03";
import { S04_Bad04 } from "./S04_Bad04";
import { S04_Bad06 } from "./S04_Bad06";
import { S05_Mindset } from "./S05_Mindset";
import { S05b_BugReport } from "./S05b_BugReport";
import { S05c_Last } from "./S05c_Last";
import { S05d_VeryLast } from "./S05d_VeryLast";
import { S06_DevRambling } from "./S06_DevRambling";
import { S06_QA } from "./S06_QA";

const slides = [
  { component: S01_Title, title: "Falcon 最佳實踐" },
  { component: S02_SystemOverview, title: "系統模組全覽" },
  { component: S02b_Capabilities, title: "能力邊界" },
  { component: S03_GoodTitle, title: "好的用法" },
  { component: S03_Good01, title: "好的用法 1/5" },
  { component: S03_Good02, title: "好的用法 2/5" },
  { component: S03_Good03, title: "好的用法 3/5" },
  { component: S03_Good05, title: "好的用法 4/5" },
  { component: S03_Good06, title: "好的用法 5/5" },
  { component: S04_BadTitle, title: "壞的用法" },
  { component: S04_Bad01, title: "壞的用法 1/6" },
  { component: S04_Bad02, title: "壞的用法 2/6" },
  { component: S04_Bad03, title: "壞的用法 3/6" },
  { component: S04_Bad04, title: "壞的用法 4/5" },
  { component: S04_Bad06, title: "壞的用法 5/5" },
  { component: S05_Mindset, title: "思維轉換" },
  { component: S05c_Last, title: "最後...." },
  { component: S06_DevRambling, title: "開發者的小碎嘴" },
  { component: S05d_VeryLast, title: "最後的最後..." },
  { component: S05b_BugReport, title: "P0 Bug 回報" },
  { component: S06_QA, title: "Q&A" },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

function Deck2Inner() {
  const params = useSearchParams();
  const initSlide = Math.min(Math.max(parseInt(params.get("s") ?? "0", 10) || 0, 0), slides.length - 1);
  const [current, setCurrent] = useState(initSlide);
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

export function Deck2() {
  return (
    <Suspense>
      <Deck2Inner />
    </Suspense>
  );
}
