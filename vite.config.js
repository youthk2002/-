# 研究評価・偏差値システム

研究内容とグラフ画像をAIが8項目で評価し、グループ内の偏差値とフィードバックを生成するWebアプリです。

## セットアップ手順

### 1. Anthropic APIキーを取得
https://console.anthropic.com/ でAPIキーを発行してください。

### 2. Vercelにデプロイ

```bash
# GitHubにプッシュしてからVercelで「Import」するか、
# Vercel CLIを使う場合:
npm install -g vercel
vercel
```

### 3. 環境変数を設定
Vercelのダッシュボード → Settings → Environment Variables に以下を追加:

```
ANTHROPIC_API_KEY = sk-ant-xxxxxxxxxx
```

### ローカルで動かす場合

```bash
# 依存関係をインストール
npm install

# .env.localを作成
cp .env.example .env.local
# ANTHROPIC_API_KEY を記入

# 開発サーバー起動（APIはVercel CLIが必要）
vercel dev
```

## 使い方

1. 研究者名と研究内容を入力（グラフ画像も添付可）
2. 「評価して登録する」でAIが8項目を採点
3. 全員分入力後「結果を表示」でランキング・偏差値・フィードバックを確認

## 評価項目

| 項目 | 内容 |
|------|------|
| 研究目的の明確さ | 目的・仮説が明確か |
| 実験設計・手法 | 実験の設計・手法が適切か |
| データの質・量 | データの信頼性・十分性 |
| 分析・解析 | データ分析の精度・適切さ |
| 考察の深さ | 結果の解釈・考察の深さ |
| 図表・可視化 | グラフ・図表の見やすさ |
| 独自性・新規性 | 研究の独自性・学術的貢献 |
| 論理的一貫性 | 全体の論理的一貫性 |
