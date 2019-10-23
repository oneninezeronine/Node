const http = require('http')
const fs = require('fs')
// DOM操作
const jQuery = require('jquery')
// 模拟DOM
const {
    JSDOM
} = require('jsdom')
const request = require('request')
const mock = (html) => {
    // 模拟出一个window
    const {
        window
    } = new JSDOM(html);
    let $ = jQuery(window);
    return $
}
http.get('http://www.umei.cc/p/gaoqing/cn/', (res) => {
    // res流
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let $ = mock(rawData)
        // 用$去获取图片信息
        $("img").each((index, element) => {
            console.log($(element).attr('src'))
            let src = $(element).attr('src')
            // 下载
            request({
                url: src,
                headers: {
                    // 请求体，必须在域名为i1.zhiaigou.com发送请求
                    'Host': 'i1.zhiaigou.com',
                    'Upgrade-Insecure-Requests': 1
                }
            }).pipe(fs.createWriteStream(`./imgs/${index}.jpg`))
        })
    })
})
// gulp.src('./xxx').pipe().pipe(gulp.dest('./')) 文件流

// http.get(img,(res)=>{
//     // 读取流
//     res.pipe(fs.createWriteStream('file.jpg'))
// })