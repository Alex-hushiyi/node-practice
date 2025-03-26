//导入 http 模块
const http = require('http')
const fs = require('fs')

//创建服务对象
const server = http.createServer((request, response) => {
  let html = fs.readFileSync(__dirname + '/index.html')
  response.end(html)
})

//监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...')
})

