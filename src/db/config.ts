const mysql = require("mysql");
module.exports = {
  config: {
    host: "127.0.0.1", //访问目标数据库的ip地址 lcalhost
    port: 3306, //端口号默认3306 前提时候安装mysql没修改端口号
    user: "root",
    password: "123456", //安装mysql数据库设置密码
    database: "userlist", //操作的那个具体数据库的名字
    timezone: "08:00" //北京时间
  },
  // 封装
  connect(sql:any, params:any, cb:any) {
    let conn = mysql.createConnection(this.config)
    conn.connect() //打开一个 到数据库的链接
    conn.query(sql,params,cb)  //执行数据库的操作
    conn.end()  //关闭链接
  } 
}