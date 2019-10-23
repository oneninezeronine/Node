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
    // collection.insertMany([{
    //     name: 'abc'
    // }, {
    //     name: 'cba'
    // }, {
    //     name: 'mmmm'
    // }], function (err, result) {
    //     console.log(result)
    // })
    // 
    collection.find({
        // 搜索田间，不加条件全部数据返回
        // 寻找name为yao的一条
        // name: 'yao'
    }).toArray(function (err, docs) {
        console.log(docs)
    });
    client.close();
});