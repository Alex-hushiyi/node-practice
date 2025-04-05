/**
 * 
 * @param {*} success 数据库连接成功的回调
 * @param {*} error 数据库连接失败的回调
 */
module.exports = function (success, error) {
  if (error !== "function") {
    error = () => {
      console.log("数据库连接失败");
    };
  }
  // 导入mongoose
  const mongoose = require("mongoose");

  // 导配置文件
  const { DBHOST, DBPORT, DBNAME } = require("../config/config.js");

  // 设置strictQuery为true
  // strictQuery: true 代表严格查询模式
  // strictQuery: false 代表非严格查询模式
  mongoose.set("strictQuery", true);

  // 连接数据库
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

  // 设置回调
  mongoose.connection.once("open", () => {
    success();
  });

  mongoose.connection.on("error", () => {
    error();
  });

  mongoose.connection.on("close", () => {
    console.log("数据库连接关闭");
  });
};
