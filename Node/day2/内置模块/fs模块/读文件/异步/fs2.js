const fs = require('fs')

const fn1 = () => {
    console.log(1)
}

const readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./input.txt', (err, data) => {
            err ? reject(err) : resolve(data.toString())
        })
    })
}

const fn2 = () => {
    console.log(2)
}

fn1()
;(async () => {
    
    try {
        const data = await readFile()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
})()
fn2()