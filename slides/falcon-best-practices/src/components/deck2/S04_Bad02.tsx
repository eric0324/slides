"use client";
import { BadPracticeSlide } from "./BadPracticeSlide";

export function S04_Bad02() {
  return (
    <BadPracticeSlide
      index={2}
      total={5}
      icon="📋"
      title="每次手動貼一大堆資料"
      bad="每次問 AI 都要複製貼上同一份文件或表格，既浪費時間，也容易貼錯或漏掉重要資訊。"
      fix="把常用的資料放進知識庫，讓 AI 自動取用，不用每次手動貼，也不會因為忘記貼而拿到錯誤答案。"
    />
  );
}
