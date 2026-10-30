/* 第4回 DCLトーナメント PRIDE（20万ダイヤ以上部門）─ 共有データ
   ここだけ直せば、企画書ページ(pride4.html)と配布ページ(pride4-bracket.html)が両方変わります。
   いまは status:"entry"＝エントリー受付中。出場者が確定したら entrants と rounds を入れる。
   ⚠️ ダイヤの実数はこのファイルに書かない。ページに出る可能性があるため。 */
window.PRIDE3 = {
  status: "entry",                                 // entry → live → done

  entryDeadline: "2026-11-10T23:59:00+09:00",      // 締切 11/10(火) 23:59
  announceDate: "11/12(木)",                        // 山割り発表

  /* ── 日程（連日・中日なし。決勝は月の最終日に置く＝その夜のダイヤが当月に乗る） ── */
  finalDate:  "2026-11-28T22:00:00+09:00",
  finalLabel: "11/28(土)",
  nights: ["11/26(木)", "11/27(金)", "11/28(土)"],  // 人数が決まったら増減する
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
    { n: "2名",     br: "決勝のみ",    bye: "—",    nights: "11/28" },
    { n: "3〜4名",  br: "4枠・2回戦",  bye: "4−N",  nights: "11/27 → 11/28" },
    { n: "5〜8名",  br: "8枠・3回戦",  bye: "8−N",  nights: "11/26 → 11/27 → 11/28" },
    { n: "9〜16名", br: "16枠・4回戦", bye: "16−N", nights: "11/25 → 11/26 → 11/27 → 11/28" }
  ],

  /* エントリー締切後に rounds を入れると、この skeleton は使われなくなります */
  skeleton: [
    { name: "1回戦", n: 4 }, { name: "準決勝", n: 2 }, { name: "決勝", n: 1 }
  ],

  entrants: []
  /* ── 出場者が決まったら、ここから下を入れる ──
     ・シードは「当月（11月）の獲得ダイヤ」で引く。前月では引かない
     ・8枠の並びは 1-8 / 4-5 / 3-6 / 2-7。①と②が決勝まで当たらない形
     ・欠場による不戦勝は、負け側に withdrew: true を付ける（LOSEと出なくなる）
  */
};
