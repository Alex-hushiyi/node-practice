// 1.导入mongoose
const mongoose = require("mongoose");

// 2.连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/test");

// 3.设置回调
mongoose.connection.once("open", () => {
  console.log("数据库连接成功");
  // 4.创建文档的结构对象
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
  // 5.创建模型对象 对文档操作的封装对象 mongoose会使用集合名称复数创建集合
  let BookModel = mongoose.model("novel", BookSchema);

  // 7.读取
  // 7.1 查询单个文档
  //   BookModel.findOne({ name: "红楼梦" }) // 查询条件
  //     .then((data) => {
  //       console.log("查询成功", data);
  //     })
  //     .catch((err) => {
  //       console.log("查询失败", err);
  //     });
  // 7.2 查询多个文档
  BookModel.find({ price: 19.9 }) // 查询条件
    .then((data) => {
      console.log("查询成功", data);
    })
    .catch((err) => {
      console.log("查询失败", err);
    });
});

mongoose.connection.on("error", () => {
  console.log("数据库连接失败");
});
mongoose.connection.on("close", () => {
  console.log("数据库连接关闭");
});

// 7.关闭数据库
setTimeout(() => {
  mongoose.disconnect();
}, 2000);
