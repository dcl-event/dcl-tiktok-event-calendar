(function () {
  var META = window.EVENT_META;
  var LAYERS = [
    { id: 'overall', label: 'Overall（全員対象）', color: 'var(--overall)' },
    { id: 'top', label: 'Top・Pre-top（超上級〜上級）', color: 'var(--top)' },
    { id: 'mid', label: 'Pre-top・Middle（上級〜中級）', color: 'var(--mid)' },
    { id: 'low', label: 'Middle・Bottom・新人（中級〜初級）', color: 'var(--low)' }
  ];

  var DAY = 86400000;
  var start = toDate(META.rangeStart);
  var end = toDate(META.rangeEnd);
  var total = idx(end) + 1;
  var dayW = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--day-w')) || 12;

  var state = { layer: 'all', q: '', selected: null };
  var events = (window.EVENTS || []).concat(window.EVENTS_INTERNAL || []);

  function toDate(s) {
    var p = s.split('-');
    return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
  }
  function idx(d) { return Math.round((d - start) / DAY); }
  function px(days) { return days * dayW; }
  function fmt(d) { return (d.getUTCMonth() + 1) + '/' + d.getUTCDate(); }
  function rangeText(seg) {
    var s = toDate(seg.s), e = toDate(seg.e);
    if (seg.s === seg.e) return fmt(s);
    if (s.getUTCMonth() === e.getUTCMonth()) return fmt(s) + '-' + e.getUTCDate();
    return fmt(s) + '-' + fmt(e);
  }
  function todayIdx() {
    var now = new Date();
    var t = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    var i = idx(t);
    return i >= 0 && i < total ? i : null;
  }

  function backdrop() {
    var h = '<div class="weekend-layer">';
    for (var i = 0; i < total; i++) {
      var d = new Date(start.getTime() + i * DAY);
      var wd = d.getUTCDay();
      if (wd === 0 || wd === 6) {
        h += '<div class="weekend" style="left:' + px(i) + 'px;width:' + dayW + 'px"></div>';
      }
    }
    h += '</div><div class="gridline-layer">';
    for (var j = 0; j < total; j++) {
      var dd = new Date(start.getTime() + j * DAY);
      if (dd.getUTCDate() === 1) {
        h += '<div class="vline month" style="left:' + px(j) + 'px"></div>';
      } else if (dd.getUTCDay() === 1) {
        h += '<div class="vline" style="left:' + px(j) + 'px"></div>';
      }
    }
    var ti = todayIdx();
    if (ti !== null) h += '<div class="vline today" style="left:' + px(ti) + 'px"></div>';
    return h + '</div>';
  }

  function axis() {
    var h = '<div class="axis"><div class="cell-label">対象レイヤー / イベント</div><div class="track" style="width:' + px(total) + 'px">' + backdrop();
    h += '<div class="months">';
    for (var i = 0; i < total; i++) {
      var d = new Date(start.getTime() + i * DAY);
      if (i === 0 || d.getUTCDate() === 1) {
        h += '<div class="month" style="left:' + px(i) + 'px">' + (d.getUTCMonth() + 1) + '月</div>';
      }
    }
    h += '</div>';
    for (var j = 0; j < total; j++) {
      var dd = new Date(start.getTime() + j * DAY);
      if (dd.getUTCDay() === 1 || j === 0) {
        h += '<div class="tickline" style="left:' + px(j) + 'px"></div>';
        if (dd.getUTCDay() === 1) h += '<div class="tick" style="left:' + px(j) + 'px">' + fmt(dd) + '</div>';
      }
    }
    var ti = todayIdx();
    if (ti !== null) h += '<div class="today-flag" style="left:' + (px(ti) + 4) + 'px;transform:none">今日 ' + fmt(new Date(start.getTime() + ti * DAY)) + '</div>';
    return h + '</div></div>';
  }

  function visible() {
    var q = state.q.trim().toLowerCase();
    return events.filter(function (ev) {
      if (state.layer !== 'all' && ev.layer !== state.layer) return false;
      if (!q) return true;
      return (ev.name + ' ' + (ev.target || '') + ' ' + (ev.note || '') + ' ' + (ev.summary || []).join(' ')).toLowerCase().indexOf(q) >= 0;
    });
  }

  function rows() {
    var list = visible(), h = '';
    LAYERS.forEach(function (L) {
      var group = list.filter(function (ev) { return ev.layer === L.id; });
      if (!group.length) return;
      h += '<div class="section"><div class="cell-label">' + L.label + '</div><div class="track" style="width:' + px(total) + 'px">' + backdrop() + '</div></div>';
      group.forEach(function (ev) {
        h += '<div class="row" role="option" aria-selected="' + (state.selected === ev.id) + '" data-id="' + ev.id + '" tabindex="0">';
        h += '<div class="cell-label">' + (ev.restricted ? '<span class="lock" title="社外共有・配信中の言及は禁止">社外NG</span>' : '') + '<span class="name" title="' + esc(ev.name) + '">' + esc(ev.name) + '</span></div>';
        h += '<div class="track" style="width:' + px(total) + 'px">' + backdrop();
        var segPx = ev.segs.map(function (seg) {
          var s0 = idx(toDate(seg.s)), e0 = idx(toDate(seg.e));
          return { s: s0, e: e0, w: Math.max((e0 - s0 + 1) * dayW, 6), text: rangeText(seg) + (seg.label ? ' ' + seg.label : '') };
        });
        var dense = segPx.length >= 4;
        segPx.forEach(function (b, k) {
          h += '<div class="bar' + (b.s === b.e ? ' point' : '') + '" style="left:' + px(b.s) + 'px;width:' + b.w + 'px;background:' + L.color + '" title="' + esc(ev.name + ' \uff0f ' + b.text) + '">';
          if (b.w >= 78) h += '<div class="bar-inner">' + esc(b.text) + '</div>';
          h += '</div>';
          if (b.w >= 78 || dense) return;
          var need = b.text.length * 6.4 + 10;
          var nextLeft = k + 1 < segPx.length ? px(segPx[k + 1].s) : px(total);
          var right = px(b.e + 1) + 5;
          var prevRight = k > 0 ? px(segPx[k - 1].e + 1) : 0;
          if (right + need <= nextLeft) {
            h += '<div class="bar-text" style="left:' + right + 'px">' + esc(b.text) + '</div>';
          } else if (px(b.s) - need >= prevRight) {
            h += '<div class="bar-text" style="left:' + (px(b.s) - 5) + 'px;transform:translateX(-100%)">' + esc(b.text) + '</div>';
          }
        });
        h += '</div></div>';
      });
    });
    return h || '<div style="padding:24px" class="empty">条件に合うイベントがありません</div>';
  }

  function detail() {
    var ev = events.filter(function (x) { return x.id === state.selected; })[0];
    if (!ev) return '<div class="detail empty">バーまたは行をクリックすると、参加条件・概要・注記が出ます</div>';
    var periods = ev.segs.map(function (s) { return rangeText(s) + (s.label ? '（' + s.label + '）' : ''); }).join(' ／ ');
    var h = '<div class="detail"><h2>' + esc(ev.name) + '</h2>';
    h += '<div class="kv">開催時期：' + esc(periods) + '　|　参加対象：' + esc(ev.target || '記載なし') + '</div>';
    if (ev.summary && ev.summary.length) {
      h += '<ul>' + ev.summary.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>';
    }
    if (ev.note) h += '<div class="kv" style="margin:10px 0 0">注記：' + esc(ev.note) + '</div>';
    if (ev.restricted) h += '<div class="warn">社外共有・LIVE配信中での言及・SNS発信は禁止（未解禁情報）</div>';
    return h + '</div>';
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function render() {
    document.getElementById('chart').innerHTML = '<div class="grid">' + axis() + rows() + '</div>';
    document.getElementById('detail').innerHTML = detail();
    Array.prototype.forEach.call(document.querySelectorAll('.row'), function (el) {
      el.addEventListener('click', function () { state.selected = el.getAttribute('data-id'); render(); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); state.selected = el.getAttribute('data-id'); render(); }
      });
    });
  }

  function controls() {
    var h = '<button class="chip" data-layer="all" aria-pressed="true">すべて（' + events.length + '）</button>';
    LAYERS.forEach(function (L) {
      var n = events.filter(function (e) { return e.layer === L.id; }).length;
      if (!n) return;
      h += '<button class="chip" data-layer="' + L.id + '" aria-pressed="false"><span class="dot" style="background:' + L.color + '"></span>' + L.label.split('（')[0] + '（' + n + '）</button>';
    });
    h += '<input type="search" id="q" placeholder="イベント名・条件で絞り込む" aria-label="イベント検索">';
    h += '<button class="chip" id="jump-today">今日へ</button>';
    document.getElementById('controls').innerHTML = h;
    Array.prototype.forEach.call(document.querySelectorAll('.chip[data-layer]'), function (btn) {
      btn.addEventListener('click', function () {
        state.layer = btn.getAttribute('data-layer');
        Array.prototype.forEach.call(document.querySelectorAll('.chip[data-layer]'), function (b) {
          b.setAttribute('aria-pressed', String(b === btn));
        });
        render();
      });
    });
    document.getElementById('q').addEventListener('input', function (e) { state.q = e.target.value; render(); });
    document.getElementById('jump-today').addEventListener('click', function () {
      var t = todayIdx();
      if (t !== null) document.getElementById('chart').scrollTo({ left: Math.max(0, px(t) - (window.innerWidth < 640 ? 16 : 140)), behavior: 'smooth' });
    });
  }

  function head() {
    var internal = !!(window.EVENTS_INTERNAL && window.EVENTS_INTERNAL.length);
    var h = '<span>最終更新 ' + META.updated + '</span>';
    if (internal) h += '<span class="badge on">社内版：未公開' + window.EVENTS_INTERNAL.length + '件を含む</span>';
    document.getElementById('meta').innerHTML = h;
  }

  head();
  controls();
  render();

  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      var w = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--day-w')) || 12;
      if (w === dayW) return;
      dayW = w;
      var t = todayIdx();
      render();
      if (t !== null) document.getElementById('chart').scrollLeft = Math.max(0, px(t) - (window.innerWidth < 640 ? 16 : 140));
    }, 200);
  });

  function leadIn() { return window.innerWidth < 640 ? 16 : 140; }
  var ti = todayIdx();
  if (ti !== null) {
    var chart = document.getElementById('chart');
    chart.scrollLeft = Math.max(0, px(ti) - leadIn());
  }
})();
