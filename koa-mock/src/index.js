const Koa = require('koa')
const Router = require('koa-router')
const {koaBody} = require('koa-body')
const url = require('url')

const app = new Koa()
const router = new Router()


// 设置路由前缀
router.prefix('/api')

// 访问路由路径`/api/`的处理函数
router.get('/', ctx => {
    let aa=JSON.parse(JSON.stringify(ctx.request.query))
    ctx.body = {...aa,"Game":"游戏名称","id":10086}
    let result = url.parse(ctx.request.url,true)
})

router.post('/', ctx => {
    console.log(ctx.request)
    ctx.body = {...JSON.parse(ctx.request.body),"add":"这是山路十八弯","text":"未达到大大所多撒"}
})

router.get('/second', ctx => {
    ctx.body = "这是第二个路由"
})

app.use(koaBody()).use(router.routes()).use(router.allowedMethods)
.listen(4000)