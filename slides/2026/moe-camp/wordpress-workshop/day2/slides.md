---
theme: default
title: WordPress 工作坊 Day 2
info: |
  教育部公民營計劃・WordPress 工作坊 Day 2
class: text-center
transition: slide-left
mdc: true
colorSchema: light
routerMode: hash

talk:
  description: 教育部公民營計劃 WordPress 工作坊 Day 2：外掛生態系，從流量分析、表單、SEO、圖片、資安、備份到 WooCommerce 電商與 Sensei 線上課程。
  tags: [WordPress, workshop, 教育部]
  event: 教育部公民營計劃
  date: 2026-08-04
  unlisted: true
---

# WordPress 工作坊

## Day 2

教育部公民營計劃

講師：Eric Wu

2026 年 8 月 3 日

<!--
開場先確認大家都帶了 Day 1 的筆電與帳號密碼。
提醒：今天會大量「動手做」，跟不上沒關係，每個小節結束都有緩衝時間。
-->

---

# Day 1 快速回顧

先打開自己的網站，確認昨天的成果都還在！

- 用 **FileZilla** 把 WordPress 裝好了
- 進 WordPress 了後台：`你的子網域/wp-admin`
- 確認好**網站語言與時區**
- 發佈了**第一篇文章**
- 建立「**關於我**」頁面並加進**選單**
- 換上喜歡的**佈景主題**

<div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
<b>開機檢查</b>：用瀏覽器打開自己的子網域，確認前台打得開、後台登得進去。
</div>

<!--
給 5 分鐘做開機檢查。常見狀況：
1. 忘記後台密碼 → 用「忘記密碼」重設，或請助教從後台協助重設。
2. 子網域打不開 → 先確認網址沒打錯；真的有問題舉手，助教協助。
3. 文章或頁面好像不見了 → 多半是看錯網址或還沒按發佈，協助確認。
有問題的學員先舉手，助教協助，不要卡住全班進度。
-->

---

# 今日課表

| 時間 | 內容 |
|------|------|
| 08:00 – 10:00 | 第 05 堂 (1)：認識外掛、流量分析、表單、SEO |
| 10:00 – 12:00 | 第 05 堂 (2)：圖片、資安、備份 |
| 12:00 – 13:00 | 午餐 |
| 13:00 – 15:00 | 第 05 堂 (3)：更美的網站設計 Elementor |
| 15:00 – 17:50 | 第 05 堂 (4)：WooCommerce 電商、Sensei 線上課程 |

<!--
時間為佔位，依現場實際調整。
強調下午的電商與線上課程是今天份量最重的部分，午餐後請準時回來。
-->

---
layout: center
class: text-center
---

# 今日目標

<div class="text-2xl mt-8">

讓網站 <span class="text-blue-500 font-bold">變強大</span>，靠外掛

</div>

<div class="mt-10 text-gray-400">
Day 1 蓋好了房子，今天來裝潢、裝家電。
</div>

<!--
用「房子」比喻串起三天：Day 1 打地基蓋房子，Day 2 裝潢與家電，Day 3 永續經營與 AI 加值。
-->

---
layout: section
---

# 第 05 堂 (1)

## 認識外掛・流量・表單・SEO

幫網站裝上超能力，先補齊這四項基本功

---

# 外掛是什麼？

外掛之於 WordPress，就像 **App 之於手機**

- 手機剛買來只有基本功能 → 裝 LINE 才能聊天、裝相機 App 才能修圖
- WordPress 剛裝好只能寫文章 → 裝外掛才有表單、商店、課程……
- 官方外掛目錄有 **60,000+ 個免費外掛**，從後台直接搜尋安裝，不用寫程式
- 全球網站約四成用 WordPress，需求養出了巨大生態

<!--
這個比喻全天會反覆用：App 商店＝外掛目錄、App 更新＝外掛更新、App 太多手機變慢＝外掛太多網站變慢。
預告今天的菜單：流量分析、表單、SEO、資安、備份、美編、商店、線上課程。
鋪梗：Day 3 會教「找不到現成外掛時，用 AI 幫你寫一個客製外掛」。
-->

---

# 安裝外掛

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>


1. 左側選單點「外掛」→「安裝外掛」
2. 右上搜尋框輸入外掛名稱
3. 找到正確的外掛卡片 → 點「立即安裝」
4. 等待數秒，按鈕變成「啟用」

<!--
重要：搜尋結果常有名字很像的外掛，請學員核對「作者名稱」與「安裝數」，認明正版。
今天每個外掛小節都會重複這個流程，第一次講慢一點。
-->

---

# 啟用外掛

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 2 分鐘</span>

和主題一樣：**安裝 ≠ 啟用**

- 安裝完成後點「啟用」，外掛才會開始運作
- 啟用後，後台左側選單通常會多出該外掛的設定項目

<!--
常見學員問題：「我裝了怎麼沒反應？」→ 九成是沒按啟用。
另外提醒：有些外掛啟用後會跳出「設定精靈」歡迎頁，不要慌，跟著走或先關掉都可以。
-->

---

# 更新外掛：不是可有可無

為什麼一定要更新？

- **資安**：舊版外掛的漏洞是駭客入侵 WordPress 的**頭號途徑**
- 修 bug、適配新版 WordPress
- 後台「外掛」頁面與更新中心會顯示可更新數量
- 養成習慣：**每週進後台看一次更新**

<div class="mt-6 p-4 bg-red-50 dark:bg-red-900 rounded-lg">
大型更新前先備份（下午會教 UpdraftPlus），更新出問題才救得回來。
</div>

<!--
真實案例可分享：許多網站被駭不是密碼被猜到，而是某個兩年沒更新的外掛有已知漏洞。
進階：可提一下「啟用自動更新」連結的存在，小型外掛可開自動更新，大型外掛（電商）建議手動。
-->

---

# 停用 vs 刪除

| | 停用 | 刪除 |
|---|---|---|
| 外掛檔案 | 還在 | 移除 |
| 功能 | 暫停運作 | 完全消失 |
| 設定資料 | 通常保留 | 可能一併清除 |
| 適合時機 | 暫時不用、排查問題 | 確定不再使用 |

- 原則：**不用的外掛就刪掉**，停用的外掛仍可能有安全風險
- 排查問題時先「停用」測試，確認無誤再決定刪除

