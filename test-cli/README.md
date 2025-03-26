### 编写脚手架

1.自定义命令 而不是 node 去执行我们的脚本
```json
"bin": {
    "test-cli":"src/index.js"
  },
```
```sh
npm link
```
创建一个软连接挂载到全局
2.-V --help creat 命令行交互工具
3.去下载模板isTs 下载ts版本 不要 就下载js版本
