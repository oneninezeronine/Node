// 生产环境下，有大量的注释或者调试代码console.log(xxx)
// 在发布环境下应该要删除的
console.log(1)
let plus = (a, b) => a + b
console.log('12321313')
console.log(['1', '2', '4'])
// 注释
const { name } = {
    name: 'yao',
    skill: ['js', 'ps']
}
let i = 0
for (; i >= 0; i--) {
    console.log(i)
}
console.log(name)