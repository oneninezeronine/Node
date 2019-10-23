var express = require('express');
var router = express.Router();
const fs = require('fs')
<<<<<<< HEAD
const sql = require('../database/db')

/* GET home page. */
router.get('/', function (req, res, next) {
=======

/* GET home page. */
router.get('/', function(req, res, next) {
>>>>>>> 4d425791d0feff61010071471259ab272308d0da
  // res.append
  // res.send
  // 就是去默认设置好的views文件夹里面找index.jade文件
  // 把数据放进jade里面生成html，然后发送到前端
  // res.render('index', { title: 'eno yao' });
  let template = fs.readFileSync('./template/index.html').toString()
  res.send(template)
});

<<<<<<< HEAD
router.get('/student', async function (req, res, next) {
  let student = await sql('select * from student', null)
  res.json(student)
});

module.exports = router;
=======
module.exports = router;
>>>>>>> 4d425791d0feff61010071471259ab272308d0da
