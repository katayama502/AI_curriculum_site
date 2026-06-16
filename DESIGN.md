# はじめてのAIナビ — 設計仕様書（Opus 4.8 設計）

初学者向けAI学習サイト。ChatGPT・Gemini・Claudeの3社を、カード形式＋YouTube埋め込みで「学習したくなる」UIで提供する。

## 1. 技術スタック

- **React 18 + Vite**（`npm create vite@latest . -- --template react`）
- **Tailwind CSS**（v3系、`tailwind.config.js` + PostCSS）
- 追加ライブラリは最小限。アニメは Tailwind transition + 軽い CSS keyframes で十分（framer-motion は任意・無くてよい）
- フォント：Google Fonts の `Noto Sans JP`（本文）+ `Plus Jakarta Sans`（英字見出し）。index.html で読み込む
- アイコン：絵文字（emoji）をコンテンツ側で使用。装飾アイコンが必要なら `lucide-react` を使ってよい
- データは `src/data/content.js`（**既に作成済み・編集禁止。importして使う**）

## 2. デザインコンセプト

「やさしくて、ワクワクする学びの入り口」。

- 明るくクリーン、余白たっぷり。圧迫感のない大きめの角丸（rounded-2xl / 3xl）
- カード中心のレイアウト。各AIの**ブランドカラーで色分け**し、直感的に識別できる
- やわらかい影（shadow-sm → hover で shadow-lg）と、ホバーで少し浮く（-translate-y-1）気持ちよさ
- ライトモード基調 + **ダークモード対応**（トグル、`class` 戦略、localStorage保存）

### カラートークン（Tailwind theme.extend.colors）

```
brand.gpt    : #10A37F   (ChatGPT / OpenAI)
brand.gemini : #4285F4   (Gemini / Google)
brand.claude : #D97757   (Claude / Anthropic)
brand.common : #6366F1   (AI共通の基礎)
ink          : #1A1A2E   (本文テキスト)
paper        : #FCFCFD   (ライト背景)
```

各プロバイダの色・グラデーションは `content.js` の `providers[].accent / accentSoft / gradient` を参照すること（インラインstyleで適用）。Tailwindの動的クラス名生成は避け、色は style 属性で当てる。

### タイポグラフィ

- 見出し：太字、字間やや詰め。ヒーローの大見出しは text-4xl〜6xl
- 本文：Noto Sans JP、読みやすい line-height（leading-relaxed）
- 日本語が主。英語見出し（ChatGPT等）は Plus Jakarta Sans が自然に当たる

## 3. 画面構成（シングルページ）

縦スクロール1ページ。セクション順：

1. **Header（固定）**：ロゴ「はじめてのAIナビ」/ アンカーナビ（3社・基礎）/ ダークモードトグル
2. **Hero**：`site.title` `site.subtitle` `site.heroLead`。背景に3社カラーのやわらかいグラデーション/ブロブ。3社ロゴ風チップ。下に「学びはじめる」ボタン（カード一覧へスクロール）
3. **3社の紹介（Provider Spotlight）**：providers を3カラム（モバイル1カラム）のカードで紹介。各カードに emoji / name / vendor / tagline / description / bestFor / 公式リンク。クリックでそのAIのカードに絞り込み
4. **フィルター + カードギャラリー（メイン）**：
   - 上部にフィルターバー：プロバイダ（共通=commonProvider含む4つ＋「すべて」）と カテゴリ（4つ＋「すべて」）のチップ。テキスト検索欄（title/summary/pointsを対象）
   - 下に **カードグリッド**（レスポンシブ：1 / 2 / 3カラム）。`cards` をフィルタ結果で表示
   - 件数表示（「12件のカード」）
5. **Footer**：`site.footer`、各公式サイトリンク、注意書き

## 4. 学習カード（最重要コンポーネント）

`CardItem`：グリッドの1枚。

- 上端に**プロバイダのアクセントカラーの帯**（border-t-4 か 小さなグラデ）
- 上部メタ行：プロバイダのemoji+名前のチップ（accentSoft背景）/ カテゴリのemoji+名前 / 難易度バッジ（`levels`の色）
- タイトル（太字, 2行までclamp）
- summary（3行程度, clamp）
- `youtube` がある場合は**サムネ＋再生アイコン**を小さく表示（クリックで展開）
- 右下に「くわしく見る →」
- hover：浮く + 影 + アクセント色の枠がうっすら
- クリックで **詳細モーダル** を開く

### 詳細モーダル `CardModal`

- 中央モーダル（背景ぼかしオーバーレイ、Esc/外側クリック/×で閉じる、body scroll lock）
- ヘッダー：プロバイダチップ・カテゴリ・難易度・タイトル
- summary
- `youtube` があれば **レスポンシブ16:9のiframe埋め込み**（`https://www.youtube.com/embed/{id}`、loading="lazy"、title属性、allowfullscreen）。※クリックで初めてiframe生成（パフォーマンス＆プライバシー、`youtube-nocookie.com` を使うと尚良い）
- `points`：チェックマーク付きリスト
- `steps`：番号付きステップ（丸数字）
- `tips`：💡 ヒントとして枠で強調
- 公式サイトへのCTAボタン（プロバイダのofficialUrl、新規タブ）

## 5. 動作・インタラクション

- フィルターは即時反映（state）。プロバイダ×カテゴリ×検索のAND
- 3社紹介カードのクリックで該当プロバイダフィルタを適用しギャラリーへスムーズスクロール
- ヒーローCTAでギャラリーへスクロール
- 該当0件のときは空状態メッセージ（「条件に合うカードがありません」＋フィルタ解除ボタン）
- ダークモード：トグルで `<html class="dark">`、localStorage `theme` に保存、初回は OS設定（prefers-color-scheme）に追従
- アクセシビリティ：モーダルにrole/aria、フォーカストラップは簡易でよい、画像にalt、十分なコントラスト、キーボード操作可
- レスポンシブ：360px〜デスクトップ。モバイルファースト

## 6. ファイル構成（提案）

```
index.html
src/
  main.jsx
  App.jsx
  index.css            (Tailwind directives + フォント/カスタムCSS)
  data/content.js      (作成済み)
  components/
    Header.jsx
    Hero.jsx
    ProviderSpotlight.jsx
    FilterBar.jsx
    CardItem.jsx
    CardModal.jsx
    Footer.jsx
  hooks/
    useDarkMode.js
tailwind.config.js
postcss.config.js
```

App.jsx がフィルタ状態とモーダル状態を持つ（軽いので状態管理ライブラリ不要）。

## 7. 品質基準（完了条件）

- `npm run build` がエラー・警告なく通る
- `npm run dev` で全機能が動作：フィルタ / 検索 / モーダル / YouTube埋め込み / ダークモード / レスポンシブ
- 3社×4カテゴリの全カードが表示され、デザインがブランドカラーで色分けされている
- スマホ幅で崩れない。日本語が自然に表示される
- README.md に「開発・ビルド・デプロイ手順」を日本語で記載

## 8. デプロイ

- **Netlify** にデプロイ（`netlify` CLI 利用可）。`netlify deploy --build --prod` 想定
- SPA用に `public/_redirects` に `/* /index.html 200`（今回は単一ページなので必須ではないが入れておく）
- ビルド出力は `dist/`
