const express = require('express')
const http = require('http')
const fs = require('fs')
// 解析请求体
const bodyParser = require('body-parser')
const mineRouter = require('./router/mine')
const app = express()
// 把全局所有请求体转化为JSON字符串，这是express自带封装的处理json字符串方法
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())
app.use(express.json())

// 全局配置的中间间
app.use((req, res, next) => {
    res.append('cache-control', 'max-age=60')
    res.append('Set-Cookie', 'name=yao')
    res.append('Host', 'yao.com')
    // 全局处理
    res.append('Access-Control-Allow-Origin', '*')
    // 因为这里是全局拦截，不触发next就不会往下走了
    next()
})
// 全局设置静态文件夹
app.use(express.static('public'))
app.use('/abc', mineRouter)
// app.get('/index.txt', (req, res) => {
//     fs.readFile('./public/index.txt',(err,data)=>{
//         res.send(data.toString())
//     })
// })

http.createServer(app).listen(3000)
console.log('启动服务器')