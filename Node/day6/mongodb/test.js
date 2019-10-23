const {
    find,
    insert
} = require('./db')

;
(async () => {
    await insert('student', [{
        name: 'rrrrrrrrr'
    }])
    let data = await find('student')
    console.log(data)
})()