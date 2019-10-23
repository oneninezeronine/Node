function f5() {
    console.log(5)
}

function f4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(4)
            resolve('c')
        }, 1000)
    })
}

function f3(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('b')
            console.log(param)
            console.log(3)
        }, 1000)
    })
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('a')
            console.log(2)
        }, 1000)
    })
}

function f1() {
    console.log(1)
}

f1();
// 链式调用改变指向
// $('button').css().addClass().attr().find('span').attr()
// f2().then(f3).then(f4);
// 自执行函数，默认同步
(async () => {
    // 等待f2执行完毕再往下执行
    let a = await f2();
    let b = await f3(a);
    let c = await f4();
})();
f5();