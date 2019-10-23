# Mysql

Mysql的环境安装

- Wamp win apache mysql php
- Navicat 可视化界面
- PhpStudy 

安装了一个Mysql的环境

以前我们使用php语言去连接mysql数据库，php内置了操作mysql的方法

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
// 创建连接
$conn = new mysqli($servername, $username, $password);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
echo "连接成功";
?>
```

其实我们可以换另外一门系统层语言去连接数据库，Node去连接数据库

Node是没有内置的方法去连数库，所以需要第三方模块去支持

- [npm的官方文档](https://www.npmjs.com/package/mysql)

```bash
npm install mysql
```
以下是Node.js连接mysql的例子，它依赖了mysql这个第三方模块实现的(底层是FS模块)
```js
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();
```

我们可以用`?`，结合`query`方法的第二个参数来去动态执行sql语句
```js
connection.query(`SELECT * FROM student WHERE ?`,[{
    id: 1
}], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.query(`UPDATE student SET ? WHERE ?`,[{
    name: 'eno'
},{
    id: 1
}], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
```

数据池

数据池没有关闭和连接，但是也可以有的，数据池用于频繁使用的数据，它会缓存起来，在第二次读的时候会加快
```js
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});
 
pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
```
```js
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    // 需要连接的库
    database: '1909'
})
pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!
    // Use the connection
    connection.query(`UPDATE student SET ? WHERE ?`, [{
        name: 'abc'
    }, {
        id: 1
    }], function (error, results, fields) {
        // When done with the connection, release it.
        connection.release();
        // Handle error after the release.
        if (error) throw error;
        // Don't use the connection here, it has been returned to the pool.
    });
});
```
类型如果负责起来，需要大量消耗计算资源(CPU)的能力

这里没有用内存，计算时间增加
```js
var a = 1;
var b = 9;
a = a - b; //a: -8 b:9
b = a + b; //a: -8 b:1
a = b - a; //a:  9 b:1
```
开销内存，所以用空间换时间
```js
var a = 1;
var b = 9;
// 不需要计算
var c;
```
我们可以在路由里面引入我们写好的`db.js`自定义模块(里面借助了mysql这个第三方模块)，我们前端发起请求进入express路由，让路由执行db里面的操作数据库的方法，从数据库得到数据，把它设置到响应头和体部分，返回前端，再执行浏览器渲染
```js
router.get('/student', async function (req, res, next) {
  let student = await sql('select * from student', null)
  res.json(student)
});
```

# mongodb

Node比较红的数据库

update set xxxx where xxx

汇率系统 印度 人名币 美金

1美金 6.105555555人名币

- [ok] mysql 
- [x] oracle 银行
- sql server

数据库很重要

它跟JS的适配性很高，数据的存储方式都一种类JSON形式存放

- [mongodb的npm文档](https://www.npmjs.com/package/mongodb)

安装驱动模块
```bash
npm init
npm install mongodb --D
```

实现CRUD操作，增删改查

- C create 增
- R read 查
- U update 改
- D delete 删

启动mongodb的服务，在这之前先下载mongodb的安装包，[安装地址](https://www.mongodb.com/download-center/community?jmp=docs)

我们除了下载mongodb的安装包，还可以下载一个可视化功能，[Compass可视化工具](https://www.mongodb.com/download-center/compass)

当你安装成功之后，mongodb默认不会帮你把环境变量设置好，所以你需要在 此电脑右键属性，选择高级系统设置，高级->环境变量，系统变量选中Path，添加环境变量

一般来说，你的环境变量是你默认mongodb安装位置如下：
```bash
C:\Program Files\MongoDB\Server\4.2\bin
```
你可以使用以下命令创建并连接数据库，如果本身就是数据库，那么它只会连接，否则如果是空文件夹，它会初始化一个数据库
```bash
mongod --dbpath C:\Code\1909\Node\day6\database
```

我们可以新建一份`app.js`,写入以下代码实现增加操作
```js
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = '1909';

// Use connect method to connect to the server
MongoClient.connect(url, {
    useUnifiedTopology: true
}, function (err, client) {
    if (err) throw err
    console.log("Connected successfully to server");
    // 选中库去操作
    // db对象用于后面的增删改查 CRUD
    const db = client.db(dbName);
    // 选中表去操作
    const collection = db.collection('student');
    // 插入操作
    collection.insertMany([{
        name: 'abc'
    }, {
        name: 'cba'
    }, {
        name: 'mmmm'
    }], function (err, result) {
        console.log(result)
    })
    client.close();
});
```
