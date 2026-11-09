/* PRIDE with FEST 3 ＝ TOP 部門 ─ 共有データ
   ⚠️ 表に出す名前は TOP / MIDDLE。「20万ダイヤ以上／以下」は社内の招待基準で、ページには書かない
   ここだけ直せば、企画書ページ(pride5.html)と配布ページ(pride5-bracket.html)が両方変わります。
   いまは status:"entry"＝エントリー受付中。出場者が確定したら entrants と rounds を入れる。
   ⚠️ ダイヤの実数はこのファイルに書かない。ページに出る可能性があるため。 */
window.PRIDE3 = {
  division: "TOP",                                  // ライバー向けページにだけ出す
  status: "entry",                                 // entry → live → done

  entryDeadline: "2026-12-04T23:59:00+09:00",      // 締切 12/4(金) 23:59
  announceDate: "12/07(月)",                        // 山割り発表

  /* ── 日程（LIVE FEST に合わせて 12/10(木)〜12/15(火)。決勝は最終日の12/15） ── */
  finalDate:  "2026-12-15T22:00:00+09:00",
  finalLabel: "12/15(火)",
  nights: ["12/13(日)", "12/14(月)", "12/15(火)"],  // 人数が決まったら増減（最大は12/10〜12/15の6夜）
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
    { n: "2名",     br: "決勝のみ",    bye: "—",    nights: "12/15" },
    { n: "3〜4名",  br: "4枠・2回戦",  bye: "4−N",  nights: "12/14 → 12/15" },
    { n: "5〜8名",  br: "8枠・3回戦",  bye: "8−N",  nights: "12/13 → 12/14 → 12/15" },
    { n: "9〜16名", br: "16枠・4回戦", bye: "16−N", nights: "12/12 → 12/13 → 12/14 → 12/15" },
    { n: "17〜32名",br: "32枠・5回戦", bye: "32−N", nights: "12/11 → 12/12 → 12/13 → 12/14 → 12/15" }
  ],

  /* エントリー締切後に rounds を入れると、この skeleton は使われなくなります */
  skeleton: [
    { name: "1回戦", n: 4 }, { name: "準決勝", n: 2 }, { name: "決勝", n: 1 }
  ],

  entrants: []
  /* ── 出場者が決まったら、ここから下を入れる ──
     ・シードは「当月（12月）の獲得ダイヤ」で引く。前月では引かない
     ・8枠の並びは 1-8 / 4-5 / 3-6 / 2-7。①と②が決勝まで当たらない形
     ・欠場による不戦勝は、負け側に withdrew: true を付ける（LOSEと出なくなる）
  */
};
