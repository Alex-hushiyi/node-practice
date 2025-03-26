import nodemailer from 'nodemailer';
import yaml from 'js-yaml';
import fs from 'fs';
import http from 'http';
import url from 'url';
const mailConfig = yaml.load(fs.readFileSync('./mail.yml', 'utf8'));
// 初始化邮件服务
const transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  host: 'smtp.qq.com',
  // port:587,
  port: 465,
  auth: {
    user: mailConfig.user, // 邮箱账号
    pass: mailConfig.pass, // 密码 | 授权码
  },
});
// 发送邮件
http.createServer(async (req, res) => {
  const {pathname} = url.parse(req.url);
  const {method} = req;
  if (method === 'POST' && pathname =='/send/mail'){
    // 发送邮件
    req.on('end',() =>{
      const {to,subject,text} = JSON.parse(data);
      transporter.sendMail({
        from: mailConfig.user, // 发件人
        to, // 收件人
        subject, // 主题s
        text, // 内容
      })
      res.end('发送成功')
    })
  }
}
).listen(3000, () => {
  console.log('服务已经启动，端口 3000 正在监听中....');
});