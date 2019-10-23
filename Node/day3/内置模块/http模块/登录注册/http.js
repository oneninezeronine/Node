const { createServer } = require('http')
const fs = require('fs')
const querystring = require('querystring')
// 创建服务器的方法
// request 请求头和请求体 前端给后端的
// response响应头和响应体 后端给前端的
// wamp $_POST['xxx']

const parseBody = (request) => {
    return new Promise((resolve, reject) => {
        // 空的容器接受流
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            // 解码
            resolve(querystring.parse(body))

        })
        request.on('error', (err) => {
            reject(err)
        })
    })
}
const server = createServer(async (request, response) => {
    // GET url
    // console.log(request.url)
    // CORS 更改响应头，让浏览器放行
    // response.setHeader('Access-Control-Allow-Origin', '*')
    const { username, password } = await parseBody(request)
    console.log(username, password)

    if (username === 'yao' && password === '123') {
        // 编写响应头
        response.writeHead('200')
        // 编写响应体
        response.write('success')

    } else {
        response.write('failure')
    }
    // 后端完全写完了
    response.end()
})
// 提供一个端口给前端服务
server.listen(3000)
console.log('启动服务器')