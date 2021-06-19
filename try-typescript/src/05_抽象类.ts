(function(){
    /**
     * 以 abstract 开头的类是抽象类
     *    抽象类和其他类区别不大，只是不能通过new创建对象
     *    抽象类就是专门用来被继承的类
     * 抽象类中可以添加抽象方法  
     */
    abstract class Animal{
        name:string
        age: number

        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }

        // 定义一个抽象方法
        // 抽象方法使用 abstract 开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello():void
    }

    class Cat extends Animal{
        sayHello(){
            console.log('喵喵喵~~~')
        }
    }

    const cat = new Cat('咪咪',3)
    console.log(cat)
    cat.sayHello()
})();