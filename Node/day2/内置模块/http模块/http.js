const http = require('http')
const fs = require('fs')
// 常用的是get和post
// console.log(http.METHODS)
// 状态码
// console.log(http.STATUS_CODES)
// wamp
// window apache mysql php
// createServer代替它

// 触发一个get请求
// http.get()
// 触发一个复杂请求(post,copy)
// http.request()

// 请求该网页
http.get('http://www.shuaigew.com/', (res) => {
    // 设置相应的数据格式
    res.setEncoding('utf8');
    // 用一个空的容器
    let rawData = '';
    // 监听数据，数据会一个个片段的形式存到rawData容器，如果数据非常大，建议用这种方式获取
    res.on('data', (chunk) => { rawData += chunk; });
    // 监听结束
    res.on('end', () => {
        console.log(rawData)
        fs.writeFile('./index.html', rawData, () => { })
    })
})