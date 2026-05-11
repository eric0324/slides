"use client";
import { BadPracticeSlide } from "./BadPracticeSlide";

export function S04_Bad01() {
  return (
    <BadPracticeSlide
      index={1}
      total={5}
      icon="🤯"
      title="把 AI 當成萬能神"
      bad="「AI 應該什麼都知道」— 把所有事情丟給 AI，不管有沒有給足夠的背景資訊，期待它自己猜出你要什麼。"
      fix="先給資料、先設定情境。AI 的輸出品質完全取決於你給的輸入品質，問題越清楚，答案越準確。"
    />
  );
}
