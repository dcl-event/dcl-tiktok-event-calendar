/* 第3回 DCLトーナメント PRIDE ─ 共有データ
   ここだけ直せば、企画書ページ(pride3.html)と配布ページ(pride3-bracket.html)が両方変わります。
   翌月以降は finalLabel / finalDate / nights / format の夜だけ差し替えればそのまま使えます。 */
window.PRIDE3 = {
  status: "entry",                                  // entry → live → done
  entryDeadline: "2026-10-13T23:59:00+09:00",
  announceDate: "10/15(木)",

  /* ── 日程（連日開催・中日なし／決勝は月の最終日） ── */
  finalDate:  "2026-10-31T22:00:00+09:00",
  finalLabel: "10/31(土)",
  nights: ["10/28(水)", "10/29(木)", "10/30(金)", "10/31(土)"],
  consecutive: true,
  intervalNote: "4夜連続（中日なし）",

  /* ── 3回勝負は決勝と3位決定戦だけ。それ以外は一本勝負 ── */
  bestOfFinalOnly: true,
  bestOfNote: "3回勝負は決勝と3位決定戦だけ。2回勝った方が勝ち。それ以外の試合は一本勝負",
  thirdPlace: true,
  trophies: 3,                                      // 優勝・準優勝・3位

  champion: "",
  runnerUp: "",
  thirdPlaceWinner: "",

  format: [
    { n: "2名",     br: "決勝のみ",    bye: "—",    nights: "10/31" },
    { n: "3〜4名",  br: "4枠・2回戦",  bye: "4−N",  nights: "10/30 → 10/31" },
    { n: "5〜8名",  br: "8枠・3回戦",  bye: "8−N",  nights: "10/29 → 10/30 → 10/31" },
    { n: "9〜16名", br: "16枠・4回戦", bye: "16−N", nights: "10/28 → 10/29 → 10/30 → 10/31" }
  ],

  /* エントリー締切後に rounds を入れると、この skeleton は使われなくなります */
  skeleton: [
    { name: "1回戦", n: 8 }, { name: "準々決勝", n: 4 }, { name: "準決勝", n: 2 }, { name: "決勝", n: 1 }
  ],

  entrants: [],
  rounds: []
};
