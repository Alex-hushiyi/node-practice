// 导入express
const express = require('express');
//导入path
const path = require('path');

//创建express应用
const app = express();

//1.设置模板引擎
app.set('view engine', 'ejs'); //pug twing
//2.设置模板文件存放目录
app.set('views', path.resolve(__dirname, './views'));


app.get('/home', (req, res) => {
    // 3.render方法渲染模板
    res.render('home', { title: 'Markdown to HTML' });
    // 4.创建模板文件  
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});