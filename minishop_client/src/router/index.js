import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Msite from "../pages/msite/Msite.vue";
import Search from "../pages/search/Search.vue";
import Order from "../pages/order/Order.vue";
import Profile from "../pages/profile/Profile.vue";
import Login from "../pages/login/Login.vue";

export default new Router({
  mode:"history",
  routes: [
    {path:"/",redirect:"/msite"},
    {path:"/msite",component:Msite},
    {path:"/search",component:Search},
    {path:"/profile",component:Profile},
    {path:"/order",component:Order},
    {path:"/login",component:Login},
  ]
})
