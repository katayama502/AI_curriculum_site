# はじめてのAIナビ

ChatGPT・Gemini・Claude の使い方を、初心者向けにカード＋動画形式で学べる学習サイトです。

## 概要

- 3大AI（ChatGPT / Gemini / Claude）と AI共通基礎の学習カードを提供
- カテゴリ・プロバイダ・キーワードでのフィルタリング
- YouTube動画のインライン再生
- ダークモード対応
- レスポンシブデザイン（360px〜）

## 技術スタック

- React 18 + Vite
- Tailwind CSS v3
- lucide-react（アイコン）

## セットアップ

### 必要環境

- Node.js 18 以上

### インストール

```bash
# 依存パッケージのインストール
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:5173](http://localhost:5173) を開いてください。

## ビルド

```bash
npm run build
```

`dist/` ディレクトリにビルド成果物が生成されます。

### ビルド結果の確認（ローカルプレビュー）

```bash
npm run preview
```

## デプロイ（Netlify）

### Netlify CLI を使う場合

```bash
# Netlify CLI のインストール（初回のみ）
npm install -g netlify-cli

# ビルド＆デプロイ
netlify deploy --build --prod
```

### Netlify の管理画面からデプロイする場合

1. Netlify にログインして「Add new site」
2. GitHub リポジトリと連携するか、`dist/` フォルダをドラッグ＆ドロップ
3. ビルドコマンド: `npm run build`、公開ディレクトリ: `dist`

SPA ルーティング用に `public/_redirects` が設定済みです。

## コンテンツの更新

`src/data/content.js` の各カードデータを編集するだけでサイトのコンテンツが更新されます。
YouTube 動画が非公開になった場合は、各カードの `youtube` フィールドの11文字の動画IDを差し替えてください。

## ライセンス

MIT
# AI_curriculum_site
