/* DCLトーナメント PRIDE（20万ダイヤ以下部門）─ 共有データ
   主導＝池さん。ここだけ直せば pride3-gold.html と pride3-gold-bracket.html が両方変わります。
   シードは「10月の獲得ダイヤ」で並べた。強い人どうしが早い段階で潰し合わないようにするため。
   1回戦の組み合わせは福本の指定（A〜Dブロック）。
   ⚠️ ダイヤの実数はこのファイルにも書かない。ページに出る可能性があるため。 */
window.PRIDE3G = {
  division: "20万ダイヤ以下部門",                       // ライバー向けページにだけ出す
  status: "live",                                   // entry → live → done

  entryDeadline: "2026-10-13T23:59:00+09:00",
  announceDate: "10/15(木)",

  /* ── 日程（連日・中日なし。8名なので10/31から3夜を使う） ── */
  finalDate:  "2026-10-31T22:00:00+09:00",
  finalLabel: "10/31(土)",
  nights: ["10/29(木)", "10/30(金)", "10/31(土)"],
  consecutive: true,
  intervalNote: "連日（中日なし）",

  /* ── 3回勝負は決勝と3位決定戦だけ。それ以外は一本勝負 ── */
  bestOfFinalOnly: true,
  bestOfNote: "3回勝負は決勝と3位決定戦だけ。2回勝った方が勝ち。それ以外の試合は一本勝負",
  thirdPlace: true,
  trophies: 3,

  champion: "",
  runnerUp: "",
  thirdPlaceWinner: "",

  format: [
    { n: "2名",     br: "決勝のみ",    bye: "—",    nights: "10/31" },
    { n: "3〜4名",  br: "4枠・2回戦",  bye: "4−N",  nights: "10/30 → 10/31" },
    { n: "5〜8名",  br: "8枠・3回戦",  bye: "8−N",  nights: "10/29 → 10/30 → 10/31" },
    { n: "9〜16名", br: "16枠・4回戦", bye: "16−N", nights: "10/28 → 10/29 → 10/30 → 10/31" }
  ],

  skeleton: [
    { name: "1回戦", n: 4 }, { name: "準決勝", n: 2 }, { name: "決勝", n: 1 }
  ],

  entrants: [
    { seed: 1, name: "lala🌴" },
    { seed: 2, name: "伝説のツチノトちゃん🧡💫" },
    { seed: 3, name: "雲雀丘モガ" },
    { seed: 4, name: "いぶ☕️🧡" },
    { seed: 5, name: "さーたん🎀👑" },
    { seed: 6, name: "ましゅまろ　うめ" },
    { seed: 7, name: "ぺんぎょす" },
    { seed: 8, name: "絢斗 -ｹﾝﾄ-" }
  ],

  rounds: [
    { name: "1回戦", date: "10/29(木)", matches: [
      { id: "R1-1", at: "2026-10-29T22:00:00+09:00", a: { seed: 1, name: "lala🌴" },               b: { seed: 8, name: "絢斗 -ｹﾝﾄ-" },     winner: "" },
      { id: "R1-2", at: "2026-10-29T22:00:00+09:00", a: { seed: 4, name: "いぶ☕️🧡" },              b: { seed: 6, name: "ましゅまろ　うめ" },   winner: "" },
      { id: "R1-3", at: "2026-10-29T22:00:00+09:00", a: { seed: 2, name: "伝説のツチノトちゃん🧡💫" }, b: { seed: 7, name: "ぺんぎょす" },        winner: "" },
      { id: "R1-4", at: "2026-10-29T22:00:00+09:00", a: { seed: 3, name: "雲雀丘モガ" },             b: { seed: 5, name: "さーたん🎀👑" },     winner: "" }
    ]},
    { name: "準決勝", date: "10/30(金)", matches: [
      { id: "SF-1", at: "2026-10-30T22:00:00+09:00", src: [0, 1], a: null, b: null, winner: "" },
      { id: "SF-2", at: "2026-10-30T22:00:00+09:00", src: [2, 3], a: null, b: null, winner: "" }
    ]},
    { name: "決勝", date: "10/31(土)", matches: [
      { id: "FINAL", at: "2026-10-31T22:00:00+09:00", src: [0, 1], a: null, b: null, winner: "" }
    ]}
  ]
};
