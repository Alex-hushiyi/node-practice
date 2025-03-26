const http = require('http');
const fs = require('fs');
const url = require('url');
const mime = require('mime');
const server = http.createServer((req, res) => {
  const {method,url} = req;
  // 静态资源
  if (method === 'GET' && url.startswith('./static')) {
    const staticPath = path.join(process.cwd(), url);
    fs.readFile(staticPath, (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
        return;
      }else{
        console.log('验证一下');
        const type = mime.getType(staticPath);
        res.writeHead(200, {
          'Content-Type': type, //mime 类型
          'Cache-Control': 'public,max-age=31536000'
        });
        res.end(data);
      }
    });
  }
  //  动态资源
  if ((method === 'GET' || method === 'POST') && url.startsWith('/api')) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({name: 'xm'}));
  }
});
server.listen(80, () => {
  console.log('Server running at http://127.0.0.1');
});