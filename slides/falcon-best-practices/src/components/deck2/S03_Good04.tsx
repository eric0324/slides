"use client";
import { GoodPracticeSlide } from "./GoodPracticeSlide";

export function S03_Good04() {
  return (
    <GoodPracticeSlide
      index={4}
      total={6}
      icon="🤖"
      title="用 Agent 處理多步驟任務"
      why="有些工作不是一問一答，而是需要查資料、整理、再輸出的多步驟流程。交給 Agent 自動跑，比你手動一步一步問 AI 快得多，也不容易漏掉步驟。"

    />
  );
}
