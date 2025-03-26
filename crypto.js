const crypto = require('crypto')

// 对称加密算法
// 双方协商一个密钥以及iv
// 第一个参数 algorithm 算法 aes-256-cbc
// 第二个参数 key 密钥 32位
// 第三个参数 iv 初始化向量 16位 保证每次加密的结果不一样 密钥串缺少位数 还可以进行补码操作

let algorithm = 'aes-256-cbc'
let key = crypto.randomBytes(32)
let iv = Buffer.from(crypto.randomBytes(16))
const cipher = crypto.createCipheriv(algorithm, key, iv)
console.log(cipher.update('hello world', 'utf8', 'hex'))
console.log(cipher.final('hex'))

// 对称解密算法
const decipher = crypto.createDecipheriv(algorithm, key, iv)
console.log(decipher.update('c5b2f8b1e1c1f3b1f4b1', 'hex', 'utf8'))
console.log(decipher.final('utf8'))

// 非对称加密算法
// 生成公钥和私钥
// 私钥只能是管理员拥有的 不能对外公开
// 公钥可以对外公开


const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // 长度越长 加密越安全 但是效率越低 
})

// 公钥加密
const encrypted = crypto.publicEncrypt(publicKey, buffer.from('hello world', 'utf8'))
console.log(encrypted.toString('hex'))

// 私钥解密
const decrypted = crypto.privateDecrypt(privateKey, encrypted)
console.log(decrypted.toString('utf8'))


// 哈希函数
// 不能被解密 单向 不可逆
// 具有唯一性
// 可以用md5 校验文件的一致性
// 读取文件内容 转换成md5 上传到服务器 后端拿到文件内容 转换成md5 
// 跟前端的md5进行比对 如果一致 说明文件没有被篡改
// 如果不一致 说明文件被篡改了
crypto.createHash('sha256').update('hello world').digest('hex')
crypto.createHash('md5').update('hello world').digest('hex')
crypto.createHash('sha1').update('hello world').digest('hex')