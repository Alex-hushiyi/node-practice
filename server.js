//导入 http 模块
const http = require('http')
const fs = require('fs')

//创建服务对象
const server = http.createServer((request, response) => {
  let { pathname } = new URL(request.url, 'http://localhost')
  let filePath = __dirname + '/public' + pathname
  // 读取文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.statusCode = 500
      response.end('文件读取失败')
      return
    }
    response.end(data)
  })
})

//监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...')
})
