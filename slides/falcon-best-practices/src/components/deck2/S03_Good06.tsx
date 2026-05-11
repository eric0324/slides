"use client";
import { GoodPracticeSlide } from "./GoodPracticeSlide";

export function S03_Good06() {
  return (
    <GoodPracticeSlide
      index={5}
      total={5}
      icon="✅"
      title="每次用完確認輸出是否正確"
      why="AI 很會產出「看起來正確」的內容，但它可能是錯的。輸出只是草稿，最終責任在你。"

    />
  );
}
