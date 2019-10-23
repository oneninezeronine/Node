# express

在同域情况下，服务器可以使用响应头控制浏览器的一些信息

```js
// 设置缓存
res.append('cache-control', 'max-age=60')
// 设置cookie
res.append('Set-Cookie','name=yao')
// 防止爬虫
res.append('Host','yao.com')
// 全局处理
res.append('Access-Control-Allow-Origin', '*')
```

帮助你从服务器读取文件返回给前端
```js
// 全局设置静态文件夹
// app.use(express.static('public'))
fs.readFile('./public/index.txt',(err,data)=>{
    res.send(data.toString())
})
```
解析请求体，需要利用`bodyParser`全局中间函数处理
```js
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.json())
```
设置静态文件夹，可以根据路由去对应后端文件夹里面获取资源文件
```js
app.use(express.static('public'))
```

路由，我们可以把路由分在其他模块写，方便维护，代码解耦
```js
const express = require('express')
// 实例化一个路由对象
const router = express.Router();
// 路由的模块化
router.post('/mine', (req, res) => {
    console.log(req.body)
    res.send('hi')
})
router.get('/mine', (req, res) => {
    res.send('hi')
})
router.get('/mine', (req, res) => {
    res.send('hi')
})
// 导出路由对象
module.exports = router
```
```js
const mineRouter = require('./router/mine')
// 全局配置
app.use('/abc', mineRouter)
```

一般我们会使用最快速的方法去搭建express的服务器，脚手架，框架一般可以有脚手架快速搭建工程
```bash
# @4 安装指定版本为4.00
npm install -g express-generator
# 查看是否安装成功
express -version
# 在当前目录下自动生成一个项目
express ./express-cli
# Or
express express-cli
# 更改目录
cd express-cli
# 安装依赖
npm install
# 启动项目
npm start && npm run start
```

# 预编译语言

```html
<header>123</header>
```
jade的写法，浏览器是不能识别jade语法，所以在编写完毕之后要转化为html语法，预编译
```jade
header 123
```
它会全局多一个jade命令
```bash
npm install jade -g
npm install node-sass -g
```
语义化，释义比较困难
```jade
p.abc(name=123) hello p world
    span 123
div#cba test
```

非主流转主流

- html jade pug
- css sass less
- js typescript

在express里面用这两句设置jade引擎
```js
app.set('views', path.join(__dirname, 'views'));
// 设置语法为jade
app.set('view engine', 'jade');
```

# 缓存

- 浏览器缓存
必须后端控制，通过响应头控制，缓存文件，页面，图片
```js
res.append('cache-control', 'max-age=60')
```
- 本地存储和cookie
缓存数据，ajax发送，把数据缓存
- 全局变量缓存
全局作用域和局部作用域*(垃圾回收机制)，闭包才可以缓存局部变量

