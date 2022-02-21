const Router = require('koa-router')

var router = new Router()//实例化router

router.get('/', async (ctx) => {
    ctx.body = 'aaaaaaaaaa'
})

module.exports = router