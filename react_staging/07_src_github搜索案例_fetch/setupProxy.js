const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        // 遇见/api1前缀的请求，就会出发该代理配置
        proxy('/api1', {
            // 请求发给谁
            target : 'http://localhost:5000',
            // 控制服务器收到的响应头中Host字段的值
            changeOrigin:true,
            // 重写请求路径
            pathRewrite:{
                '^/api1':''
            }
        })
    )
}