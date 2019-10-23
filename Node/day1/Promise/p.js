// console.log(1)
// setTimeout(() => {
//     console.log(2)
//     setTimeout(() => {
//         console.log(3)
//         setTimeout(() => {
//             console.log(4)
//         }, 1000)
//     }, 1000)
// }, 1000)
// console.log(5)

function f5() {
    console.log(5)
}

function f4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(4)
            resolve()
        }, 1000)
    })
}

function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            console.log(3)
        }, 1000)
    })
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            console.log(2)
        }, 1000)
    })
}

function f1() {
    console.log(1)
}

f1();
f2().then(f3).then(f4);
f5();