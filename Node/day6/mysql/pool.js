var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    // 需要连接的库
    database: '1909'
});

pool.query(`UPDATE student SET ? WHERE ?`, [{
    name: 'kkk'
}, {
    id: 1
}], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});