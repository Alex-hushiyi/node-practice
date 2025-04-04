//导入express
const express = require("express");
//创建应用对象
const app = express();

//创建路由
app.get("/home", (req, res) => {
  res.end("前台首页");
});

// 声明中间件
let checkCodeMiddleware = (req, res, next) => {
  let { code } = req.query;
  if (code === "521") {
    next(); // 如果暗号正确，调用next()函数，继续执行下一个中间件或路由处理函数
  } else {
    res.end("暗号错误");
  }
};

app.get("/admin", checkCodeMiddleware, (req, res) => {
  res.end("后台首页");
});

app.get("/setting", checkCodeMiddleware, (req, res) => {
  res.end("设置页");
});

app.all("*", (req, res) => {
  res.end("<h1>404 Not Found</h1>");
});

//监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已经启动，端口 3000 正在监听中....");
});