<!--
比喻：停用＝App 關掉但還在手機裡；刪除＝解除安裝。
強調「不用就刪」：停用中的外掛檔案還在主機上，若有漏洞依然可能被利用。
-->

---

# 如何挑選外掛

和挑主題同一套眼光：

- 更新頻率：最近更新時間、相容的 WordPress 版本
- 評價與啟用安裝數
- 支援論壇是否有人回覆
- 今天介紹的都是各領域**安裝數百萬級**的主流外掛

<!--
提醒學員：外掛卡片上點「更多詳細資料」可以看到完整資訊。
-->

---

# 外掛越少越好

外掛是超能力，也是負擔

- 每多一個外掛 ＝ 多一分速度負擔 ＋ 多一個資安風險點
- **一個需求裝一個外掛就好**，不要裝三個功能重複的
- 外掛之間可能**衝突**：A 裝了之後 B 壞掉

<v-click>

<div class="mt-5 rounded-xl border border-[#0073aa]/40 bg-[#0073aa]/5 px-5 py-4">

<div class="flex items-baseline gap-2 mb-3">
  <span class="text-[#0073aa] font-bold">衝突排查心法</span>
  <span class="text-xs text-gray-500">網站突然怪怪的？照這個順序揪兇手</span>
</div>

<div class="flex items-stretch justify-between gap-2">
  <div class="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-3 text-center">
    <div class="w-6 h-6 mx-auto mb-2 rounded-full bg-[#0073aa] text-white text-xs font-bold grid place-items-center">1</div>
    <div class="text-sm leading-snug">回想<br><b>最近裝／更新</b>了什麼</div>
  </div>
  <div class="self-center text-gray-300 text-xl">→</div>
  <div class="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-3 text-center">
    <div class="w-6 h-6 mx-auto mb-2 rounded-full bg-[#0073aa] text-white text-xs font-bold grid place-items-center">2</div>
    <div class="text-sm leading-snug">把嫌疑外掛<br><b>停用</b></div>
  </div>
  <div class="self-center text-gray-300 text-xl">→</div>
  <div class="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-3 text-center">
    <div class="w-6 h-6 mx-auto mb-2 rounded-full bg-[#0073aa] text-white text-xs font-bold grid place-items-center">3</div>
    <div class="text-sm leading-snug">看網站<br><b>是否恢復</b></div>
  </div>
  <div class="self-center text-gray-300 text-xl">→</div>
  <div class="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-3 text-center">
    <div class="w-6 h-6 mx-auto mb-2 rounded-full bg-[#0073aa] text-white text-xs font-bold grid place-items-center">4</div>
    <div class="text-sm leading-snug"><b>一次只動一個</b><br>揪出兇手</div>
  </div>
</div>

</div>

</v-click>

<!--
這頁是觀念重點，講慢一點。之後三天內任何「網站怪怪的」問題，都先用這套排查法。
進階補充（口頭）：真的全站掛掉進不了後台時，可從主機端處理，Day 3 或課後再說，避免嚇到學員。
-->

---
layout: section
---

# Site Kit by Google

有多少人看過你的網站？

---

# 為什麼需要流量分析？

- 發了重要資訊，到底有多少人看過？
- 大家都用手機還是電腦看？哪篇文章最受歡迎？
- 沒有數據，經營網站像在黑暗中投籃

<v-click>

- **Site Kit by Google**：Google 官方外掛，把 Google 的分析工具一次接進 WordPress 後台
- 包含：Search Console（搜尋表現）、Analytics（流量分析）

</v-click>

<!--
教師情境舉例：期末發「成績查詢公告」，用數據確認八成家長都看過了，沒看的再用 LINE 補通知。
-->

---

# 安裝 Site Kit by Google

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 5 分鐘</span>

1. 「外掛 → 安裝外掛」搜尋 **Site Kit by Google**
2. 認明作者是 **Google** → 立即安裝 → 啟用
3. 啟用後左側選單會出現「Site Kit」

<!--
提醒：等等的設定需要 Google 帳號，請學員先確認瀏覽器已登入常用的 Google 帳號（建議用個人或學校 Google 帳號皆可，但要記得用哪個）。
-->

---

# 設定 Site Kit：連結 Google 帳號

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 10 分鐘</span>

1. 點選 Site Kit 的「開始設定」
2. 依精靈指示**登入 Google 帳號**並授權
3. 過程會要求驗證「你是這個網站的主人」，照精靈按下一步即可
4. 完成後回到 WordPress 後台

<!--
常見卡關：
1. 瀏覽器擋彈出視窗 → 允許彈出視窗後重試。
2. 登入了錯的 Google 帳號 → 登出重來。
3. 授權畫面是英文 → 帶大家對照按鈕位置。
-->

---

# 設定 Search Console 與 Analytics

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>

- **Search Console**：你的網站在 Google 搜尋的表現（被搜了什麼、排第幾）
- **Analytics**：誰來了、看了什麼、停留多久
- 在 Site Kit 設定流程中依序「連結」這兩個服務即可
- 精靈會自動幫你建立或綁定，不用另外寫設定

<!--
說明兩者差異的白話版：Search Console＝「別人怎麼找到你」，Analytics＝「進來之後做了什麼」。
注意：Analytics 需要在精靈中同意建立資源，照預設走即可。
-->

---

# 使用 Site Kit：看懂報表

後台首頁與 Site Kit 儀表板會顯示：

- **流量**：多少人造訪、看了幾頁
- **搜尋關鍵字**：大家搜什麼找到你
- **熱門頁面**：哪篇文章最多人看
- 訪客來源與裝置比例

<div class="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
新網站數據要累積<b>幾天</b>才會出現，今天看到空白是正常的，回家後再來看。
</div>

<!--
務必先打預防針：今天設定完報表是空的，這不是壞掉。可展示講師自己網站的報表畫面當範例。
教師應用：開學季看「熱門頁面」就知道家長最關心什麼資訊。
-->

---
layout: section
---

# WPForms

活動報名、表單填寫，不再用紙本

---

# 為什麼需要表單？

**教師痛點**

- 活動報名、表單填寫、家長意見調查……紙本收發又慢又容易掉
- 希望在網站上**直接填寫送出**，可以收到通知

<v-click>

兩種做法：

| 方法一：第三方表單 | 方法二：表單外掛 |
|---|---|
| Google 表單做好 → 嵌入網頁 | 表單就長在自己網站裡 |

