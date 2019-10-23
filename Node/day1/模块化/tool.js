// 封装了一个加法
const plus = (num1,num2)=>{
    return num1+num2
}
const {sub} = require('./sub')
// 需要把这个加法导出去

// module.exports = {
//     plus
// }

// module.exports = plus

module.exports = [plus,sub]