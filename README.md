# alfred-chrome-windows

English | [日本語](README.ja.md)

An [Alfred](https://www.alfredapp.com/) workflow that lists Google Chrome windows and focuses the selected one.

It works best with Chrome's **"Name window..."** feature (right-click the tab strip → *Name window...*): the names you give your windows show up as the list titles, so you can jump to a window by name.

## Usage

1. Open Alfred and type `chrome` — "Chrome Windows" appears alongside your other Chrome-related results
2. Select it to see all Chrome windows (window name + tab count)
3. Type `chrome <window name>` to filter, then press Enter to bring that window to the front
   (minimized windows are restored and focused as well)

## Install

### From a release

Download the `.alfredworkflow` file from [Releases](../../releases) and double-click it.

### From source (symlink)

```sh
./install.sh
```

This symlinks `workflow/` into Alfred's workflows directory, so edits to the scripts in this
repository take effect immediately.

## First run: macOS permissions

On first run, macOS asks you to allow Alfred to control other apps. Grant both:

- Alfred → Google Chrome (to list and manipulate windows)
- Alfred → System Events (to check Chrome is running and raise windows)

You can change these later in System Settings → Privacy & Security → Automation.

## Requirements

- Alfred 5 with the Powerpack
- Google Chrome
- No other dependencies — the scripts are plain JXA run via `osascript`

## Files

| File | Role |
|---|---|
| `workflow/info.plist` | Workflow definition (Script Filter `chrome` → Run Script) |
| `workflow/list_windows.js` | JXA: outputs the window list as Script Filter JSON |
| `workflow/focus_window.js` | JXA: brings the window with the given ID to the front |
| `install.sh` | Symlink install for development |
| `build.sh` | Packages `dist/Chrome-Windows.alfredworkflow` for distribution |

## Build a release artifact

```sh
./build.sh
```

## License

[MIT](LICENSE)
