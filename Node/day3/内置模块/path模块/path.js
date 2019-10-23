const path = require('path');
// 路径合并处理
const result = path.resolve('/foo/bar', '../tmp/file/');
// 算出一个绝对路径
console.log(result);
console.log(__dirname);
// 路径模块
console.log(path.resolve(__dirname, './path.js'))