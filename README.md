# アイフルエンジニアサイト

これは Next.js(Typescript)のテンプレートリポジトリです。

# プロジェクト詳細
- backlog: https://aiful100.backlog.com/projects/PJ_ENGINEER_RECRUIT_DEV
- 画面設計図: figmaを参照

# 起動方法

- ローカルにリポジトリを clone する
- `cd [ProjectName] && npm && npm run dev`で起動

# package manager

- 基本的に`npm`を利用します。

# 使用しているライブラリ

- styled-components
- gsap

## すでに入っているライブラリ

- prettier
- eslint
- jest
- testing-library
- msw(mock service worker)

## routing

`tree`コマンドを利用して`pages`配下の path ルートを下記にコピペする

```
pages
│   ├── 404
│   │   └── index.tsx
│   ├── README.md
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about
│   │   └── index.tsx
│   ├── index.tsx
│   ├── interview
│   │   ├── chiayenwang
│   │   │   └── index.tsx
│   │   ├── index.tsx
│   │   ├── otayuji
│   │   │   └── index.tsx
│   │   ├── oukinhou
│   │   │   └── index.tsx
│   │   └── shimizusho
│   │       └── index.tsx
│   ├── product
│   │   └── index.tsx
│   └── recruit
│       └── index.tsx

```
