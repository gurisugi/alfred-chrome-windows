// Bring the Chrome window with the given ID to the front and focus it
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

  // index=1 + activate alone sometimes fails to raise the window, so AXRaise as a fallback
  try {
    const title = win.name();
    const proc = Application("System Events").processes.byName("Google Chrome");
    const axWin = proc.windows().find((w) => w.name() === title);
    if (axWin) {
      axWin.actions.byName("AXRaise").perform();
    }
  } catch (e) {
    // Ignore failures (e.g. missing accessibility permission) — index=1 + activate has already run
  }
}
