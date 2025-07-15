const Sub = {
    props:{
        title: String
    },
    emits:['clickEnd'],
    template:`
        <h4>{{ title }}</h4>
        <button @click='plus'>点我</button>
    `,
    setup(props,context){
        let {watchEffect,watch} = Vue
            // {attrs, emit, slots} = context
        // watchEffect(()=>{
        //     // 组件渲染和更新的时候都会调用到
        //     console.log(`title is `+ props.title)
        // })
        // console.log(context)
        // 组件更新之后才调用
        // watch(()=>props.title,(newV,oldV)=>{
        //     console.log(newV,oldV)
        // })

        const plus = () => {
            context.emit('clickEnd',2)
        }

        return {
            plus
        }
    }
}