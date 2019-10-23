const {createServer} = require('http')
const fs = require('fs')
// 创建服务器的方法
// request 请求头和请求体 前端给后端的
// response响应头和响应体 后端给前端的
const server = createServer((request,response)=>{
    console.log(request.url)
    fs.appendFile('./msg.txt',request.url+'\n',()=>{
        console.log('写入成功')
    })
    // 编写响应头
    response.writeHead('202')
    // 编写响应体
    response.write('hello world123')
    // 后端完全写完了
    response.end()
})
// 提供一个端口给前端服务
server.listen(3000)
console.log('启动服务器')