module.exports = {
    production: {
        env: 'production', //环境变量
        baseUrl: 'https://api-miaona.zhongjiangweiye.com/', //请求地址
        vConsole: false, //是否使用vConsole
        uweb: true //是否初始化统计代码
    },
    development: {
        env: 'development',
        baseUrl: '/api',
        vConsole: true,
        uweb: false
    },
    test: {
        env: 'test',
        baseUrl: 'http://192.168.30.137:18080',
        vConsole: true,
        uweb: false
    }
}