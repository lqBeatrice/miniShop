## node express 搭建后端服务框架app
    https://blog.csdn.net/jingbo18/article/details/78576547
   ####全局安装express-generator
    npm install express-generator -g
   ####在当前工作目录下创建一个后端服务应用miniShop_server
    express miniShop_server
    cd miniShop_server, 之后，npm install，安装依赖包。
   ####安装成功后npm start运行127.0.0.1:3000
   ######这里因为要前后端代码完全分离，我们重新整理一下目录文件
    "dependencies": {
       "cookie-parser": "~1.4.3",
       "debug": "~2.6.9",
       "express": "~4.16.0",
       "express-session": "^1.15.6",
       "http-errors": "~1.6.2",
       "morgan": "~1.9.0",
       "axios": "^0.18.0",
       "blueimp-md5": "^2.10.0",
       "body-parser": "~1.18.2",
       "ejs": "~2.5.7",
       "js-base64": "^2.4.3",
       "moment": "^2.21.0",
       "mongoose": "^5.0.8",
       "nodemon": "^1.17.1",
       "request": "^2.83.0",
       "serve-favicon": "~2.4.5",
       "svg-captcha": "^1.3.11"
     }
   根据上面的依赖安装相关的依赖包
     
   ####目录详细介绍
   
   - api  
   ajax获取数据接口封装，结合promise
   - bin
   框架自动创建的运行文件，可以直接右击run
   - data
   里面包含两个json文件模拟数据
   - public
   这里要求前后端完全分离，所以里面没有什么内容
   - routes
   index.js文件包含了各个路由配置
      - 登录/login_pwd
      - 图形验证码/captcha
      - 发送验证码短信/sendcode
      - 短信登录/login_sms
      - 根据sesion中的userid, 查询对应的user /userinfo
      - 退出登录 /logout
      - 根据经纬度获取位置详情 /position/:geohash
      - 获取首页分类列表 /index_category
      - 根据经纬度获取商铺列表/shops
      - 搜索商店 /search_shops
   - util 工具文件
   包含验证码发送功能的编写
   - app.js
   app.js是整个工程真正的入口文件。
   在其内部，加载主要的依赖包，配置中间件，加载路由等等。
   最后在www文件中启动服务。
   
   