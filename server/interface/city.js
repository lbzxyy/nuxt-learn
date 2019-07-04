const Router = require('koa-router') 

const router = new Router({
  prefix: '/city'
})

router.get('/list', async (ctx) => {
  ctx.body = ['广州', '深圳']
})
module.exports = router