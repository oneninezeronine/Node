const http = require('http')
const jQuery = require('jquery')
const {
    JSDOM
} = require('jsdom')
// 写入数据库
const sql = require('./db')
const mock = (html) => {
    const {
        window
    } = new JSDOM(html);
    let $ = jQuery(window);
    return $
}
http.get('http://www.umei.cc/p/gaoqing/cn/', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let $ = mock(rawData)
        $("img").each((index, element) => {
            console.log($(element).attr('src'))
            console.log($(element).next().text())
            let src = $(element).attr('src')
            let title = $(element).next().text()
            sql("INSERT INTO `beauty` (`url`, `title`) VALUES ('" + src + "', '" + title + "')")
        })
    })
})