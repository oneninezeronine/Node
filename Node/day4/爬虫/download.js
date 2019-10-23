const http = require('http')
const fs = require('fs')
const request = require('request')
http.get('http://i1.zhiaigou.com/uploads/tu/201910/10165/7c465f4606_223.jpg', {
    headers: {
        // 请求体，必须在域名为i1.zhiaigou.com发送请求
        'Host': 'i1.zhiaigou.com',
        'Upgrade-Insecure-Requests': 1
    }
}, (res) => {
    // 读取流
    res.pipe(fs.createWriteStream('file.jpg'))
})

// request({
//     url: 'http://i1.zhiaigou.com/uploads/tu/201910/10165/7c465f4606_223.jpg',
//     headers: {
//         // 请求体，必须在域名为i1.zhiaigou.com发送请求
//         'Host': 'i1.zhiaigou.com'
//     }
// }).pipe(fs.createWriteStream('doodle.png'))