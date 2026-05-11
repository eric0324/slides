"use client";
import { GoodPracticeSlide } from "./GoodPracticeSlide";

export function S03_Good02() {
  return (
    <GoodPracticeSlide
      index={2}
      total={5}
      icon="🧱"
      title="把重複的需求做成 Skill"
      why="每次重打提示詞，輸出就每次不一樣。包成 Skill，一個標準、全員共用、結果穩定。"

    />
  );
}
