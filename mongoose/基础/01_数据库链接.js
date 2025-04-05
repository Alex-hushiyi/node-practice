// 1.安装mongoose
// 2.导入mongoose
const mongoose = require('mongoose');

// 3.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 4.设置回调
mongoose.connection.on('open', () => {
    console.log('数据库连接成功');
});
mongoose.connection.on('error', () => {
    console.log('数据库连接失败');
});
mongoose.connection.on('close', () => {
    console.log('数据库连接关闭');
});

// 5.关闭数据库
setTimeout(() => {
    mongoose.disconnect();
}, 2000);