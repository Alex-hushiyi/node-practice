//导入express
const express = require("express");
const bodyParser = require("body-parser");
//创建应用对象
const app = express();

//配置解析表单数据的中间件
// const jsonParser = bodyParser.json(); //解析json数据

const urlencodedParser = bodyParser.urlencoded({ extended: false }); //解析表单数据

//创建路由
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.post("/login", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.end("获取用户数据");
});

//监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已经启动，端口 3000 正在监听中....");
});
