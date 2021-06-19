"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const per = new Person('孙悟空', 18);
    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改
     *  属性可以任意被修改将会导致对象中的数据变的非常不安全
     */
    per.name = '猪八戒';
    per.age = -38;
    console.log(per);
})();
