// let plus = (a, b) => a + b
// const obj = {
//     plus,
//     sub(a, b) {
//         return a - b
//     }
// }
// let arr = [1, 2, 3]
// let arr2 = [4, 5, 6, ...arr]

// 默认引入node_modules模块下的bootstrap文件的内容
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import header from './template/header.html'
import main from './template/main.html'
$('body').html(header + main)