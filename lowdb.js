//导入数据库模块
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
//创建数据库对象
const db = low(adapter);

// 设置默认值
db.defaults({ users: [] }).write();
// 添加数据
db.get("users").push({ id: 1, name: "张三" }).write();
// 获取数据
const users = db.get("users").value();
console.log(users);
// 更新数据
db.get("users").find({ id: 1 }).assign({ name: "李四" }).write();
// 删除数据
db.get("users").remove({ id: 1 }).write();
// 查询数据
const users2 = db.get("users").value();
console.log(users2);
// 查询数据
const user = db.get("users").find({ id: 1 }).value();
console.log(user);
