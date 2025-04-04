// 1.导入mongoose
const mongoose = require("mongoose");

// 2.连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/test");

// 3.设置回调
mongoose.connection.once("open", () => {
  console.log("数据库连接成功");
  // 4.创建文档的结构对象
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
  });
  // 5.创建模型对象 对文档操作的封装对象
  let BookModel = mongoose.model("books", BookSchema);

  // 6.新增
  BookModel.create({
    name: "水浒传",
    author: "施耐庵",
    price: 100,
  }).then(() => {
    console.log("文档插入成功");
  })
});

mongoose.connection.on("error", () => {
  console.log("数据库连接失败");
});
mongoose.connection.on("close", () => {
  console.log("数据库连接关闭");
});
