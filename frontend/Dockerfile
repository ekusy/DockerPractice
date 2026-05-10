FROM node:18-slim

WORKDIR /app

# 1. パッケージ定義ファイルをコンテナにコピー
COPY package*.json ./

# 2. 依存ライブラリ（Next.jsなど）をインストール
RUN npm install

# 3. 残りのソースコードをコピー
COPY . .

# 4. 開発モードでの起動
CMD ["npm", "run", "dev"]