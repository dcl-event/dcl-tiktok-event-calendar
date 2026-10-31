/* DCLトーナメント PRIDE（20万ダイヤ以下部門）─ 共有データ
   主導＝池さん。ここだけ直せば pride3-gold.html と pride3-gold-bracket.html が両方変わります。
   シードは「10月の獲得ダイヤ」で並べた。強い人どうしが早い段階で潰し合わないようにするため。
   1回戦の組み合わせは 1-8 / 4-5 / 3-6 / 2-7。①と②が決勝まで当たらない形。
   ⚠️ ダイヤの実数はこのファイルにも書かない。ページに出る可能性があるため。 */
window.PRIDE3G = {
  division: "20万ダイヤ以下部門",                       // ライバー向けページにだけ出す
  status: "done",                                   // entry → live → done

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

  champion: "絢斗 -ｹﾝﾄ-",
  runnerUp: "糸結おでん🍢",
  thirdPlaceWinner: "雲雀丘モガ",

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
    { seed: 1, name: "絢斗 -ｹﾝﾄ-" },
    { seed: 2, name: "いぶ☕️🧡" },
    { seed: 3, name: "糸結おでん🍢" },
    { seed: 4, name: "伝説のツチノトちゃん🧡💫" },
    { seed: 5, name: "雲雀丘モガ" },
    { seed: 6, name: "ぺんぎょす" },
    { seed: 7, name: "さーたん🎀👑" },
    { seed: 8, name: "ましゅまろ　うめ" }
  ],

  rounds: [
    { name: "1回戦", date: "10/29(木)", matches: [
      { id: "R1-1", at: "2026-10-29T22:00:00+09:00", a: { seed: 1, name: "絢斗 -ｹﾝﾄ-" },            b: { seed: 8, name: "ましゅまろ　うめ" }, winner: "a" },
      { id: "R1-2", at: "2026-10-29T22:00:00+09:00", a: { seed: 4, name: "伝説のツチノトちゃん🧡💫" }, b: { seed: 5, name: "雲雀丘モガ" },       winner: "b" },
      { id: "R1-3", at: "2026-10-29T22:00:00+09:00", a: { seed: 3, name: "糸結おでん🍢" },            b: { seed: 6, name: "ぺんぎょす" },       winner: "a" },
      { id: "R1-4", at: "2026-10-29T22:00:00+09:00", a: { seed: 2, name: "いぶ☕️🧡" },              b: { seed: 7, name: "さーたん🎀👑" },     winner: "b" }
    ]},
    { name: "準決勝", date: "10/30(金)", matches: [
      { id: "SF-1", at: "2026-10-30T22:00:00+09:00", src: [0, 1], a: { seed: 1, name: "絢斗 -ｹﾝﾄ-" },   b: { seed: 5, name: "雲雀丘モガ" },   winner: "a" },
      { id: "SF-2", at: "2026-10-30T22:00:00+09:00", src: [2, 3], a: { seed: 3, name: "糸結おでん🍢" }, b: { seed: 7, name: "さーたん🎀👑" }, winner: "a" }
    ]},
    { name: "決勝・3位決定戦", date: "10/31(土)", matches: [
      /* matches[0] が決勝。優勝者の判定がここを見るので、順番を入れ替えないこと */
      { id: "FINAL", at: "2026-10-31T22:00:00+09:00", src: [0, 1], a: { seed: 1, name: "絢斗 -ｹﾝﾄ-" },  b: { seed: 3, name: "糸結おでん🍢" }, winner: "a" },
      { id: "3位決定戦", at: "2026-10-31T22:00:00+09:00",          a: { seed: 5, name: "雲雀丘モガ" }, b: { seed: 7, name: "さーたん🎀👑" }, winner: "a" }
    ]}
  ]
};
