var express = require('express');
var router = express.Router();
var {
    connect,
    find,
    insert,
    // 根据id查找
    ObjectId
} = require('../libs/db');

/* GET users listing. */
router.get('/news', async (req, res, next) => {
    // 寻找students表的数据
    let data = await find('students')
    res.json(data);
});

router.post('/insertProblem', async (req, res, next) => {
    let {
        name,
        problem
    } = req.body;
    // 寻找students表的数据
    await insert('problem', [{
        name,
        problem
    }])
    let data = await find('problem')
    res.json({
        sucess: true,
        data
    });
});

module.exports = router;