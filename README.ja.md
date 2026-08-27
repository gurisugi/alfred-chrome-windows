# alfred-chrome-windows

[English](README.md) | 日本語

Google Chromeのウィンドウ一覧を表示して、選択したウィンドウにフォーカスを移すAlfred Workflow。

Chromeの「ウィンドウに名前を付ける」機能（タブバー右クリック → ウィンドウに名前を付ける）で
命名したウィンドウ名がそのまま一覧に表示されるので、名前で絞り込んでEnterでフォーカスを移せる。

## 使い方

1. Alfredを開いて `chrome` と入力（Chrome.app等と並んで「Chrome Windows」が候補に出る）
2. 選択するとChromeのウィンドウ一覧（ウィンドウ名 + タブ数）が表示される
3. `chrome <ウィンドウ名>` のようにスペースに続けて入力すると絞り込みができ、
   Enterで選択したウィンドウが前面化される（最小化されているウィンドウも復元して前面化する）

## インストール

[Releases](../../releases) から `.alfredworkflow` ファイルをダウンロードしてダブルクリック。

## 初回実行時の許可

初回実行時にmacOSのオートメーション許可ダイアログが表示されるので許可すること。

- Alfred → Google Chrome（ウィンドウ一覧の取得・操作）
- Alfred → System Events（起動チェック・前面化）

「システム設定 → プライバシーとセキュリティ → オートメーション」から後で変更できる。

## 必要環境

- Alfred 5 + Powerpack
- Google Chrome
- 依存なし（JXAスクリプトを `osascript` で実行するだけ）

## ライセンス

[MIT](LICENSE)
