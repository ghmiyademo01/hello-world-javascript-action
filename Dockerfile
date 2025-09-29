FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリのソースコードをコピー
COPY . .
RUN chmod +x node_modules/.bin/rollup

# ビルド
RUN npm run build

# 実行コマンド（必要に応じて）
CMD ["npm", "start"]
