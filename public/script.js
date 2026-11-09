// script.js —— 前端定时从服务器获取时间并显示
const timeEl = document.getElementById('server-time');

async function fetchServerTime() {
  try {
    const res = await fetch('/api/time');
    const data = await res.json();
    timeEl.textContent = data.serverTime;
  } catch (err) {
    timeEl.textContent = '获取时间失败';
    console.error(err);
  }
}

// 页面加载立即请求一次，之后每秒刷新
fetchServerTime();
setInterval(fetchServerTime, 1000);
