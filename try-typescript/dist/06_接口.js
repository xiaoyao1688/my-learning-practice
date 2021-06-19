"use strict";
(function () {
    const obj = {
        name: 'ss',
        age: 12
    };
    const obj2 = {
        name: 'ss',
        age: 12
    };
    /**
     * 定义类时，可以使用类去实现一个接口
     *  实现接口就是使类满足接口的要求
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHellow() {
            console.log('大家好~~');
        }
    }
})();
