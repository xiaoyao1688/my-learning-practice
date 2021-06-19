"use strict";
(function () {
    /**
     * 以 abstract 开头的类是抽象类
     *    抽象类和其他类区别不大，只是不能通过new创建对象
     *    抽象类就是专门用来被继承的类
     * 抽象类中可以添加抽象方法
     */
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵~~~');
        }
    }
    const cat = new Cat('咪咪', 3);
    console.log(cat);
    cat.sayHello();
})();
