const fs = require('fs')
// 异步 async 默认支持异步
// fs.readFile()
// 同步 sync
// fs.readFileSync()

// 读取./input.txt文件的内容，由于读取需要时间，所以Node设计为异步
console.log(1)
// 读取的是特殊的流文件(视频，音频，图片
// 读取的数据都一般以二进制的形式给你展现
fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;
    // 二进制数据 JSON字符串
    console.log(data.toString());
});
// 导出的是一个fs对象
console.log(2)