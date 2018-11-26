/*
数据库操作模块：
1、连接数据库
2、定义model集合
3、向外暴露model方法
*/

let mongoose = require("mongoose");

//连接数据库
mongoose.connect("mongodb://localhost:27017/bea",{ useNewUrlParser: true });
let conn = mongoose.connection;

conn.on("connected",()=>{
    console.log("数据库连接成功！");
});

//创建对应集合model
let Schema = mongoose.Schema;
let userSchema = new Schema({
    name:String,
    pwd:String,
    phone:String
});
let userModel = mongoose.model("user",userSchema);
userModel.create({
    name:"liangqian",
    pwd:"123456",
    phone:"18852851033"
});

//向外暴露user
module.exports = {
    getModel(name) {
        return mongoose.model(name)
    }
};
