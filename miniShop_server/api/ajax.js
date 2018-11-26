/*
* 封装axios数据请求
* */

const axios = require("axios");

/*
使用promise对象实现axios
 */
let Ajax = function(url="",data={},type="GET"){
    return new Promise(function(resolve,reject){
        let promise;
        if(type === "GET"){ //发送get请求
            //1准备url拼接字符
            let dataStr = "";
            Object.keys(data).forEach(key=>{
                dataStr += key + "=" + data[key] + "&";
            });
            if(dataStr !== ""){  // 查询字符和url拼接
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
            }
            // 发送get请求
            promise = axios.get(url);
        }else{ //发送post请求
            promise = axios.post(url,data);
        }

        promise.then(response => {
            resolve(response.data)
        })
        .catch(error => {
            reject(error)
        });
    })
    
};

module.exports = Ajax;