</v-click>

<!--
先問現場：有多少老師已經在用 Google 表單？通常很多。所以先講方法一，銜接他們既有的習慣。
-->

---

# 方法一：嵌入 Google 表單

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 15 分鐘</span>

最快的做法，沿用你已會的工具

1. 在 Google 表單完成設計 → 「傳送」→ 選 `< >` 嵌入 HTML
2. 複製嵌入碼
3. WordPress 編輯頁面 → 加入「自訂 HTML」區塊 → 貼上

- 優點：熟悉、回覆自動進試算表
- 缺點：外觀像「網頁裡開了一扇別人的窗」，風格不統一

<!--
常見問題：嵌入後在手機上太窄或出現捲軸 → 可調整嵌入碼的寬高數值，或乾脆放表單連結按鈕。
-->

---

# 方法二：表單外掛 WPForms

讓表單真正屬於你的網站

- 表單外觀與網站風格一致
- 訪客送出後 → **寄通知信到你的信箱**，後台也存一份
- 拖拉式編輯器，不用寫程式
- WPForms 是最受歡迎的表單外掛之一，**免費版即可**完成今天的任務

<!--
比較總結：臨時、簡單的調查用 Google 表單就好；長期掛在網站上的「聯絡我們」「報名表」建議用表單外掛，比較專業。
-->

---

# 安裝 WPForms

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>

1. 「外掛 → 安裝外掛」搜尋 **WPForms**
2. 選擇「Contact Form by WPForms」（免費版）→ 安裝 → 啟用
3. 左側選單出現「WPForms」

<!--
搜尋結果會出現很多表單外掛（Contact Form 7、Ninja Forms 等），請認明 WPForms。
啟用後的歡迎導覽頁可以先關閉，直接帶大家建表單。
-->

---

# 使用 WPForms：建立聯絡表單

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 10 分鐘</span>

1. 「WPForms → 新增」
2. 命名表單（例：`聯絡老師`）
3. 選擇「簡單聯絡表單」範本，姓名、Email、留言欄位都備好了
4. 需要更多欄位（電話、下拉選單）→ 從左側**拖拉**進表單
5. 點「儲存」

<!--
免費版範本有限，但聯絡表單範本完全夠用。
提醒：通知信預設寄到「網站管理員信箱」，可在表單「設定 → 通知」確認收件信箱是不是老師常看的那個。
-->

---

# 使用 WPForms：嵌入頁面

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 10 分鐘</span>

把表單放到網站上

1. 建立新頁面（例：「聯絡我們」）
2. 在編輯器中新增 **WPForms 區塊**
3. 下拉選單選擇剛剛做好的表單
4. 發布頁面 → 前台實際**填一次、送出一次**測試

<!--
務必讓學員自己送出一筆測試資料，並到「WPForms → 項目／Entries」或信箱確認有收到。
若通知信沒收到：先看垃圾郵件夾。主機寄信有時不穩定，告知後台一定存有紀錄即可，進階寄信設定（SMTP）課後再聊。
-->


---
layout: section
---

# Yoast SEO

讓 Google 找得到你的網站

---

# 什麼是 SEO？

**S**earch **E**ngine **O**ptimization，搜尋引擎最佳化

- SEO ＝ 把網站整理成 **Google 容易讀懂、願意推薦**的樣子
- 不是作弊，是「把招牌掛清楚、把店面整理乾淨」

<v-click>

影響排名的基本功：

- 清楚的標題與描述、看得懂的網址
- 手機友善（主題挑對了！）、網站速度（等等教圖片壓縮！）

</v-click>

<!--
把今天教過的東西串起來：永久連結、響應式主題、圖片壓縮，全部都是 SEO 的一環，學員會有「原來都連在一起」的感覺。
-->

---

# 安裝 Yoast SEO

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>

1. 「外掛 → 安裝外掛」搜尋 **Yoast SEO**
2. 安裝 → 啟用
3. 左側選單出現 Yoast SEO 項目
4. 首次設定精靈：照預設值走完即可（網站類型、名稱等）

<!--
Yoast 設定精靈問題不少，但都選預設或常識作答即可，不要讓學員在精靈裡耗太久。
免費版功能就夠用，付費版功能以官網為準。
-->

---

# 使用 Yoast：紅綠燈號誌

編輯文章時，下方多了 Yoast 分析區

- 紅燈：有明顯待改善
- 橘燈：普通
- 綠燈：不錯！
- Yoast 會**逐條列出**建議：標題太短、缺少內部連結……照著改就好

<!--
強調心態：燈號是「健身教練的建議」，不必每篇都追求全綠，內容對讀者有用最重要。
注意：Yoast 的分析以英文邏輯為主，中文內容某些項目（如關鍵字密度）判斷會失準，看大方向就好。
-->

---

# 使用 Yoast：焦點關鍵字

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 10 分鐘</span>

告訴 Yoast 這篇文章的主題是什麼

1. 在 Yoast 區塊輸入**焦點關鍵字**（例：`校外教學`）
2. Yoast 檢查關鍵字是否出現在：標題、開頭段落、網址、小標
3. 依建議調整文章

<!--
練習：請學員幫 Day 1 寫的那篇文章設定焦點關鍵字。
常見誤解：關鍵字塞越多越好 → 錯，自然寫作、關鍵字出現在重點位置即可。
-->

---

# 使用 Yoast：Meta 描述

控制你在 Google 搜尋結果的「門面」

- 搜尋結果＝**標題＋網址＋一段描述**，描述就是 meta description
- 不寫的話 Google 會自己亂抓一段
- 在 Yoast 的「摘要／中繼描述」欄位自己寫，像寫**一句吸引人的廣告詞**
- 長度約一兩句話，Yoast 會用顏色提示太長或太短

<!--
Yoast 有「搜尋結果預覽」功能，讓學員看到自己的文章在 Google 上長什麼樣子，很有感。
範例描述：「○○班 5 月校外教學報名開始！時間、地點、費用與注意事項一次看。」
-->

---
layout: section
---

# 第 05 堂 (2)

## 圖片・資安・備份

讓網站跑得快、守得住、毀不掉

---
layout: section
---

# EWWW Image Optimizer

照片不瘦身，網站跑不動

---

# 為什麼圖片要壓縮？

