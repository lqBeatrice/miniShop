# minishop_client

> 外卖软件APP（node+express+mongod+vue+webpack），实现前后端分离

##1.前端项目搭建

```
  #使用vue-cli脚手架搭建
  vue init webpack minishop_client
  注意这里的项目名不能包含大写
  #进入项目文件夹
  cd minishop_client
  #安装项目依赖
  npm install
  #项目运行
  npm run dev   http://localhost:8080
  注意这里默认端口8080
```
   ###1.1 项目结构梳理

  ```
    #build   
    #config          webpack相关的配置文件（不用修改）
    #node_modules    相关依赖包，上线时可以忽略
    #src             源码文件
    #static          静态资源文件夹
    #.babelrc        babel的配置文件
    #.editorconfig   通过编辑器的编码/格式进行一定的配置
    #.gitignore      git 版本管理忽略的配置
    #index.html      默认主渲染页面文件
    #package.json    应用包配置文件
  ```
  
  ###1.2 src源码项目结构分析
  
    #api             与后端交互接口
    #common          公共资源文件（图片、样式等）
    #components      非路由组件
    #pages           路由组件
    #filters         自定义过滤器（时间等数据格式化）
    #mock            使用mockjs模拟数据接口
    #router          路由配置文件
    #store           使用vuex管理状态
    #App.vue         应用根组件
    #main.js         应用入口文件
  
   ###1.3 浏览器兼容性处理 css reset
    1、什么是css reset
       HTML标签在浏览器中都有默认的样式，不同的浏览器的默认样式之间存在差别。
    例如ul默认带有缩进样式，在IE下，它的缩进是由margin实现的，而在Firefox
    下却是由padding实现的。开发时浏览器的默认样式可能会给我们带来多浏览器
    兼容性问题，影响开发效率。现在很流行的解决方式是一开始就将浏览器的默认
    样式全部覆盖掉，这就是css reset。
    2、处理步骤
       # 在static文件下新建css文件夹
       # css文件夹床架reset.css
       # 在index.html中引入reset.css文件
    
   ###1.4 Fastclick
   >当用户点点击屏幕之后，浏览器并不能立刻判断用户是要进行双击缩放，还是想要进行单击操作。
   因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。 于是，300 毫秒延迟就
   这么诞生了。
   
     #安装Fastclickl库，解决点击延时响应0.3秒的问题
          npm install fastclick --save
     #在main.js中引入，并绑定到body中
          import FastClick from 'fastclick'
          FastClick.attach(document.body);
   ###1.5 Stylus
      #安装stylus依赖包
      npm install stylus stylus-loader --save-dev
      #在common下创建stylus文件夹，在stylus下创建mini.styl
      
      #注意在组件内编写样式时要声明lang和rel
      <style lang="stylus" rel="stylesheet/stylus">
      
   
##2.源码分析
>整体流程：
   - /components/...：创建底部tab路由切换以及头部公共信息栏
   - /pages/...：简单创建好每个静态路由页面
   - /router/index.js：配置好各级路由
   - /main.js：应用入口文件，引入router模块
   - /App.vue：引入Tap组件，并使用<router-link/>
###2.1 公共组件 /components
    #<Tab/> 底部导航栏
       分为首页、搜索、订单、个人中心四个路由页面，这里通过this.$routes.path获取当前路由位置，
     来判断是否为当前路由，从而可以设置不同的样式。
       通过切换url地址里的hash值，页面会显示不同的路由模板内容。
     
    #<Top/> 顶部信息栏
       分为三部分，其中统一的是中间部分的text栏，其次首页左右两边有搜索框和个人信息栏，可以通
     过插槽slot定义name属性，在首页要显示的部分定义slot="name"即可。
     
###2.2 一级路由组件 /pages
    #<Msite/> 首页
        三部分：头部标题<Top/>、轮播图、商家列表<ShopList/>
        - 轮播图
          1.安装
          npm install swiper --save
          2.引入
          import Swiper from 'swiper'
          import 'swiper//dist/css/swiper.min.css'
          3.根据文档构建html结构
          4.new Swiper
          这里需要注意，在什么时候new？保证在挂载完之后再new：mounted
        - 商家列表
 
    #<Search/> 搜索
    
    #<Order/> 订单
    
    #<Profile/> 个人中心
    
    #<Login/> 登录
    
###2.3 Ajax封装
>为了实现统一向后端发送请求接口

####2.3.1 封装ajax请求函数

    #/api/ajax.js
    通过对axios返回的promise对象再包装一层Promise的方法，来简化外部的调用
    
####2.3.2 封装接口请求函数(重点)

