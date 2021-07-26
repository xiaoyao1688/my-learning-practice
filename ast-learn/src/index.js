import parse from "./parse";
import smartRepeat from "./smartRepeat";

// 把以下字符串 编译成 抽象语法树
var templateString = `
    <div>
        <h3>你好</h3>
        <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
        </ul>
    </div>
`;

let str = '2[1[a]3[b]2[3[c]4[7d]]]'

let result = smartRepeat(str)
console.log(result)

// const ast = parse(templateString)
// console.log(ast)