- 手機拍一張照片動輒**好幾 MB**，直接上傳網站就會變慢
- 網頁最肥的部分通常就是圖片
- 網站慢 → 訪客跑掉、Google 排名下降（又是 SEO！）
- 壓縮 ＝ 在**肉眼幾乎看不出差異**的前提下，把檔案變小好幾倍

<v-click>

<div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
教師情境：活動照片動輒上傳幾十張，沒壓縮的話，相簿頁面家長根本載入不完。
</div>

</v-click>

<!--
可現場示範：開一張原始照片（數 MB）vs 壓縮後（幾百 KB），肉眼比較看不出差異。
-->

---

# 安裝 EWWW Image Optimizer

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>

1. 「外掛 → 安裝外掛」搜尋 **EWWW Image Optimizer**
2. 安裝 → 啟用
3. 首次設定引導：照預設建議值即可，**免費版即可**

<!--
設定精靈會問網站用途與偏好，全部用預設即可。
不要同時安裝多個圖片壓縮外掛（Smush、ShortPixel 等），會互相干擾，呼應「一個需求一個外掛」。
-->

---

# 使用：自動最佳化 ＋ 批次處理

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 5 分鐘</span>

裝好之後，最棒的是：**幾乎不用管它**

- 之後每張**新上傳**的圖片都會自動壓縮、自動縮小過大尺寸
- 老師只要照常上傳照片，外掛默默工作
- **舊圖片**怎麼辦？用「**批次最佳化**」功能：掃描 → 一鍵批次處理
- 圖片多的舊網站要跑一陣子，放著讓它跑即可

<!--
在媒體庫的列表模式可以看到每張圖的壓縮率，請學員上傳一張照片實測。
我們的網站才剛建，批次很快跑完。但要教批次功能，因為老師回去整理「已經營多年的舊網站」時會用到。
-->

---
layout: section
---

# Wordfence Security

WordPress 很紅，所以駭客也愛

---

# WordPress 是駭客的熱門目標

- 全球四成網站用 WordPress → 攻擊工具「規模化生產」
- 駭客不是針對你，是**機器人 24 小時掃描全網**找弱點
- 常見攻擊：猜密碼（暴力破解）、利用舊版外掛漏洞
- 被駭的後果：網站被塞廣告、掛惡意連結、甚至整站被毀

<v-click>

<div class="mt-4 p-4 bg-red-50 dark:bg-red-900 rounded-lg">
防護是必修，不是選修。
</div>

</v-click>

<!--
重點訊息：「不是你重不重要，是機器人無差別掃描」。許多老師覺得「我的小網站誰要駭」，錯，機器人不挑食。
複習：前面講的「外掛要更新、不用就刪」就是資安第一步。
-->

---

# 安裝 Wordfence

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 5 分鐘</span>

1. 「外掛 → 安裝外掛」搜尋 **Wordfence Security**
2. 安裝 → 啟用
3. Wordfence ＝ 防火牆 ＋ 惡意程式掃描器 二合一
4. **免費版即可**滿足基本防護

<!--
比喻：防火牆＝門口警衛（擋可疑訪客），掃描器＝定期健康檢查（找已經混進來的壞東西）。
-->

---

# Wordfence 授權（免費版註冊）

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 10 分鐘</span>

啟用後會要求取得**免費授權金鑰**

1. 依畫面指示前往 Wordfence 官網註冊
2. 選擇 **Free（免費）** 方案
3. 輸入 Email → 收信取得／安裝授權金鑰
4. 回到後台完成授權，防護開始運作

<!--
常見卡關：
1. 註冊頁面全英文，學員緊張 → 帶著全班一步步走。
2. 認證信跑到垃圾郵件 → 提醒檢查。
3. 官網會推銷付費版 → 認明 Free 方案的按鈕，付費版功能以官網為準。
-->

---

# 手動掃描

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 10 分鐘</span>

幫網站做第一次健康檢查

1. 左側選單「Wordfence → Scan」→「Start New Scan」
2. 等待數分鐘，查看結果列表
3. 高風險（檔案被竄改、惡意程式）：立即依建議處理
4. 提醒類（外掛過舊、有更新）：盡快更新

<div class="mt-2 p-3 bg-green-50 dark:bg-green-900 rounded-lg">
資安三本柱：更新、<b>強密碼</b>（別用 admin 當帳號）、備份。第三柱馬上登場 →
</div>

<!--
我們是全新網站，掃描結果應該乾淨或只有低風險提示（如外掛有新版本），正好呼應更新的重要性。
防火牆啟用後會自動擋掉多數攻擊，平常不用盯著。
順勢檢查：有沒有人 Day 1 用了「admin」當帳號或太簡單的密碼？建議課後改掉。
轉場：就算防護做好，意外還是可能發生，所以需要「最後保險」，備份。
-->

---
layout: section
---

# UpdraftPlus

網站的保險

---

# 備份：最重要的保險

什麼情況會讓網站「整組壞掉」？

- 更新外掛／主題後衝突，網站沒有畫面
- 被駭客入侵竄改
- 自己誤刪內容、改壞設定
- 主機故障（少見但會發生）

<v-click>

<div class="mt-4 p-4 bg-red-50 dark:bg-red-900 rounded-lg">
沒有備份：辛苦經營的內容<b>一夕歸零</b><br>
有備份：再嚴重的災難，<b>幾分鐘還原</b>
</div>

</v-click>

<!--
這一節用最嚴肅的語氣講。可以分享真實故事：經營多年的部落格因為沒備份、主機出事而全毀。
給承諾：今天離開教室前，每個人的網站都會有第一份備份。
-->

---

# 安裝 UpdraftPlus

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>

1. 「外掛 → 安裝外掛」搜尋 **UpdraftPlus**
2. 安裝 → 啟用，**免費版即可**
3. 設定位置：「設定 → UpdraftPlus 備份」

- 備份內容 ＝ **資料庫**（文章、設定）＋ **檔案**（圖片、主題、外掛）

<!--
說明備份的兩塊：資料庫像「大腦記憶」，檔案像「家當」，兩個都要備才完整。UpdraftPlus 預設兩者都備。
-->

---

# 手動備份：立刻做一份！

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 10 分鐘</span>

1. 進入 UpdraftPlus 設定頁
2. 點大大的「**立即備份**」按鈕
3. 確認勾選資料庫＋檔案 → 執行
4. 等待完成，下方「現有備份」列表出現一筆紀錄

