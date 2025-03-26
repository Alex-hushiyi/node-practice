const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  const {pathname} = url.parse(req.url);
  if (pathname === '/api') {
    res.end('proxy success');
  }
}).listen(3000, () => {
  console.log('3000 port');
});