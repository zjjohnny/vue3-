const express = require('express')
// const userRouter = require('./routes/userRouter.js'); //导入与用户有关的路由模块（就是定义的服务器中各种接口）
const app = express();


// 配置接口请求时，参数的获取
app.use(express.urlencoded({ 'limit': '10mb', 'extended': true })) //普通表单请求,GET方式的请求
// 'extended':true, 使用QS库来解析参数， 可以解析复杂的JSON对象：如{a:{},b:{c:[{}]}}
// 'extended':false, 使用querystring库来解析参数，只能解析基本的JSON对象，如：{uname:"",upwd:""}
// limit: 控制最大请求文件大小。如果这是一个数字，则该值指定字节数；如果是字符串，则将该值传递给字节库进行解析。
app.use(express.static(__dirname + '/public'))  // 必须确保public有index.html
// app.use('/', userRouter);  //拦截以“/"开头的接口的请求


app.listen(8888, function () {
  console.log("服务器运行中，http://127.0.0.1:8888")
})