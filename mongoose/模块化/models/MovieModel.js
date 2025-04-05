// 导入mongoose
const mongoose = require("mongoose");

// 创建文档结构对象
const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true, // 唯一索引
  }, // 必须字段
  director: {
    type: String,
    default: "未知导演",
  },
  style: {
    type: String,
    enum: ["动作", "喜剧", "爱情", "科幻"], // 枚举类型
  }
});

// 创建模型对象 对文档操作的封装对象 movies
const MovieModel = mongoose.model("movie", MovieSchema);

// 导出模型对象
module.exports = MovieModel;