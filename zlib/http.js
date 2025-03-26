const zlib = require('zlib');
const http = require('http');

const server = http.createServer((req, res) => {
  const text = 'hello world'.repeat(1000);
  // res.setHeader('Content-Encoding', 'gzip');
  res.setHeader('Content-Encoding', 'deflate');
  res.setHeader('Content-type', 'text/plain; charset=utf-8');
  // let result = zlib.gzipSync(text);
  let result = zlib.deflateSync(text);
    res.end(result);
  
});

server.listen(3000, () => console.log('启动了'));