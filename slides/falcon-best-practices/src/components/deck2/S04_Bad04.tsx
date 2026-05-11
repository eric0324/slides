"use client";
import { BadPracticeSlide } from "./BadPracticeSlide";

export function S04_Bad04() {
  return (
    <BadPracticeSlide
      index={4}
      total={5}
      icon="💬"
      title="用 Chat 做應該用工具做的事"
      bad="同樣的需求每天重複問 AI，每次都要重新說明一遍背景，花了大量時間在重複的對話上。"
      fix="同樣的任務做超過三次，就該把它包成 Skill 或 Deploy 成工具。一次設定，之後一鍵執行。"
    />
  );
}
