var num1 = 1;
var num2 = 2;
// 我现在需要用一个加法
// require('./tool.js')
// 如果引入的是JS文件，它可以省略后缀
var tool = require('./tool')
console.log(tool)
// 拥有了加法
console.log(tool[0](num1,num2))