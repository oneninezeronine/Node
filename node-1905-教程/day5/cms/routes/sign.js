var express = require('express');
var fs = require('fs');
var router = express.Router();
var {
    find
} = require('../libs/db');
var {
    createToken,
    decodeToken,
    checkToken
} = require('../libs/token');
/* GET users listing. */
router.post('/login', async function (req, res, next) {
    let data = await find('students', {})
    // res.send(JSON.stringify(data));
    res.json(data);
});

router.post('/token', async function (req, res, next) {
    console.log(req.cookies)
    let {
        username,
        password,
    } = req.body;
    // 先去数据库查询是否存在该用户，如果有就发牌
    let token = createToken({
        username
    }, 300)
    res.json({
        status: 'success',
        token
    })
});

router.post('/checkToken', async function (req, res, next) {
    console.log(req.cookies)
    let {
        token
    } = req.cookies;
    console.log(token);
    let detail = decodeToken(token)
    res.json({
        detail
    })
});

// 处理上传中间件，上传的路由
router.post('/upload', async function (req, res, next) {
    // 跨域
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // // 必须要设置
    // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // // req是读的流
    // // 我们创建了一个写的流
    // var writeStream = fs.createWriteStream('./output.png');
    // // 读取流，并把流写入到另外一个文件
    // req.pipe(writeStream);
    console.log(req.body);
    fs.writeFile('./output.png', req.body, (err) => {})
    res.send('文件上传成功');
});

module.exports = router;