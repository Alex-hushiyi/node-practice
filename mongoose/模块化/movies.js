// 导入db文件
const db = require("./db/db.js");

// 导入模型文件
const MovieModel = require("./models/MovieModel.js");

db(
  () => {
    console.log("数据库连接成功");
    MovieModel.create({
      title: "大话西游",
      director: "周星驰",
      style: "喜剧",
    })
      .then((result) => {
        console.log("插入成功", result);
      })
      .catch((err) => {
        console.log("插入失败", err);
      });
  }
);