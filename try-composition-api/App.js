const App = {
    template:`
    <div> {{ count }} {{ foo }}</div>
    <Sub :title=title  @click-end="clickEnd"/>
    `,

    setup() {
        const {ref,reactive,toRefs,h} = Vue
        const count = ref(2)
        const title = ref('我是Vue')
        const object = reactive({foo:'HHbar'})

        setTimeout(()=>{
            title.value='我是Vue3.0'
        },2000)

        let clickEnd = (num)=>{
            count.value+=num
        }

        return {
            count,
            title,
            clickEnd,
            ...toRefs(object)
        }
        // return () => h('div',[count.value,object.foo])
    },
    components:[Sub],
}