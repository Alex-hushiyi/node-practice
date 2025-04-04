//导入express
const express = require("express");
//创建应用对象
const app = express();

// 声明中间件函数
app.use((req, res, next) => {
  // 获取请求路径
  let referer = req.get("referer");
  console.log("请求路径：", referer);
  if (referer) {
    let url = new URL(referer);
    let hostname = url.hostname;
    console.log("请求的域名：", hostname);
    // 判断请求路径是否是 /home
    if (hostname !== "127.0.0.1") {
      // 如果不是，返回 404
      res.status(404).send("404 Not Found");
      return
    }
  }
  next();
});

// 静态资源中间件
app.use(express.static(__dirname + "public"));

//创建路由
app.get("/home", (req, res) => {
  res.end("前台首页");
});

//监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已经启动，端口 3000 正在监听中....");
});