<!--
全班一起按下去，等備份跑完。新站很快，一兩分鐘內完成。
完成後請學員截圖留念，「我的第一份備份」。
-->

---

# 自動備份排程

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 10 分鐘</span>

人會忘記，機器不會

1. UpdraftPlus「設定」分頁
2. 檔案備份排程：例如**每週**一次
3. 資料庫備份排程：例如**每天**一次（文字內容變動較頻繁）
4. 設定保留份數（例如保留最近 2–4 份）→ 儲存

<!--
排程頻率原則：網站更新越頻繁，備份越密。班級網站每週發幾篇文，「資料庫每日、檔案每週」很夠。
保留份數別設太多，會吃爆儲存空間。
-->

---

# 遠端備份：存到 Google Drive

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 15 分鐘</span>

備份放在同一台主機上 ＝ 雞蛋同一個籃子

1. UpdraftPlus 設定 →「選擇遠端儲存」→ **Google Drive**
2. 儲存設定後，依指示**授權連結 Google 帳號**
3. 完成後，之後的備份自動上傳到你的雲端硬碟

<!--
關鍵觀念：主機掛了，存在主機上的備份也跟著陪葬，所以一定要有「異地」備份。
卡關點：Google 授權流程跟 Site Kit 類似，學員上午做過一次，這次應該比較順。一樣注意彈出視窗與帳號選擇。
-->

---

# 還原演練

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 10 分鐘</span>

備份只做不練 ＝ 買了滅火器不會用

1. UpdraftPlus「現有備份」列表 → 點「**還原**」
2. 勾選要還原的項目（資料庫／外掛／主題／上傳檔案）
3. 依精靈執行 → 完成後檢查網站是否正常

<div class="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
還原會把網站<b>蓋回備份當下的狀態</b>，備份之後新增的內容會消失。
</div>

<!--
演練建議：先發一篇「測試文章」→ 執行還原 → 確認那篇文章消失了 → 證明還原真的有效。這個體驗非常震撼有效。
時間不夠的話改為講師示範。
還原失敗的常見原因：還原過程中關掉瀏覽器分頁、主機資源不足逾時 → 重跑一次通常就好；最壞情況用主機層備份救（下一頁）。
-->

---

# 第二道保險：Cloudways 主機層備份

外掛備份之外，主機商也有備份

- Cloudways 後台 → 伺服器／應用程式的 **Backup** 設定
- 可設定自動備份頻率與保留天數
- 還原也在同一處操作，整台應用程式回到指定時間點
- 與 UpdraftPlus **互為備援**，兩邊都開

<!--
情境區分：WordPress 後台還進得去 → 用 UpdraftPlus 還原最方便；整個 WordPress 掛到進不了後台 → 用 Cloudways 主機層還原。
Cloudways 備份保留與計費細節以官方為準，不要背數字。
-->

---

# 3-2-1 備份觀念

專業級的備份心法，一張圖記住：

<div class="text-xl mt-6">

- **3** 份資料：正本 ＋ 2 份備份
- **2** 種不同媒介／位置存放
- **1** 份放在異地（雲端）

</div>

<v-click>

<div class="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-lg">
我們已做到：網站正本 ＋ Cloudways 主機備份 ＋ UpdraftPlus 上傳 Google Drive，正是 3-2-1！
</div>

</v-click>

<!--
收尾這一節時再次強調：今天學的所有外掛裡，如果只能記住一個，請記住備份。
-->

---
layout: section
---

# 第 05 堂 (3)

## 更美的網站設計

讓門面頁面有設計師等級的質感

---
layout: section
---

# Elementor

用拖拉的方式，做出設計師等級的頁面

---

# 什麼是頁面編輯器？

- 內建編輯器：像 Word，由上往下一塊塊堆
- **頁面編輯器（Page Builder）**：像簡報軟體，**所見即所得、自由拖拉**
- 想做形象首頁、活動視覺頁，頁面編輯器強得多
- **Elementor**：最多人用的頁面編輯器之一，**免費版即可**入門

<!--
定位說明：日常公告文章用內建編輯器就好；「門面級」頁面（首頁、招生頁、活動頁）才出動 Elementor。
不是取代關係，是分工。
-->

---

# 安裝 Elementor

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>

1. 「外掛 → 安裝外掛」搜尋 **Elementor**
2. 安裝「Elementor Website Builder」→ 啟用
3. 啟用後文章／頁面編輯畫面會多出「**使用 Elementor 編輯**」按鈕

<!--
注意：Elementor 是大型外掛，啟用後會引導註冊帳號或推銷 Pro 版，可略過，免費版即可。付費版功能以官網為準。
-->

---

# Elementor 基本設定

第一次使用前，看一眼設定

- 「Elementor → 設定」：哪些文章類型可用 Elementor（預設即可）
- 跟著首次引導選擇即可，之後都能改
- 與佈景主題的關係：主題管「全站外觀」，Elementor 管「單一頁面內容」

<!--
若學員的主題與 Elementor 排版打架（左右出現多餘邊框），可在頁面屬性把版面配置改為全寬／Elementor 全寬範本。先口頭預告，實作時再個別處理。
-->

---

# Elementor 編輯器介面

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>

打開一個頁面 →「使用 Elementor 編輯」

- **左側面板**：元件庫（標題、文字、圖片、按鈕、影片……）
- **右側畫布**：你的頁面，所見即所得
- 把元件**拖**進畫布 → 點選元件 → 左側調整內容與樣式
- 隨時點左下角預覽，記得按「**發布／更新**」儲存

<!--
給學員 3 分鐘自由拖拉、隨便玩，先建立「拖過去就出現」的手感，再進入正式教學。
常見問題：改了沒存就關閉 → 提醒發布／更新按鈕的位置。
-->

---

# 區段與排版

頁面的骨架：**區段（Section）→ 欄（Column）→ 元件**

- 先加一個區段，選擇欄數（1 欄、2 欄、3 欄…）
- 再把元件放進欄裡
- 像排教室座位：先決定**幾排幾列**，再安排誰坐哪

<!--
典型首頁結構示範：大圖區段（1 欄）→ 特色介紹（3 欄）→ 最新消息（2 欄）→ 聯絡資訊（1 欄）。
-->

---

# 樣式調整

每個元件都有三個分頁：

- **內容**：文字、圖片來源、連結
- **樣式**：顏色、字體大小、對齊
- **進階**：間距（內距／外距）、進場動畫

