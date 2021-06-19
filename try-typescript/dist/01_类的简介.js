"use strict";
// 使用class关键字来定义一个类
class Person {
    constructor() {
        /**
         * 直接定义的属性是实例属性，需要通过对象的实例去访问
         * const per = new Person()
         * per.name
         *
         * 使用 static开头的属性是(类属性),可以直接通过类去访问
         * Person.age
         *
         * readonly 开头的属性表示一个只读的属性，无法修改
         */
        // 定义属性
        this.name = "孙悟空";
    }
    // 如果方法以static开头则方法就是类方法，可以直接通过类去调用
    sayHello() {
        console.log("Hello 大家好");
    }
}
// static 关键字可以定义类属性(静态属性)
Person.age = 18;
const per = new Person();
console.log(per);
per.sayHello();
