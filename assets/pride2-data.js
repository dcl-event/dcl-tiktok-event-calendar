/* ══════════════════════════════════════════════════════════════
   第2回 DCLトーナメント PRIDE ─ 共有データ
   このファイルだけ直せば、ライバー向けページとリスナー向け山割りの
   両方が同時に更新されます。
     status : "entry"（エントリー受付中）/ "live"（開催中）/ "done"（終了）
     rounds : winner は "a" / "b" / ""（未確定）
     src    : その試合に勝ち上がってくる「前ラウンドの試合番号」（0始まり）
   ══════════════════════════════════════════════════════════════ */
window.PRIDE2 = {
  status: "live",
  entryDeadline: "2026-09-13T23:59:00+09:00",
  announceDate: "9/14",
  finalDate: "2026-09-30T22:00:00+09:00",
  nights: ["9/20", "9/24", "9/27", "9/30"],
  champion: "",
  runnerUp: "",
  format: [
    { n: "2名",     br: "一本勝負",      bye: "—",     nights: "9/30" },
    { n: "3〜4名",  br: "4枠・2回戦",    bye: "4−N",   nights: "9/27 → 9/30" },
    { n: "5〜8名",  br: "8枠・3回戦",    bye: "8−N",   nights: "9/24 → 9/27 → 9/30" },
    { n: "9〜12名", br: "16枠・4回戦",   bye: "16−N",  nights: "9/20 → 9/24 → 9/27 → 9/30" },
    { n: "13名〜",  br: "16枠・4回戦",   bye: "16−N",  nights: "9/18・9/20（1回戦を2夜に分割）→ 以降同じ" }
  ],
  skeleton: [
    { name: "1回戦",   n: 3 },
    { name: "準々決勝", n: 4 },
    { name: "準決勝",   n: 2 },
    { name: "決勝",     n: 1 }
  ],
  entrants: [
    { seed: 1,  name: "ｷﾞﾌﾄｽﾀｰ🍓まろん@美容整体師🌸",              badge: "PRIDE四天王" },
    { seed: 2,  name: "maron🐈‍⬛💗",                      badge: "PRIDE四天王" },
    { seed: 3,  name: "ぐでち。🍳💫" },
    { seed: 4,  name: "まゆ🍀癒し部屋🍀" },
    { seed: 5,  name: "雲雀丘モガ@ギフトスター200位目標！" },
    { seed: 6,  name: "りーぬちゃん🐹🌻" },
    { seed: 7,  name: "🐉参戦・伝説のツチノトちゃん🧡💫登竜門がんばる😡🔮", withdrew: true },
    { seed: 8,  name: "nunu🍫🩵" },
    { seed: 9,  name: "ゆあ🐶🍫" },
    { seed: 10, name: "さーたん🎀👑登竜門参戦🐉" },
    { seed: 11, name: "ましゅまろ　うめ　🐉9/11~17登竜門参戦🐉", withdrew: true }
  ],
  rounds: [
    { name: "1回戦", date: "9/20(日)", matches: [
      { id: "R1-1", at: "2026-09-20T22:00:00+09:00",
        a: { seed: 8, name: "nunu🍫🩵" }, b: { seed: 9, name: "ゆあ🐶🍫" }, winner: "" },
      { id: "R1-2", at: "2026-09-20T22:00:00+09:00",
        a: { seed: 10, name: "さーたん🎀👑登竜門参戦🐉" },
        b: { seed: 11, name: "ましゅまろ　うめ　🐉9/11~17登竜門参戦🐉", withdrew: true }, winner: "a" },
      { id: "R1-3", at: "2026-09-20T22:00:00+09:00",
        a: { seed: 6, name: "りーぬちゃん🐹🌻" },
        b: { seed: 7, name: "🐉参戦・伝説のツチノトちゃん🧡💫登竜門がんばる😡🔮", withdrew: true }, winner: "a" }
    ]},
    { name: "準々決勝", date: "9/24(木)", matches: [
      { id: "QF-1", at: "2026-09-24T22:00:00+09:00", src: [0],
        a: { seed: 2, name: "maron🐈‍⬛💗", bye: true },          b: null, winner: "" },
      { id: "QF-2", at: "2026-09-24T22:00:00+09:00", src: [],
        a: { seed: 4, name: "まゆ🍀癒し部屋🍀", bye: true },      b: { seed: 5, name: "雲雀丘モガ@ギフトスター200位目標！", bye: true }, winner: "" },
      { id: "QF-3", at: "2026-09-24T22:00:00+09:00", src: [1],
        a: { seed: 3, name: "ぐでち。🍳💫", bye: true },
        b: { seed: 10, name: "さーたん🎀👑登竜門参戦🐉" }, winner: "" },
      { id: "QF-4", at: "2026-09-24T22:00:00+09:00", src: [2],
        a: { seed: 1, name: "ｷﾞﾌﾄｽﾀｰ🍓まろん@美容整体師🌸", bye: true },
        b: { seed: 6, name: "りーぬちゃん🐹🌻" }, winner: "" }
    ]},
    { name: "準決勝", date: "9/27(日)", matches: [
      { id: "SF-1", at: "2026-09-27T22:00:00+09:00", a: null, b: null, winner: "" },
      { id: "SF-2", at: "2026-09-27T22:00:00+09:00", a: null, b: null, winner: "" }
    ]},
    { name: "決勝", date: "9/30(水)", matches: [
      { id: "FINAL", at: "2026-09-30T22:00:00+09:00", a: null, b: null, winner: "" }
    ]}
  ]
};
