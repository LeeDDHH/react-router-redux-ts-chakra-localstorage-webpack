# React + TypeScript + Webpack5 + React Router + React Redux + Chakra UI + localStorage

## プロジェクト前提

- できるだけ `ts` ファイルで構成する
- `dev` は `webpack` の `devServer` で立ち上げる
- `create-react-app` ではなく、 `webpack` でビルドする

---

## 構成

|                    |         |
| :----------------: | :-----: |
|      Node.js       | 16.14.0 |
|        npm         |  8.3.1  |
|       React        | 17.0.2  |
|     TypeScript     |  4.6.2  |
|      webpack       | 5.70.0  |
|    webpack-cli     |  4.9.2  |
| webpack-dev-server |  4.7.4  |
|  react-router-dom  |  6.2.2  |
|    react-redux     |  7.2.6  |
|  @reduxjs/toolkit  |  1.8.0  |
|  @chakra-ui/react  |  1.8.6  |
|   @emotion/react   | 11.8.2  |
|  @emotion/styled   | 11.8.1  |
|   framer-motion    |  6.2.8  |

---

## コマンド

### ローカルで dev 実行

```bash
npm run dev
```

- `dist` を削除する
- `webpack` の `devServer` で立ち上げる

### ローカルで prod 実行

```bash
npm start
```

- `dist` を削除する
- `prod` 用にビルドする
- `http-server` でローカルの HTTP サーバーをで立ち上げる

### prod 用のビルドをする

```bash
npm run build
```

- `dist` を削除する
- `prod` 用にビルドする
