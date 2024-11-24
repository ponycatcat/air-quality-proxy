const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// 設置首頁路由
app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

