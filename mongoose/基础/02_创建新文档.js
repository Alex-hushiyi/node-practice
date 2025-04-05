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
  // 5.创建模型对象 对文档操作的封装对象 books novels
  let BookModel = mongoose.model("novel", BookSchema);

  // 6.新增
   BookModel.create([
     {
       name: "西游记",
       author: "吴承恩",
       style: "文学",
       price: 19.9,
       is_hot: true,
       tags: ["文学", "经典", "文学名著", "小说", "神话"],
       pub_time: new Date(),
       test: "测试数据",
       object: new mongoose.Types.ObjectId("1f8d8c8b8b8b8b8b8b8b8b8b"),
       decimal: 19.99,
     },
     {
       name: "水浒传",
       author: "施耐庵",
       style: "文学",
       price: 19.9,
       is_hot: true,
       tags: ["文学", "经典", "文学名著", "小说", "武侠"],
       pub_time: new Date(),
       test: "测试数据",
       object: new mongoose.Types.ObjectId("2f8d8c8b8b8b8b8b8b8b8b8b"),
       decimal: 19.99,
     },
     {
       name: "红楼梦",
       author: "曹雪芹",
       style: "文学",
       price: 19.9,
       is_hot: true,
       tags: ["文学", "经典", "文学名著", "小说", "言情"],
       pub_time: new Date(),
       test: "测试数据",
       object: new mongoose.Types.ObjectId("3f8d8c8b8b8b8b8b8b8b8b8b"),
       decimal: 19.99,
     },
     {
       name: "三国演义",
       author: "罗贯中",
       style: "文学",
       price: 19.9,
       is_hot: true,
       tags: ["文学", "经典", "文学名著", "小说", "历史"],
       pub_time: new Date(),
       test: "测试数据",
       object: new mongoose.Types.ObjectId("4f8d8c8b8b8b8b8b8b8b8b8b"),
       decimal: 19.99,
     },
     {
       name: "聊斋志异",
       author: "蒲松龄",
       style: "文学",
       price: 19.9,
       is_hot: true,
       tags: ["文学", "经典", "文学名著", "小说", "鬼怪"],
       pub_time: new Date(),
       test: "测试数据",
       object: new mongoose.Types.ObjectId("5f8d8c8b8b8b8b8b8b8b8b8b"),
       decimal: 19.99,
     },
   ]).then(() => {
     console.log("文档插入成功");
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