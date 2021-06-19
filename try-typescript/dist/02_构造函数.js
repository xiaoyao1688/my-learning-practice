"use strict";
/*
class Dog{
    name = '旺财'
    age = 3

    bark(){
        alert('汪汪汪！')
    }
}

const dog1 = new Dog()
const dog2 = new Dog()
const dog3 = new Dog()
const dog4 = new Dog()

console.log(dog1)
console.log(dog2)
console.log(dog3)
console.log(dog4)

*/
class Dog {
    constructor(name, age) {
        // 在实例方法中，this就表示当前的实例
        //  在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name);
    }
}
let dog = new Dog('小黑', 2);
let dog2 = new Dog('小白', 3);
console.log(dog);
console.log(dog2);
