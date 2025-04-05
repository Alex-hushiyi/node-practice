// 导入mongoose
const mongoose = require("mongoose");

// 创建文档的结构对象
let BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // 唯一索引
  }, // 必须字段
  author: {
    type: String,
    default: "未知作者",
  },
  style: {
    type: String,
    enum: ["文学", "历史", "军事", "科技"], // 枚举类型
  },
  price: Number,
  is_hot: Boolean,
  tags: Array, // 数组类型
  pub_time: Date,
  test: mongoose.Schema.Types.Mixed, // 混合类型
  object: mongoose.Schema.Types.ObjectId, // 对象类型 外键 文档id 用于联合查询
  decimal: mongoose.Schema.Types.Decimal128, // 小数类型
});

// 创建模型对象 对文档操作的封装对象 books novels
let BookModel = mongoose.model("novel", BookSchema);

module.exports = BookModel;