# alfred-chrome-windows

Google Chromeのウィンドウ一覧を表示して、選択したウィンドウにフォーカスを移すAlfred Workflow。

Chromeの「ウィンドウに名前を付ける」機能（タブバー右クリック → ウィンドウに名前を付ける）で
命名したウィンドウ名がそのまま一覧に表示されるので、名前で絞り込んでEnterでフォーカスを移せる。

## 使い方

1. Alfredを開いて `chrome` と入力（Chrome.app等と並んで「Chrome Windows」が候補に出る）
2. 選択するとChromeのウィンドウ一覧（ウィンドウ名 + タブ数）が表示される
3. `chrome <ウィンドウ名>` のようにスペースに続けて入力すると絞り込みができ、
   Enterで選択したウィンドウが前面化される（最小化されているウィンドウも復元して前面化する）

## インストール

### リリースから

[Releases](../../releases) から `.alfredworkflow` ファイルをダウンロードしてダブルクリック。

### ソースから（symlink）

```sh
./install.sh
```

`workflow/` をAlfredのworkflowsディレクトリにsymlinkする。リポジトリ内のスクリプトを
編集すると即Alfredに反映される。`info.plist` を変更した場合は再読み込みが必要になることがある:

```sh
osascript -e 'tell application id "com.runningwithcrayons.Alfred" to reload workflow "com.gurisugi.alfred-chrome-windows"'
```

（`install.sh` は最後にこの再読み込みを自動実行する）

## 初回実行時の許可

初回実行時にmacOSのオートメーション許可ダイアログが表示されるので許可すること。

- Alfred → Google Chrome（ウィンドウ一覧の取得・操作）
- Alfred → System Events（起動チェック・前面化）

「システム設定 → プライバシーとセキュリティ → オートメーション」から後で変更できる。

## 必要環境

- Alfred 5 + Powerpack
- Google Chrome
- 依存なし（JXAスクリプトを `osascript` で実行するだけ）

## 構成

| ファイル | 役割 |
|---|---|
| `workflow/info.plist` | Workflow定義（Script Filter `chrome` → Run Script） |
| `workflow/list_windows.js` | JXA。ウィンドウ一覧をScript Filter JSONで出力 |
| `workflow/focus_window.js` | JXA。指定IDのウィンドウを前面化 |
| `install.sh` | 開発用のsymlinkインストール |
| `build.sh` | 配布用 `dist/Chrome-Windows.alfredworkflow` の生成 |

## 配布物のビルド

```sh
./build.sh
```

## ライセンス

[MIT](LICENSE)
