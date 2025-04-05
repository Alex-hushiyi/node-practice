// 导入db文件
const db = require("./db/db.js");

// 导入模型文件
const BookModel = require("./models/BookModel.js");

db(
  () => {
    console.log("数据库连接成功");
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
    ])
      .then((result) => {
        console.log("插入成功", result);
      })
      .catch((err) => {
        console.log("插入失败", err);
      });
  }
);