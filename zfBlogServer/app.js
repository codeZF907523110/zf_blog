const Koa = require('koa');
const router=require('./router/router.js')

const app = new Koa();

//启动路由
app
    .use(router.routes())//启动路由
    .use(router.allowedMethods())//可以配置也可以不配置,如果没有设置响应头会设置对应的响应头 
    
app.listen(8000,()=>{
    console.log(`http://127.0.0.1:8000`);
});