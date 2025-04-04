//导入express
const express = require("express");
const fs = require("fs");
const path = require("path");
//创建应用对象
const app = express();

// 声明中间件函数
function recordMiddleware(req, res, next) {
  let { url, ip } = req;
  fs.appendFileSync(
    path.resolve(__dirname, "./access.log"),
    `${url} ${ip}\r\n`
  );
  next(); // 调用next()函数，继续执行下一个中间件或路由处理函数
}

// 使用中间件函数
app.use(recordMiddleware);

//创建路由
app.get("/home", (req, res) => {
  res.end("前台首页");
});

app.get("/admin", (req, res) => {
  res.end("后台首页");
});

app.all("*", (req, res) => {
  res.end("<h1>404 Not Found</h1>");
});

//监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已经启动，端口 3000 正在监听中....");
});
