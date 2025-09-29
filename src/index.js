import http from 'http';

const port = process.env.PORT || 3000;

// HTTPサーバーを作成
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// サーバーを起動
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
