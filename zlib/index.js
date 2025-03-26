const zlib = require('zlib');
const fs = require('fs');

// 压缩createGzip
const readStream = fs.createReadStream('./index.txt', 'utf8');
const writeStream = fs.createWriteStream('./index.txt.gz');
readStream.pipe(zlib.createGzip()).pipe(writeStream);

// createDeflate
const readStream = fs.createReadStream('./index.txt');
const writeStream = fs.createWriteStream('./index.txt.defate');
readStream.pipe(zlib.createDeflate()).pipe(writeStream);

// 解压createGunzip
const readStream = fs.createReadStream('./index.txt.gz');
const writeStream = fs.createWriteStream('./index2.txt');
readStream.pipe(zlib.createGunzip()).pipe(writeStream);

// createInflate
const readStream = fs.createReadStream('./index.txt.defate');
const writeStream = fs.createWriteStream('./index3.txt');
readStream.pipe(zlib.createInflate()).pipe(writeStream);