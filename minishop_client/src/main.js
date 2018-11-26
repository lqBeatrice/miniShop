// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import store from './store'

Vue.config.productionTip = false;

//引入fastclick并绑定到body 解决移动端点击响应延迟0.3s的问题
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  // render: h => h(app),
  components: { App },
  template: '<App/>'
});
