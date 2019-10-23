const fn1 = (callback)=>{
    setTimeout(()=>{
        console.log('拿披萨')
        // 这个函数需要在1完成之后再执行
        callback()
    },1000)
}

const fn2 = ()=>{
    console.log('拿披萨做其他事情')
}
console.log('买披萨')
fn1(fn2)
// 等待一秒
console.log('做其他事情')

// 异步如果没有回调将没有意义
// 有回调一般是异步
