// app.js —— Node.js + Express 服务器入口
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 托管 public 目录下的静态资源（index.html / css / js）
app.use(express.static(path.join(__dirname, 'public')));

// 接口：返回当前服务器时间（前端定时刷新调用）
app.get('/api/time', (req, res) => {
  const now = new Date();
  // 格式化为北京时间字符串
  const timeStr = now.toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  res.json({ serverTime: timeStr });
});

// 启动监听
app.listen(PORT, () => {
  console.log(`==============================================`);
  console.log(`  Hello World 网站已启动！`);
  console.log(`  访问地址: http://localhost:${PORT}`);
  console.log(`==============================================`);
});
