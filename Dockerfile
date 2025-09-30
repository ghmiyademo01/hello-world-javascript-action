# ベースイメージ
FROM node:18-alpine

# 作業ディレクトリ
WORKDIR /app

# 依存関係を先にコピーしてキャッシュ効率を高める
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# Rollup 実行権限を確保（Windows→Linuxコピー時の権限問題対策）
RUN chmod +x node_modules/.bin/rollup

# ビルド実行
RUN npm run build

# 実行コマンド（必要なら）
CMD ["node", "dist/index.js"]
