const http = require('http');
const fs = require('fs');
const url = require('url');
const {createProxyMiddleware} = require('http-proxy-middleware');
const html = fs.readFileSync('./index.html', 'utf-8');
const config = require('./xm.config.js');
const { object } = require('webidl-conversions')
http.createServer((req, res) => {
  const {pathname} = url.parse(req.url);
  const proxyList = object(config.serve.proxy);
  if (proxyList.includes(pathname)) {
    const proxy = createProxyMiddleware(config.serve.proxy[pathname].target);
    proxy(req, res);
    return;
  }
  console.log(pathname,proxyList);
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
}).listen(80);