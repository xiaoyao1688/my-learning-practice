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

    class Cat extends Animal{
        addr:string
        constructor(name:string,age:number,addr:string){
            // 如果在子类中写了构造函数，因为函数名与父类中的构造函数重名，子类的构造函数会覆盖掉父类的构造函数。所以在子类的构造函数中，必须对父类的构造函数进行调用
            super(name,age) // 调用父类构造函数
            this.addr = addr
        }
        sayHello(){
            // 在类的方法中 super就表示当前类的父类
            super.sayHello()
        }
    }

    const cat = new Cat('咪咪',3,"深圳")
    console.log(cat)
    cat.sayHello()
})();