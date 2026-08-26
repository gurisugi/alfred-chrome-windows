// 引数で渡されたIDのChromeウィンドウを前面化してフォーカスする
function run(argv) {
  const id = String(argv[0]);
  const chrome = Application("Google Chrome");
  const win = chrome.windows().find((w) => String(w.id()) === id);
  if (!win) {
    return `window not found: ${id}`;
  }

  if (win.minimized()) {
    win.minimized = false;
  }
  win.index = 1;
  chrome.activate();

  // index=1 + activate だけでは前面化しないケースがあるため、AXRaiseで保険をかける
  try {
    const title = win.name();
    const proc = Application("System Events").processes.byName("Google Chrome");
    const axWin = proc.windows().find((w) => w.name() === title);
    if (axWin) {
      axWin.actions.byName("AXRaise").perform();
    }
  } catch (e) {
    // アクセシビリティ権限がない等で失敗しても、index=1 + activate は済んでいるので無視
  }
}