>有了发送数据的请求ajax函数，还需要封装一些与后台交互的接口函数

>根据接口文档来定义接口请求函数

    #/api/index.js
#####2.3.2.1 如何解决跨域请求问题（重点）
>配置代理并测试接口

>除了设置让服务器允许跨域的方法之外，还可以通过配置代理实现跨域请求

    1. 在项目config文件夹下的index.js文件里设置代理配置表
       # proxyTable:{
        '/api': { // 匹配所有以 '/api'开头的请求路径
            	target: 'http://localhost:4000', // 代理目标的基础路径
              // secure: false,  // 如果是https接口，需要配置这个参数
              changeOrigin: true, // 支持跨域
              pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
                '^/api': ''
              }
            }
       }
    2. 修改api文件夹中index.js里接口函数的请求路径
    3. 修改了config文件，所以要重新 npm run dev
    4. 此时可以看到跨域的数据`{code: 0, data: Array(16)}`
    
>这样我们前端就能通过调用api里面的方法获得后台返回的数据

>但是这样每当我们需要某些数据时都要调用api函数，每次都得发请求，这样降低效率

>为了提高前端页面渲染效率，我们可以创建一个数据工厂，统一来管理数据状态

###2.4 Vuex管理数据状态

    安装Vuex`npm install vuex --save`用来管理从后台获取的状态数据
    
####2.4.1 创建Store核心仓库
    #/store/index.js
       1. 引入基本模块Vue和Vuex
       2. 引入四个基本模块（state,mutations,actions,getters）
       3. 声明使用组件 #Vue.use(Vuex)
       4. 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
          #export default new Store({state,mutations,actions,getters})
####2.4.2 四个模块对象
    #/state.js
    分析整理出项目中有哪些状态需要管理
    
    #/mutations.js+/mutation-types.js
    - 更改Vuex的store中的状态的唯一方法：提交mutation
    
    - 每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)** 
    
    - 我们可以使用常量替代 Mutation 事件类型，新建**mutations-types文件**
    
    #/actions.js
    - Action 提交的是 mutation，而不是直接变更状态
    
    - Action 可以包含任意异步操作,但是mutation就是同步
    
    -Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
    因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state
    和 context.getters 来获取 state 和 getters。
    #//异步获取地址
       async getAddress({commit,state}){
         const geohash = state.latitude + ',' + state.longitude;
         const result = await reqAddress(geohash);
         if(result.code === 0){
           const address = result.data;
           commit(RECEIVE_ADDRESS,{address}); //commit提交mutation
         }
       }
    #{commit,state}相当于context对象
    
    - Action 通过 store.dispatch 方法触发
    
####2.4.3 异步获取数据显示页面
    1. 在项目中注册store
    2. # this.$store.dispatch('getAddress')
       # 还可以使用mapActions语法糖
       ```
          import {mapActions} from 'vuex'
          
          async mounted () {
              this.getAddress()
          }
          methods: {
          	...mapActions(['getAddress'])
          }
       ```
    3. 运行项目在后台查看vuex的数据
    4. 利用mapState语法糖去读取state对象
    
       首页获取top标题：
       #computed:{
          //// 映射 this.address 为 store.state.address
          ...mapState(['address'])
       }
       #<Top :title="address.name">
       
####2.4.4 使用watch与$nextTick解决轮播的Bug
>一般轮播图的数据也都是从后台获取，这个时候就需要考虑如何解决还没获取数据时Swiper的舒适化问题

>最开始categorys为空数组，有了数据才会显示轮播列表，而要监视categorys的数据变化，就要用到watch。

    // 新建watch 监听categorys
      watch: {
          categorys (value) { // categorys数组中有数据了
            // 但界面还没有异步更新
          }
      }
>但其实state状态数据改变与异步更新界面（显示轮播列表）是两个步骤。所以需要等一等，界面完成异步更新后才可以进行Swiper的初始化。

    1. 使用setTimeout可实现效果，但是时机不准
        setTimeout(() => {
          	// 创建一个Swiper实例对象, 来实现轮播
          	new Swiper('.swiper-container', {
                    autoplay: true,
                    // 如果需要分页器
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                    }
          	})
          }, 100)
    2. 利用`vm.$nextTick( [callback] )`实现等待界面完成异步更新就立即创建Swiper对象
        // 在修改数据之后立即使用它，然后等待 DOM 更新。
          this.$nextTick(() => {
          	// 一旦完成界面更新, 立即执行回调
              new Swiper('.swiper-container', {
              	autoplay: true,
              	pagination: {
              	el: '.swiper-pagination',
              	clickable: true
              }
          })
