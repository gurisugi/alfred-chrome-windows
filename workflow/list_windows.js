// Chromeのウィンドウ一覧をAlfred Script Filter形式のJSONで出力する
function run() {
  const se = Application("System Events");
  const running = se.processes.whose({ name: "Google Chrome" }).length > 0;
  if (!running) {
    return JSON.stringify({
      items: [
        {
          title: "Google Chrome is not running",
          subtitle: "Launch Google Chrome and try again",
          valid: false,
        },
      ],
    });
  }

  const chrome = Application("Google Chrome");
  const items = chrome.windows().map((w) => {
    const id = String(w.id());
    const n = w.tabs.length;
    return {
      uid: id,
      title: w.name(),
      subtitle: n === 1 ? "1 tab" : `${n} tabs`,
      arg: id,
    };
  });

  if (items.length === 0) {
    items.push({
      title: "No Google Chrome windows",
      valid: false,
    });
  }

  return JSON.stringify({ items });
}
