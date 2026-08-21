# TikTok LIVE 公式イベントカレンダー

Lark の [【EXT】【BS＆Agency向け】TikTok LIVE公式イベント One Pager](https://bytedance.larkoffice.com/wiki/YZ4Pw7SjCim8xUkww0RcoDQ9nxf) の
イベント一覧を、日付軸のガントチャートに組み直した静的サイト。ビルド不要（HTML + CSS + バニラJS）。

## 使い方

```bash
python3 -m http.server 8080
```

`http://localhost:8080` を開く。ファイルを直接開いても動く（データは `window.EVENTS` 直代入のため fetch を使っていない）。

## 構成

| パス | 役割 |
|---|---|
| `index.html` | ページ本体 |
| `assets/app.js` | ガント描画・絞り込み・詳細パネル |
| `assets/style.css` | スタイル（ライト／ダーク自動切替） |
| `data/events.js` | 公開してよいイベントデータ |
| `data/events.internal.js` | 未解禁・社外共有NGのイベント（**gitignore 済み。コミットしない**） |

`data/events.internal.js` が存在する環境（社内・ローカル）では全件表示、
GitHub Pages などの公開環境では公開分のみが表示される。ヘッダーのバッジで
どちらのモードか判別できる。

## データ更新の手順

1. Lark の One Pager を開き、8月・9月のイベント詳細テーブルを確認する
2. `data/events.js` の該当イベントに `segs`（開催期間）・`target`（参加対象）・`summary`（概要）を反映する
3. 未解禁・社外共有NGのイベントは `data/events.internal.js` 側に `restricted: true` で置く
4. `window.EVENT_META.updated` を Lark の最終更新日に合わせる

## データ形式

```js
{
  id: 'gift-star',
  name: 'ギフトスター',
  layer: 'mid',              // overall | top | mid | low
  target: '💎20万-160万',
  note: '毎月第2月曜から5日間',
  segs: [{ s: '2026-08-10', e: '2026-08-14', label: '8月・旅テーマ' }],
  summary: ['中級クリエイター全員が自動参加']
}
```

## 注意

- 原文のダイヤ表記のゆれ（「💎160以上」「💎0-20万」）は万単位に統一している
- Lark 側は数時間単位で更新されるため、この表はスナップショット。最終判断は必ず原文で行う
