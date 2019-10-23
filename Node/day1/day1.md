# Node


Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

讲道理你们都安装了

# 安装

下载好node.xxx.msi文件，然后双击安装

- [Node官方安装地址](http://nodejs.cn/download/)

如果安装成功的话，会在你的系统留下两个痕迹，一个npm命令一个叫node命令：

- npm 12.xx版本
- node 6.xx版本

```bash
node -v
npm -v
```

如果出现以上两个命令，那证明安装成功

在前端(浏览器端)运行一份JS，需要借助html和浏览器环境，html用`<script>`直接引入页面，让页面在浏览器中打开，此时JS才会执行
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- css -->
    <link rel="stylesheet" href="index.css" />
    <title>Document</title>
</head>
<body>
    <!-- html -->
    <p>hello world</p>
    <!-- js -->
    <script src="index.js"></script>
</body>
</html>
```

html5 css3 js证明自己，前端最火h5 css3

告诉这个世界上其他人，我JS，没有html，没有css，我也能活

JS只要留下我自己一个，但我能运行，我能生存，既然你的html可以在浏览器打开，

只需要安装Node环境，然后往`index.js`写入一下代码

```js
console.log('hello world')
```

现在只需要把命令行定位到该文件下，此时这次运行时不依赖于任何html和css，只是依赖Node环境
```bash
node index
# or
node index.js
```

JS单独把谷歌浏览器的运行JS引擎拿了出来(控制台)封装成Node，所以JS语法控制台和Node都是一样的，浏览器(DOM和BOM)，Node把DOM和BOM阉割了，由于Node是安装在系统上面，Node获取系统层的能力，所以它自身增加了很多系统的功能(JS模块)

```js
// 在Node里无效
document.querySelector('p').innerHTML = 'yao'
```

由于现在Node已经把范围拓展到系统层面，并且没有了视图层(html和css)和浏览器的协助，进化为后端语言

# 模块 自定义模块

把一些文件细分成不同的逻辑，最后把所有文件引入，把一份代码分业务和逻辑写

- 团队开发
- 代码解耦
- 找出问题所在
- 复用模块(复用代码)

如果所有写在一起，不好维护，背锅的时候，各司其职

```html
<!-- 封装DOM和BOM -->
<script src="./jquery.js"></script>
<!-- 轮播图 -->
<script src="./swiper.js"></script>
```

Node没有html和css，`<script>`在node里面不能用

- seajs模块化方案 AMD方案 中国人写的
- requirejs模块化方案 CMD方案 西方人写的
- `<script src="xxx.js"></script>`
- common.js规范 node方案 导出和导入

```js
// 引入模块
var xxx = require(模块名字)
// 导出模块
module.exports = 模块名字
```

主逻辑，引入加法逻辑
```js
var num1 = 1;
var num2 = 2;
// 我现在需要用一个加法
// require('./tool.js')
// 如果引入的是JS文件，它可以省略后缀
var tool = require('./tool')
// 拥有了加法
console.log(tool[0](num1,num2))
```


加法逻辑，导出一个加法逻辑
```js
// 封装了一个加法
const plus = (num1,num2)=>{
    return num1+num2
}
// 需要把这个加法导出去
// module.exports = {
//     plus
// }
// module.exports = plus
module.exports = [plus]
```

模块之间可以相互依赖，比如

> index -依赖-> tool -依赖-> sub.js

就是因为这种依赖关系，可以把底层的方法一直继承到主逻辑文件里面

# 内置模块

本身自己拥有的模块，JS因为牺牲HTML和CSS(BOM和DOM)，那它作为补充，换来了一些自带的功能，因为影响范围从浏览器上升到系统层，所以它有更多的权限去管理系统，而它把这些管理系统的方法封装起来，形成自带的功能，我们称这些自带的功能为内置模块

- [官方文档内置模块API](http://nodejs.cn/api/)

API->应用程序编程接口->自带的接口方法->内置模块

# fs

内置模块，没有相对路径，直接引入模块的名字即可
```js
const fs = require('fs');
```

单进程单线程的脚本，异步进程，同步性能

- 前端异步
 - XMLHttpRequest
 - setTimeout
 - setInterval

事情很多的话，如果网速比较慢的时候，是不是，前端为了让网页不卡，流畅，用异步方案

node由于大量借鉴了前端，它知道同步会有效率问题，所以设计异步，来解决效率问题，比如大量的并发

# 同步和异步

- 同步 sync

如果我去买披萨，店家需要30分钟做好，我就原地等待三十分钟，在程序里面这表现为同步，低效，百分百拿到披萨

- 异步 async

如果我去买披萨，店家需要30分钟，我不等，但是为了拿到披萨，留一个电话(回调函数)，我直接去干后面的事情，在程序里面是异步，高效，但是30分钟做事情的时间里面没有披萨，Node默认选择异步

- 异步借助回调才有意义
- 但是有回调不一定是异步，有回调一般是异步

Node内置模块会有大量的函数是需要回调的，因为它默认是异步的

# Promise

解决同步和异步的问题
承诺 Promise

如果以后遇到异步问题，建议交给Promise，Promise会帮你处理这个异步，成功的话出发resolve，后面可以继续跟进下一个承诺，如果失败的话，出发reject，你可以停止往下执行
```js
console.log(1)
setTimeout(() => {
    console.log(2)
    setTimeout(() => {
        console.log(3)
        setTimeout(() => {
            console.log(4)
        }, 1000)
    }, 1000)
}, 1000)
console.log(5)
```
所以我们可以把上面的代码改进，用Promise改写，方便维护，防止落入回调地狱里面
```js
function f5() {
    console.log(5)
}
function f4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(4)
            resolve()
        }, 1000)
    })
}
function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            console.log(3)
        }, 1000)
    })
}
function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            console.log(2)
        }, 1000)
    })
}
function f1() {
    console.log(1)
}
f1();
f2().then(f3).then(f4);
f5();
```