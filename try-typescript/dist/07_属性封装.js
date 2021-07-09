"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this._address = address;
        }
        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *  - 它们被称为属性的存取器
         */
        // 定义方法，用来获取name属性
        getName() {
            return this.name;
        }
        // 定义方法，用来设置name属性
        setName(value) {
            this.name = value;
        }
        getAge() {
            return this.age;
        }
        setAge(value) {
            // 判断年龄是否合法
            if (value >= 0)
                this.age = value;
        }
        // TS中设置getter方法的方式
        get address() {
            return this._address;
        }
        set address(value) {
            this._address = value;
        }
    }
    const per = new Person('孙悟空', 18, '花果山');
    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改
     *  属性可以任意被修改将会导致对象中的数据变的非常不安全
     */
    // per.name = '猪八戒'
    // per.age = -38
    console.log(per.getName());
    per.setName('猪八戒');
    console.log(per.getName());
    per.setAge(-33);
    console.log(per.getAge());
    per.address = "哈哈哈";
    console.log(per.address);
})();
