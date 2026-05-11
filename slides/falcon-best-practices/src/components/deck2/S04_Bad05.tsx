"use client";
import { BadPracticeSlide } from "./BadPracticeSlide";

export function S04_Bad05() {
  return (
    <BadPracticeSlide
      index={5}
      total={6}
      icon="🔓"
      title="不設資料存取限制"
      bad="讓所有人可以查所有欄位，包括密碼、身分證號、薪資等敏感資料，沒有任何部門或欄位層級的權限控管。"
      fix="一定要設定 blocked columns 和部門權限。敏感欄位全域封鎖，不同部門只能看到他們該看的資料範圍。"
    />
  );
}
