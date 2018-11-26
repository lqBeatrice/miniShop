<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from "./components/tab/Tab.vue";
  // import {reqCategorys} from './api';
  import {mapActions} from "vuex";
export default {
  components:{
    Tab,
  },
  async mounted () {
    // const result = await reqCategorys();
    // console.log(result)
    //this.$store.dispatch("getAddress");
    this.getAddress();
  },
  methods:{
    ...mapActions(['getAddress'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // 整个应用组件的样式
  #app
    width 100%
    height 100%
    background #f5f5f5

</style>
