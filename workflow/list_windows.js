// Chromeのウィンドウ一覧をAlfred Script Filter形式のJSONで出力する
function run() {
  const se = Application("System Events");
  const running = se.processes.whose({ name: "Google Chrome" }).length > 0;
  if (!running) {
    return JSON.stringify({
      items: [
        {
          title: "Google Chromeが起動していません",
          subtitle: "Chromeを起動してから再度実行してください",
          valid: false,
        },
      ],
    });
  }

  const chrome = Application("Google Chrome");
  const items = chrome.windows().map((w) => {
    const id = String(w.id());
    return {
      uid: id,
      title: w.name(),
      subtitle: `タブ ${w.tabs.length}個`,
      arg: id,
    };
  });

  if (items.length === 0) {
    items.push({
      title: "Chromeのウィンドウがありません",
      valid: false,
    });
  }

  return JSON.stringify({ items });
}
