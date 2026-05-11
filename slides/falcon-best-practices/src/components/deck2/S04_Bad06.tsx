"use client";
import { BadPracticeSlide } from "./BadPracticeSlide";

export function S04_Bad06() {
  return (
    <BadPracticeSlide
      index={5}
      total={5}
      icon="🗂️"
      title="一個知識庫放所有東西"
      bad="把全公司所有文件都丟進同一個知識庫，以為資料越多 AI 越聰明，結果 AI 反而在一堆雜訊裡找不到對的答案。"
      fix="按主題分庫，每個知識庫只放一個領域的內容。知識庫越聚焦，AI 召回的準確率越高。"
    />
  );
}
