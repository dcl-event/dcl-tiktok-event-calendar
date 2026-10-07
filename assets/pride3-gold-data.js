/* DCLトーナメント PRIDE（20万ダイヤ未満の回・黒金）─ 共有データ
   主導＝池さん。ここだけ直せば pride3-gold.html と pride3-gold-bracket.html が両方変わります。

   ⚠️ 下の日程・人数は「赤（20万+・10/28〜10/31）とぶつけない」前提で置いた仮です。
      池さんの確認待ち：日程／対象の線／想定人数／賞／王者の呼び方／結果更新の担当 */
window.PRIDE3G = {
  division: "20万ダイヤ以下部門",                       // ライバー向けページにだけ出す（配布ページには出さない）
  status: "entry",                                  // entry → live → done
  entryDeadline: "2026-10-13T23:59:00+09:00",       // 赤と揃えてある（要確認）
  announceDate: "10/15(木)",                         // 赤と揃えてある（要確認）

  /* ── 日程（連日・中日なし／赤の開幕10/28の前日に終わる並び） ── */
  finalDate:  "2026-10-27T22:00:00+09:00",
  finalLabel: "10/27(火)",
  nights: ["10/24(土)", "10/25(日)", "10/26(月)", "10/27(火)"],
  consecutive: true,
  intervalNote: "連日（中日なし）",

  /* ── 3回勝負は決勝と3位決定戦だけ。それ以外は一本勝負（赤と同じ） ── */
  bestOfFinalOnly: true,
  bestOfNote: "3回勝負は決勝と3位決定戦だけ。2回勝った方が勝ち。それ以外の試合は一本勝負",
  thirdPlace: true,
  trophies: 3,

  champion: "",
  runnerUp: "",
  thirdPlaceWinner: "",

  format: [
    { n: "2名",     br: "決勝のみ",    bye: "—",    nights: "10/27" },
    { n: "3〜4名",  br: "4枠・2回戦",  bye: "4−N",  nights: "10/26 → 10/27" },
    { n: "5〜8名",  br: "8枠・3回戦",  bye: "8−N",  nights: "10/25 → 10/26 → 10/27" },
    { n: "9〜16名", br: "16枠・4回戦", bye: "16−N", nights: "10/24 → 10/25 → 10/26 → 10/27" }
  ],

  skeleton: [
    { name: "1回戦", n: 8 }, { name: "準々決勝", n: 4 }, { name: "準決勝", n: 2 }, { name: "決勝", n: 1 }
  ],

  entrants: [],
  rounds: []
};
