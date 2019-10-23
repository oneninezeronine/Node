var fs = require('fs');
// 创建一个读的流 fs.readFile()
var readStream = fs.createReadStream('./input.mp4');
// 创建一个写的流
var writeStream = fs.createWriteStream('./output.txt');
// 读取流，并把流写入到另外一个文件
readStream.pipe(writeStream);