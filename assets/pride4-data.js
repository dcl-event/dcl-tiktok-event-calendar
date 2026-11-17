/* PRIDE TOP 11月（11/20〜11/25・LIVE FEST 2 の期間）─ 共有データ
   ⚠️ 表に出す名前は TOP / MIDDLE。「20万ダイヤ以上／以下」は社内の招待基準で、ページには書かない（収入が割り出せるため）
   ここだけ直せば、企画書ページ(pride4.html)と配布ページ(pride4-bracket.html)が両方変わります。
   いまは status:"entry"＝エントリー受付中。出場者が確定したら entrants と rounds を入れる。
   ⚠️ ダイヤの実数はこのファイルに書かない。ページに出る可能性があるため。 */
window.PRIDE3 = {
  division: "TOP",                                  // ライバー向けページにだけ出す
  status: "entry",                                 // entry → live → done

  entryDeadline: "2026-11-15T23:59:00+09:00",      // 締切 11/15(日) 23:59　※前回は招待から5日。変更が多かったので10日に伸ばした
  announceDate: "11/17(火)",                        // 山割り発表

  /* ── 日程（LIVE FEST に合わせて 11/20(金)〜11/25(水)。決勝は最終日の11/25） ── */
  finalDate:  "2026-11-25T22:00:00+09:00",
  finalLabel: "11/25(水)",
  nights: ["11/23(月)", "11/24(火)", "11/25(水)"],  // 人数が決まったら増減（最大は4夜＝11/22〜11/25）
  consecutive: true,
  intervalNote: "連日（中日なし）",

  /* ── 3回勝負は決勝と3位決定戦だけ。それ以外は一本勝負（第3回と同じ） ── */
  bestOfFinalOnly: true,
  bestOfNote: "3回勝負は決勝と3位決定戦だけ。2回勝った方が勝ち。それ以外の試合は一本勝負",
  thirdPlace: true,
  trophies: 3,                                      // 優勝・準優勝・3位

  champion: "",
  runnerUp: "",
  thirdPlaceWinner: "",

  format: [
    { n: "2名",     br: "決勝のみ",    bye: "—",    nights: "11/25" },
    { n: "3〜4名",  br: "4枠・2回戦",  bye: "4−N",  nights: "11/24 → 11/25" },
    { n: "5〜8名",  br: "8枠・3回戦",  bye: "8−N",  nights: "11/23 → 11/24 → 11/25" },
    { n: "9〜16名", br: "16枠・4回戦", bye: "16−N", nights: "11/22 → 11/23 → 11/24 → 11/25" }
  ],

  /* エントリー締切後に rounds を入れると、この skeleton は使われなくなります */
  skeleton: [
    { name: "1回戦", n: 4 }, { name: "準決勝", n: 2 }, { name: "決勝", n: 1 }
  ],

  /* ── 仮フラグ。確定したらこのブロックごと消す（ページから仮の表示が消えます） ── */
  provisional: {
    label: "仮の山割り",
    note: "エントリーのお返事をまだ待っている方がいます。出場者が増えると、組み合わせが変わることがあります。"
  },

  /* 表にシード番号は出しません（当月ダイヤの順位がそのまま見えてしまうため）。
     並びの計算には seed を使うので、データ側には残しています。 */
  hideSeeds: true,

  /* user = TikTokのユーザー名。名前の横のTikTokアイコンのリンク先になります。
     同じ表示名の人が実在するので、必ず @ユーザー名 で合わせること（例: にゃんさんは2人いる） */
  entrants: [
    { seed: 1, name: "のん🤧🧂", user: "nyonnyon0927" },
    { seed: 2, name: "いぶ将軍🪭", user: "eve_122394" },
    { seed: 3, name: "絢斗-ｹﾝﾄ-", user: "kent.room0235" },
    { seed: 4, name: "nunu🍫🩵", user: "nunu15864" },
    { seed: 5, name: "にゃん", user: "xxivue" },
    { seed: 6, name: "🍓まろん@美容整体師🌸", user: "ytncousk455" },
    { seed: 7, name: "ひろにゃん", user: "hiro.mi.ao" },
    { seed: 8, name: "？？？" }
  ],

  /* ── 8枠・3回戦で固定。8枠目は空けて「？？？」にしてあります ──
     並びは 1-8 / 4-5 / 3-6 / 2-7。SEED1 と SEED2 は決勝まで当たりません。
     シードは「当月（11月）の獲得ダイヤ」で引いていますが、ページには出しません。
     ※9名以上になると4夜（11/22〜）に変わります。8名で締める前提の形です。 */
  rounds: [
    { name: "1回戦", date: "11/23(月)", matches: [
      { id: "R1-1", at: "2026-11-23T22:00:00+09:00", a: { seed: 1, name: "のん🤧🧂" },   b: { seed: 8, name: "？？？" },                winner: "" },
      { id: "R1-2", at: "2026-11-23T22:00:00+09:00", a: { seed: 4, name: "nunu🍫🩵" },   b: { seed: 5, name: "にゃん" },                winner: "" },
      { id: "R1-3", at: "2026-11-23T22:00:00+09:00", a: { seed: 3, name: "絢斗-ｹﾝﾄ-" },  b: { seed: 6, name: "🍓まろん@美容整体師🌸" }, winner: "" },
      { id: "R1-4", at: "2026-11-23T22:00:00+09:00", a: { seed: 2, name: "いぶ将軍🪭" }, b: { seed: 7, name: "ひろにゃん" },             winner: "" }
    ]},
    { name: "準決勝", date: "11/24(火)", matches: [
      { id: "SF-1", at: "2026-11-24T22:00:00+09:00", src: [0, 1], a: null, b: null, winner: "" },
      { id: "SF-2", at: "2026-11-24T22:00:00+09:00", src: [2, 3], a: null, b: null, winner: "" }
    ]},
    { name: "決勝・3位決定戦", date: "11/25(水)", matches: [
      /* matches[0] が決勝。優勝者の判定がここを見るので、順番を入れ替えないこと */
      { id: "FINAL",     at: "2026-11-25T22:00:00+09:00", src: [0, 1], a: null, b: null, winner: "" },
      { id: "3位決定戦", at: "2026-11-25T22:00:00+09:00",              a: null, b: null, winner: "" }
    ]}
  ]
};
