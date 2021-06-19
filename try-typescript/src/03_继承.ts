(function(){
    class Animal{
        name:string
        age: number

        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }

        sayHello(){
            console.log("动物在叫~")
        }
    }

    /**
     * Cat extends Animal
     *  - 此时，Animal被称为父类，Cat 被称为子类
     *  - 使用继承后，子类将会拥有父类所有的方法和属性
     *  - 通过继承可以将多个类中公有的代码写在一个父类中,
     *     这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
     *     如果希望在子类中添加一些父类中没有的属性和方法，直接加就行
     *  - 如果在子类中添加了和父类同名的方法，则子类方法会覆盖掉父类方法，称为：重写
     */
    class Cat extends Animal{
        run (){
            console.log(`${this.name}在跑~~`)
        }

        sayHello(){
            console.log("喵喵喵~~")
        }
    }

    const cat = new Cat('咪咪',3)
    cat.run()
    cat.sayHello()
})();