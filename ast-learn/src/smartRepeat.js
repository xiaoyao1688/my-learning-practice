// '2[1[a]3[b]2[3[c]4[d]]]'

// 正则表达式相关方法 常用
// 1. replace()
// 2. match(/\d/g) 或 search(/\d/) match能全局匹配，search不能
// 3. test()

export default function (str) {
    let numStack = [],
        chartStack = [],
        index = 0,
        rest = ''//剩余部分

    while (index < str.length - 1) {
        rest = str.substring(index)

        // 看当前剩余部分是不是以数字和方括号开头
        if ((/^\d+\[/).test(rest)) {
            // 得到数字
            let times = Number(rest.match(/^(\d+)\[/)[1])
            // 让指针后移，times这个数字是多少位就多少位加1位
            index += times.toString().length + 1
            numStack.push(times)
            chartStack.push('')
        } else if ((/^\w+\]/).test(rest)) { // 是否以数字字母下划线和方括号结尾
            let word = rest.match(/^(\w+)\]/)[1]
            chartStack[chartStack.length - 1] = word
            index += word.length
        } else if (rest[0] == ']') {
             // 如果这个字符是]，就将numStact弹栈，把 chartStack 栈顶的元素重复刚才的数字那么多次，然后拼接到chackStack栈顶
            let times = numStack.pop(), word = chartStack.pop()
            chartStack[chartStack.length - 1] += word.repeat(times)
            index++
        }
        console.log(index,chartStack,numStack)
    }

    return chartStack[0].repeat(numStack[0])
}