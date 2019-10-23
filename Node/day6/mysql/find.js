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
let id = 1;
// 执行sql语句 有回调函数异步 读数据 字符串拼接
// connection.query(`SELECT * FROM student WHERE id=${id}`, function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

// connection.query(`SELECT * FROM student WHERE ?`,[{
//     id: 1
// }], function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

connection.query(`UPDATE student SET ? WHERE ?`,[{
    name: 'eno'
},{
    id: 1
}], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
// 执行关闭
connection.end();