<div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
美感小抄：全頁<b>不超過 3 種顏色</b>、字體大小有層次（大標 > 小標 > 內文）、留白是你的朋友。
</div>

<!--
老師不是設計師，給他們「安全公式」比給自由更有用。
進階動畫提一下就好，提醒不要每個元件都加動畫，會眼花。
-->

---

# 用 Elementor 做一個漂亮的頁面

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 30 分鐘</span>


1. 新增頁面 →「使用 Elementor 編輯」
2. 第一個區段：大標題 ＋ 一張漂亮的圖（或背景圖）
3. 第二個區段：2–3 欄，放班級特色／活動資訊
4. 發布，用手機看效果

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
做得快的學員：試試把這頁設為網站首頁（設定 → 閱讀 → 靜態首頁）。
</div>

<!--
巡場重點：
1. 圖片上傳後太大張 → 順便複習 EWWW 已自動壓縮。
2. 排版在手機上跑掉 → 示範 Elementor 的響應式預覽（電腦／平板／手機切換）。
3. 「設為首頁」是常見需求，會的學員教旁邊的人。
-->

---
layout: section
---

# 第 05 堂 (4)

## 電商・線上課程

開一間自己的商店，把教材變成線上課程

---
layout: section
---

# WooCommerce

開一間自己的網路商店

---


# 安裝 WooCommerce

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 5 分鐘</span>

1. 「外掛 → 安裝外掛」搜尋 **WooCommerce**
2. 安裝 → 啟用（檔案較大，等待時間比其他外掛久）
3. 啟用後自動進入**設定精靈**

<!--
WooCommerce 是今天最大的外掛，安裝啟用要一點時間，請學員耐心等。
若精靈沒有自動跳出，可從 WooCommerce 選單的首頁／設定找到引導。
-->

---

# 設定精靈（一）：商店基本資料

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 5 分鐘</span>

跟著精靈回答幾個問題：

- 商店地址：所在**國家／地區選台灣**，影響幣別與稅制預設
- 產業類型、商品類型（實體商品）
- 精靈推銷的加購項目與行銷工具：**先全部跳過**

<!--
重點提醒：精靈會推薦安裝一堆配套外掛（行銷、物流夥伴），全部先跳過，保持乾淨，呼應「外掛越少越好」。
地區選台灣很重要，幣別才會是 TWD。
-->

---

# 設定精靈（二）：完成後的版圖

精靈跑完，網站自動多了什麼？

- 自動建立頁面：**商店**、**購物車**、**結帳**、**我的帳號**
- 左側選單多了「WooCommerce」與「商品」
- WooCommerce 首頁有一張「開店待辦清單」

<!--
帶大家看一眼前台的「商店」頁，現在空空如也，今天結束前會有第一個商品。
-->

---

# 金流是什麼？（觀念）

**金流 ＝ 錢怎麼從買家流到你手上**

- 線上刷卡、超商代碼、行動支付……都需要「**金流服務商**」當中間人
- 買家付款 → 金流商收款確認 → 通知網站出貨 → 金流商撥款給你
- 金流商會收**手續費**，申請需要審核（個人／公司資格不同）

<v-click>

<div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
不想接金流商？最簡單的起步是「<b>銀行轉帳</b>」，等等就用它開店。
</div>

</v-click>

<!--
觀念講清楚就好，不要陷入任何一家的申請細節。
強調：金流商申請有資格審核與文件要求，細節以各服務商官網為準。
-->

---

# 金流設定在哪裡？

WooCommerce 的付款設定位置：

- 「WooCommerce → 設定 → **付款**」分頁
- 列出所有可用的付款方式，逐一**開關**與設定
- 內建基本款：銀行轉帳、貨到付款、支票
- 更多付款方式：透過安裝對應的**金流外掛**擴充

<!--
讓學員打開這一頁，看到付款方式列表的開關介面，建立「原來在這裡控制」的地圖感。
-->

---

# 台灣常見金流：概念認識

| 服務商 | 概念 |
|---|---|
| 綠界 ECPay | 台灣老牌金流，信用卡／超商代碼／ATM 等 |
| 藍新 NewebPay | 同類型服務，付款方式多元 |

- 申請成功後，安裝官方提供的 WordPress 外掛 → 填入金鑰 → 結帳頁就會出現刷卡等選項
- 手續費、申請資格與流程**以各官網為準**

<!--
不示範申請（需要實名資料與審核時間），只建立認知：「需要刷卡時，找這類服務商＋官方外掛」。
學校場景多半用轉帳或現場繳費就夠了。
-->

---

# 付款方式實作：啟用銀行轉帳

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 5 分鐘</span>

今天用最簡單的方式讓商店能收款：

1. 「WooCommerce → 設定 → 付款」
2. 啟用「**銀行轉帳**（BACS）」→ 點進去管理
3. 填寫帳戶資訊（練習用假資料即可）
4. 說明欄寫清楚：「轉帳後請來信告知後五碼」

<!--
提醒：課堂練習用假帳號即可，不要把真實個人帳戶資訊打在投影幕前。
轉帳的缺點（要人工對帳）也要講，量大時才需要金流商。
-->

---

# 物流設定（觀念與位置）

**物流 ＝ 商品怎麼到買家手上**

- 「WooCommerce → 設定 → **運送方式**」
- 先建立「**運送區域**」（例如：台灣）
- 每個區域內再新增可用的運送方式
- 超商取貨等台灣在地物流：同樣靠對應的**物流外掛**擴充，細節以官網為準

<!--
校園場景亮點：很多時候根本不用寄送，「校內面交／到班自取」，用「自取」方式就解決了。
-->

---

# 運送方式實作

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 5 分鐘</span>

在「台灣」區域內新增：

1. **單一費率**：例如全台一律某個運費
2. **免費運送**：可設「滿額免運」條件
3. **取貨方式**：自取

<!--
實作讓大家至少加一個「自取」。
常見卡關：忘了先建「運送區域」就找不到地方加運送方式 → 順序是先區域、後方式。
-->

---

# 新增商品：簡單商品

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 5 分鐘</span>

上架第一個商品！

1. 「商品 → 新增商品」
2. 商品名稱（例：`手工餅乾義賣組`）＋ 商品描述
3. 「商品資料」選 **簡單商品**（單一規格，最常用）
4. 先儲存草稿，接下來補圖片與價格

