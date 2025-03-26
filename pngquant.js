import { exec } from 'child_process'

// --output 压缩输出命令
// --quality  压缩质量 0-100 数字越高质量越好，文件越大
// --speed 压缩速度 1-11 数字越高速度越快，质量越低
exec('pngquant a.png --speed=1 --quality=80 --output b.png')