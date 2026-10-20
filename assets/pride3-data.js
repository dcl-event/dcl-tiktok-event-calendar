/* 第3回 DCLトーナメント PRIDE ─ 共有データ
   ここだけ直せば、企画書ページ(pride3.html)と配布ページ(pride3-bracket.html)が両方変わります。
   翌月以降は finalLabel / finalDate / nights / format の夜だけ差し替えればそのまま使えます。 */
window.PRIDE3 = {
  status: "live",                                  // entry → live → done
  entryDeadline: "2026-10-13T23:59:00+09:00",
  announceDate: "10/15(木)",

  /* ── 日程（連日・中日なし。6枠。1回戦2試合 → 準決勝 → 決勝） ── */
  finalDate:  "2026-10-31T22:00:00+09:00",
  finalLabel: "10/31(土)",
  nights: ["10/29(木)", "10/30(金)", "10/31(土)"],
  consecutive: true,
  intervalNote: "4夜連続（中日なし）",

  /* ── 3回勝負は決勝と3位決定戦だけ。それ以外は一本勝負 ── */
  bestOfFinalOnly: true,
  bestOfNote: "3回勝負は決勝と3位決定戦だけ。2回勝った方が勝ち。それ以外の試合は一本勝負",
  thirdPlace: true,
  trophies: 3,                                      // 優勝・準優勝・3位                                      // 優勝・準優勝・3位

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
    { name: "1回戦", n: 2 }, { name: "準決勝", n: 2 }, { name: "決勝", n: 1 }
  ],

  entrants: [
    { seed: 1, name: "のん🤧🧂" },
    { seed: 2, name: "おどぎ" },
    { seed: 3, name: "maron🐈‍⬛💗" },
    { seed: 4, name: "れな🐟💚" },
    { seed: 5, name: "🍓まろん@美容整体師🌸" },
    { seed: 6, name: "？？？" }
  ],

  rounds: [
    { name: "1回戦", date: "10/29(木)", matches: [
      { id: "R1-1", at: "2026-10-29T22:00:00+09:00", a: { seed: 4, name: "れな🐟💚" },    b: { seed: 5, name: "🍓まろん@美容整体師🌸" }, winner: "" },
      { id: "R1-2", at: "2026-10-29T22:00:00+09:00", a: { seed: 3, name: "maron🐈‍⬛💗" }, b: { seed: 6, name: "？？？" },                 winner: "" }
    ]},
    { name: "準決勝", date: "10/30(金)", matches: [
      { id: "SF-1", at: "2026-10-30T22:00:00+09:00", src: [0], a: { seed: 1, name: "のん🤧🧂" }, b: null, winner: "" },
      { id: "SF-2", at: "2026-10-30T22:00:00+09:00", src: [1], a: { seed: 2, name: "おどぎ" },   b: null, winner: "" }
    ]},
    { name: "決勝", date: "10/31(土)", matches: [
      { id: "FINAL", at: "2026-10-31T22:00:00+09:00", src: [0, 1], a: null, b: null, winner: "" }
    ]}
  ]
};