<!--
名詞解釋：「可變商品」是有尺寸顏色等多規格的，今天不教，知道有這選項即可。
商品描述建議寫：品項內容、義賣用途、取貨方式，資訊清楚減少家長詢問。
-->

---

# 商品圖片與價格

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>

- **商品圖片**：右側設定主圖（會自動被 EWWW 壓縮）
- 商品圖庫：可加多張圖
- **價格**：商品資料 → 一般 → 原價；「折扣價」可做限時優惠
- 價格訂定請依實際活動為準

<!--
拍照小提醒：商品照明亮、背景乾淨，手機拍就很夠。
折扣價可順便示範「限時特賣」的到期日設定，園遊會預購截止很好用。
-->

---

# 庫存管理

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>

避免「超賣」的尷尬

1. 商品資料 →「**庫存**」分頁
2. 勾選「啟用庫存管理」
3. 填入庫存數量（例：50 份）
4. 賣完自動顯示「**缺貨中**」，不會收到第 51 張訂單

<!--
教師場景超重要：義賣品、預購名額都是「有限量」的，庫存功能就是自動守門員。
也可提：低庫存通知門檻，快賣完時提醒老師補貨或關單。
-->

---

# 讓商店開張

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>

1. 商品按「**發布**」
2. 打開前台「商店」頁，你的商品上架了！
3. 檢查商品頁：圖片、價格、加入購物車按鈕
4. 確認「商店」有加入網站選單，訪客找得到

<!--
儀式感時刻：請大家互相瀏覽鄰座的商店。
選單設定在「外觀 → 選單」，若學員的主題沒自動帶入商店頁，現場補做。
-->

---

# 切換傳統結帳頁

新版結帳頁 vs 傳統結帳頁

- 較新版本的購物車／結帳頁使用**區塊版**介面
- 部分金流／物流外掛（尤其台灣在地服務）對**傳統短代碼版**支援較好
- 切換方式：編輯購物車／結帳頁面，將區塊替換為傳統短代碼（如 `[woocommerce_checkout]`）

<!--
這是台灣 WooCommerce 社群的常見實務：很多在地金流外掛教學都會要求切回傳統結帳。
操作：編輯「結帳」頁 → 移除結帳區塊 → 加入短代碼區塊貼上 [woocommerce_checkout]。購物車同理用 [woocommerce_cart]。
不需要深究原理，記住「金流外掛怪怪的，先試切傳統結帳頁」即可。
-->

---

# 排查：結帳頁看不到付款方式？

最常見的開店疑難雜症，依序檢查：

1. 付款方式真的**已啟用**？（設定 → 付款）
2. 購物車內**有商品**？（空車不會顯示付款）
3. 運送地址在你設定的**運送區域**內？
4. 某些付款方式有金額／條件限制？
5. 還是不行 → **切換傳統結帳頁**再試

<!--
這頁是「售後服務」：學員回家自己玩一定會遇到。
最雷的是第 3 點：運送區域沒設好，整個結帳流程卡住，畫面又不會明說原因。
排查順序由簡到難，養成系統性檢查的習慣。
-->

---

# 完整下一張訂單

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 10 分鐘</span>

當一次自己商店的客人

1. 用**無痕視窗**打開自己的商店
2. 把商品加入購物車 → 前往結帳
3. 填寫資料 → 選擇銀行轉帳 → 送出訂單
4. 回後台「WooCommerce → 訂單」看到這筆訂單
5. 練習把訂單狀態改為「處理中」→「完成」

<!--
用無痕視窗是為了模擬真實訪客（未登入狀態）。
訂單狀態流：待付款 → 處理中 → 完成，對應義賣的「已下單 → 已收款 → 已取貨」。
有學員在這步發現付款方式沒出現 → 正好用上一頁的排查清單，現場機會教育。
-->


---
layout: section
---

# Sensei LMS

把你的教材變成線上課程

---

# 為什麼要做線上課程？

**教師情境**

- 自編教材線上化：學生隨時複習，請假也跟得上
- **翻轉教室**：課前在家看課程，課堂時間拿來討論與實作
- 補救教學／加深加廣，依學生程度自主進行
- **LMS**（Learning Management System）＝ 課程＋單元＋測驗＋進度追蹤

<v-click>

**Sensei LMS**：WooCommerce 同家族的課程外掛，與 WordPress 整合度高，**免費版即可**起步

</v-click>

<!--
這節對老師是「本行」，接受度通常最高。時間有限，目標是做出「一堂課、一個單元、一個測驗」的最小可行課程。
-->

---

# 安裝 Sensei LMS

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 3 分鐘</span>

1. 「外掛 → 安裝外掛」搜尋 **Sensei LMS**
2. 安裝 → 啟用
3. 左側選單出現「Sensei LMS」，首次有設定引導

<!--
設定引導照預設走即可。
付費擴充（證書、進階測驗等）以官網為準，今天用免費功能。
-->

---

# Sensei 的三層結構

蓋課程像蓋大樓：

- **課程（Course）**：一門完整課程，例：「七年級數學・一元一次方程式」
- **單元（Lesson）**：課程裡的一堂堂小課，例：「移項法則」
- **測驗（Quiz）**：附在單元裡的隨堂測驗

<div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
對照老師的語言：課程 = 一個單元的教學計畫，單元 = 一節課，測驗 = 隨堂考。
</div>

<!--
先把結構講清楚再動手，老師對「課程設計」的心智模型本來就有，對應過去就懂了。
-->

---

# 建立課程與單元

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 10 分鐘</span>

1. 「Sensei LMS → 課程 → 新增」
2. 課程名稱＋簡介＋課程圖片 → 發布
3. 在課程內**新增單元**：每個單元放教學內容
4. 單元內容可放：文字、圖片、**嵌入 YouTube 影片**

<!--
最快的內容來源：老師既有的教學影片（YouTube 連結直接貼上就會變播放器）＋講義文字。
建議課堂任務：一門課＋兩個單元就好，重點是跑通流程。
-->

---

# 建立測驗

<span class="inline-block text-xs font-bold text-white rounded px-2 py-0.5" style="background:#0073aa">實作 · 5 分鐘</span>

在單元中加入隨堂測驗：

1. 編輯單元 → 找到**測驗**區塊
2. 新增題目：選擇題、是非題、填空等題型
3. 設定正確答案與及格分數
4. 學生作答後自動批改（選擇題類）

