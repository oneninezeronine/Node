const { writeFile } = require('fs')

const write = (path, data) => {
    return new Promise((resolve, reject) => {
        writeFile(path, data, (err) => {
            err ? reject(err) : resolve()
        })
    })
}

console.log(1)
    ; (async () => {
        await write('./input.txt', 'eno')
    })()
console.log(2)
