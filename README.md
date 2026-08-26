# alfred-chrome-windows

Google Chromeのウィンドウ一覧を表示して、選択したウィンドウにフォーカスを移すAlfred Workflow。

Chromeの「ウィンドウに名前を付ける」機能（タブバー右クリック → ウィンドウに名前を付ける）で
命名したウィンドウ名がそのまま一覧に表示されるので、名前で絞り込んでEnterでフォーカスを移せる。

## 使い方

1. Alfredを開いて `cw` と入力
2. Chromeのウィンドウ一覧（ウィンドウ名 + タブ数）が表示される
3. ウィンドウ名で絞り込み、Enterで選択したウィンドウが前面化される
   （最小化されているウィンドウも復元して前面化する）

## インストール

```sh
./install.sh
```

`workflow/` をAlfredのworkflowsディレクトリにsymlinkする。リポジトリ内のスクリプトを
編集すると即Alfredに反映される。

## 初回実行時の許可

初回実行時にmacOSのオートメーション許可ダイアログが表示されるので許可すること。

- Alfred → Google Chrome（ウィンドウ一覧の取得・操作）
- Alfred → System Events（起動チェック・前面化）

「システム設定 → プライバシーとセキュリティ → オートメーション」から後で変更できる。

## 構成

| ファイル | 役割 |
|---|---|
| `workflow/info.plist` | Workflow定義（Script Filter `cw` → Run Script） |
| `workflow/list_windows.js` | JXA。ウィンドウ一覧をScript Filter JSONで出力 |
| `workflow/focus_window.js` | JXA。指定IDのウィンドウを前面化 |
| `install.sh` | Alfredへのsymlinkインストール |