<!--
自動批改是賣點：老師最有感的省時功能。
申論題需要手動批改，今天先教自動批改的題型。
-->

---

# 學生視角與進度追蹤

- 學生（網站註冊使用者）進入課程頁 → 點「**開始課程**」報名
- 逐單元學習，完成單元打勾，進度條前進
- 老師端：「Sensei LMS → 學員／報表」看**每個學生的進度與成績**

<div class="mt-2 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
搭配 WooCommerce 還能把課程變成「付費課程」，兩個外掛是同一家族，天生整合。
</div>

<!--
學生需要網站帳號：「設定 → 一般 → 任何人都可以註冊」要開啟，角色預設訂閱者即可。這是常見卡關點。
付費課程是延伸亮點，點到為止，有興趣的老師課後研究。
-->

---

# 今日外掛安裝清單回顧

| 外掛 | 用途 | 一句話重點 |
|---|---|---|
| Site Kit by Google | 流量分析 | 數據累積幾天後回來看 |
| WPForms | 表單 | 報名、回函不再用紙本 |
| Yoast SEO | 搜尋最佳化 | 跟著紅綠燈改 |
| EWWW Image Optimizer | 圖片壓縮 | 裝了就不用管 |
| Wordfence | 資安 | 防火牆 ＋ 掃描 |
| UpdraftPlus | 備份 | 最重要的保險 |
| Elementor | 頁面設計 | 讓網頁更有設計感 |
| WooCommerce | 電商 | 線上販售商品 |
| Sensei LMS | 線上課程 | 教材線上化 |

<!--
一頁回顧今天的戰果：9 個外掛、9 種超能力。
可以問大家：哪一個最有感？通常答案是備份或表單。
-->

---

# 外掛管理心法

帶得走的原則，比外掛名單更重要：

1. **一個需求，一個外掛**：不重複、不囤積
2. 挑外掛看：更新、評價、安裝數、支援
3. **每週更新**，更新前先備份
4. 不用的外掛**直接刪除**，不要只停用
5. 網站怪怪的 → 回想最近動了什麼 → 逐一停用排查

<!--
強調：今天教的 9 個外掛只是起點，未來換成任何外掛，這五條心法都適用。
-->

---

# Day 2 Checkpoint

離開教室前，請確認：

<div class="max-w-xl mx-auto mt-5 space-y-2">
  <div class="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
    <div class="w-5 h-5 rounded border-2 border-[#0073aa] shrink-0 mt-0.5"></div>
    <div><span class="font-bold text-[#0d324d]">聯絡表單可以送出</span><span class="text-xs text-gray-400 ml-2">後台收得到</span></div>
  </div>
  <div class="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
    <div class="w-5 h-5 rounded border-2 border-[#0073aa] shrink-0 mt-0.5"></div>
    <div><span class="font-bold text-[#0d324d]">Yoast SEO 運作中</span><span class="text-xs text-gray-400 ml-2">至少一篇文章設定焦點關鍵字</span></div>
  </div>
  <div class="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
    <div class="w-5 h-5 rounded border-2 border-[#0073aa] shrink-0 mt-0.5"></div>
    <div><span class="font-bold text-[#0d324d]">完成至少一次完整備份</span><span class="text-xs text-gray-400 ml-2">含 Google Drive 遠端</span></div>
  </div>
  <div class="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
    <div class="w-5 h-5 rounded border-2 border-[#0073aa] shrink-0 mt-0.5"></div>
    <div><span class="font-bold text-[#0d324d]">商店有一個商品</span><span class="text-xs text-gray-400 ml-2">自己成功下過一張訂單</span></div>
  </div>
  <div class="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
    <div class="w-5 h-5 rounded border-2 border-[#0073aa] shrink-0 mt-0.5"></div>
    <div><span class="font-bold text-[#0d324d]">建立一堂課程</span><span class="text-xs text-gray-400 ml-2">含一個單元</span></div>
  </div>
</div>


<v-click>

 有任何一項沒打勾的請務必舉手，我們今天一起處理完再走。

</v-click>

<!--
給 10 分鐘自我檢核，助教巡場。
沒完成的項目列入回家作業，Day 3 開場會再檢查。
備份那一項是底線中的底線，務必全員完成才放人。
-->

---

# 今日回顧

- **外掛**：WordPress 的 App 商店，60,000+ 選擇
- 流量、表單、SEO：讓網站被看見、能互動
- 圖片、資安、備份：讓網站快、安全、毀不掉
- Elementor、WooCommerce、Sensei：設計、開店、開課

<div class="mt-6 text-center text-xl">
你的網站今天從「能用」升級成「<b>好用又強大</b>」
</div>

<!--
快速串講一遍今天的旅程，讓學員有成就感。
-->

---

# 預告 Day 3：持續經營 ＋ AI 加值

明天你會學到：

- 網站的日常維運：更新節奏、內容經營策略
- **AI 加值**：用 AI 幫你寫文案、生圖片
- 重頭戲：**用 AI 寫一個客製外掛**，找不到現成外掛？自己「生」一個！
- 從「會用工具的人」變成「能創造工具的人」

<!--
吊足胃口：明天會現場用 AI 從零寫出一個全班都用得到的小外掛。
請學員回家完成今天沒打勾的 Checkpoint 項目。
-->

---
layout: center
class: text-center
---

# Q&A

一樣！有任何問題，現在就問！

<!--
常見 Q&A 準備：
1. 「外掛裝太多會怎樣？」→ 複習速度與資安成本、心法第 1 條。
2. 「免費版夠用嗎？」→ 今天全程免費版，進階需求再評估，付費功能以官網為準。
3. 「回去之後網站壞了怎麼辦？」→ 先別慌：有備份！排查心法＋還原流程。
4. 「學校的舊網站能搬到 WordPress 嗎？」→ 可以，搬家工具與做法課後聊。
-->

---
layout: center
class: text-center
---

# 謝謝大家！明天見 

**Day 2：外掛功能擴充**

講師：Eric Wu

 Facebook：fb.me/eric0324　｜　 ericwu.asia

<!--
提醒三件事再放人：
1. Checkpoint 沒完成的留下來。
2. 子網域網址與後台帳密保管好，明天要用。
3. 今晚小作業：想想還想要哪些網站功能。
-->
