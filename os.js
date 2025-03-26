const os = require('os')
// exec 可以执行shell 命令
const { exec } = require('child_process')

// 判断不同的操作系统 分别调用对应的shell 命令
const platform = os.platform()

const open = (url) => {
  //mac
  if (platform === 'darwin') {
    exec(`open ${url}`)
  } else if (platform === 'win32') {
    exec(`start ${url}`)
  } else {
    exec(`xdg-open ${url}`) // linux
  }
}
// open('http://www.baidu.com')

// console.log(os.arch())
// console.log(os.homedir())
// console.log(os.cpus())
console.log(os.cpus().length)

// console.log(os.networkInterfaces())

console.log(process.memoryUsage())