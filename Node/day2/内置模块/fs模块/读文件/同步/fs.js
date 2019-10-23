const fs = require('fs')
console.log(1)
// 如果数据量很大，会卡在这个地方
const data = fs.readFileSync('./input.txt')
console.log(data.toString())
console.log(2)