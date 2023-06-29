# features

ドメインごとにフォルダを分け、その中に`constants`, `hooks`, `utils`, `store`, `types`, `api`フォルダを配置する。

- `constants`：定数宣言ファイルを入れる。
- `hooks`：React Hooksを利用するロジックを入れる。
- `utils`: React Hooksを利用しないロジックを入れる。
- `store`: ドメイン情報でグローバルで管理したいstateを入れる、特に必要なければ作成しくてもよい。
- `types`：ドメインにまつわる型定義を入れる。
- `api`：サーバーサイドと直接通信する処理などを入れる。
