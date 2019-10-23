const express = require('express')
const http = require('http')
// 创建的app对象，express应用的逻辑会从这个对象开始
const app = express()
// request -> req
// response -> res
// app.get 如果前端发送的是get请求的话，那就会被我这个函数给拦截
app.get('/index', (req, res) => {
    res.send('hello world')
})
// xxxx.php
app.get('/home', (req, res) => {
    res.send('abc')
})
// 路由 路来由
app.post('/mine', (req, res) => {
    res.send('我的页面')
})

http.createServer(app).listen(3000)
console.log('启动服务器')