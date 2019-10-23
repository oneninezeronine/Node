var mysql = require('mysql');
// 用mysql.createConnection创建一个连接对象
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    // 需要连接的库
    database: '1909'
});
// 执行连接
connection.connect();
// 执行sql语句 有回调函数异步 读数据
connection.query('SELECT * FROM student', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].name);
});
// 执行关闭
connection.end();