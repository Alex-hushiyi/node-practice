const { exec, execSync } = require('child_process')

// 1. 基本格式转换 avi mp4 gif等
// execSync('ffmpeg -i input.mp4 output.gif', { stdio: 'inherit' })

// 2.提取视频中的音频
// execSync('ffmpeg -i input.mp4 output.mp3', { stdio: 'inherit' })

// 3.裁剪视频
// execSync('ffmpeg -ss 10 to 20  -i input.mp4 output.mp4', { stdio: 'inherit' })

// 4.加水印
// execSync('ffmpeg -i input.mp4 -vf drawtext=text="要添加的水印":fontsize=30:x=10:y=10:fontcolor=white output.mp4', { stdio: 'inherit' })

// 5.删除水印
// execSync('ffmpeg -i input.mp4 -vf delogo=w=120:h=30:x=10:y=10 output.mp4', { stdio: 'inherit' })
