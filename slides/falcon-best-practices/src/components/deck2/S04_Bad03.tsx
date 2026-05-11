"use client";
import { BadPracticeSlide } from "./BadPracticeSlide";

export function S04_Bad03() {
  return (
    <BadPracticeSlide
      index={3}
      total={5}
      icon="🏗️"
      title="工具做了從來不更新"
      bad="建了工具之後就放著不管，資料來源過期了、流程改了、邏輯不對了，工具還在跑舊的版本。"
      fix="定期檢查工具是否還能正常執行，知識庫內容有沒有過期。工具就像程式碼，需要維護才能保持有效。"
    />
  );
}
