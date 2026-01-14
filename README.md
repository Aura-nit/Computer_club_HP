# 米子高専 コンピュータ同好会 公式Webサイト

米子高専コンピュータ同好会の公式ホームページプロジェクトです。
Vite + Vanilla JavaScript + CSS で構築されており、シンプルかつ高速に動作します。

## 機能

- **モダンなデザイン**: ダークテーマを基調とした「サイバー/テック」なデザイン。
- **インタラクティブな背景**:
  - 全体の背景にパーティクルアニメーション (Canvas)
- **活動詳細ページ**: 各活動内容を紹介する詳細ページ。
- **ニュース機能**: 最新のお知らせを表示。
- **QRコード生成**: フッターのボタンから、現在のページのQRコードを即座に生成・表示。
- **レスポンシブ対応**: PC、タブレット、スマートフォンに対応。

## 開発環境のセットアップ

### 前提条件
- Node.js (推奨 v18以上)

### インストール

```bash
# リポジトリのクローン（またはダウンロード）
git clone <repository-url>
cd <project-folder>

# 依存関係のインストール
npm install
```

## 開発コマンド

### ローカルサーバーの起動
開発サーバーを立ち上げ、リアルタイムでプレビューします。

```bash
npm run dev
```
ブラウザで `http://localhost:5173` にアクセスしてください。

### ビルド
本番環境用にファイルを最適化してビルドします。

```bash
npm run build
```
生成されたファイルは `dist/` ディレクトリに出力されます。

### デプロイ (GitHub Pages)
GitHub Pagesにデプロイします。

```bash
npm run deploy
```
※事前にGitHubリポジトリの設定が必要です（詳細は `deployment_guide.md` を参照）。

## ファイル構成

```
src/
├── components/      # 各セクションのJavaScriptコンポーネント
│   ├── Header.js    # ヘッダー・ナビゲーション
│   ├── Hero.js      # トップのヒーローセクション
│   ├── Particles.js # 背景アニメーション
│   ├── News.js      # ニュースリスト
│   ├── Activities.js# 活動一覧
│   └── ...
├── style.css        # 全体のスタイル定義（CSS変数含む）
└── main.js          # エントリーポイント（ルーティング設定など）
```

## ライセンス
All Rights Reserved - Yonago National College of Technology Computer Club
