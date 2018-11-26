<template>
  <section class="msite">
    <Top :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
         <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" to="/login">
        <span class="header_login_text">
          登录|注册
        </span>
      </router-link>
    </Top>
    <!--首页导航轮播图-->
    <nav class="msite_nav">
       <div class="swiper-container" v-if="categorys.length">
         <div class="swiper-wrapper">
           <div class="swiper-slide">
              <img src="./images/rou.jpg">
           </div>
           <div class="swiper-slide">
              <img src="./images/xia.jpg">
           </div>
           <div class="swiper-slide">
             <img src="./images/cake.jpg">
           </div>
           <div class="swiper-slide">
             <img src="./images/chicken.jpg">
           </div>
           <div class="swiper-slide">
             <img src="./images/egg.jpg">
           </div>
           <div class="swiper-slide">
             <img src="./images/noodles.jpg">
           </div>

         </div>
         <div class="swiper-pagination"></div>
       </div>
    </nav>
    <!--附近商家列表-->
    <div class="msite_shop_list">
       <div class="shop_header">
         <i class="iconfont icon-xuanxiang"></i>
         <span class="shop_header_title">附近商家</span>
       </div>
       <div class="shop_container">
          <ul class="shop_list">
            <li class="shop_li border-1px">
              <a>
                <div class="shop_left">
                  <img class="shop_img" src="./images/rou.jpg"/>
                </div>
                <div class="shop_right">
                  <section class="shop_detail_header">
                    <h4 class="shop_title ellipsis">虾真好吃</h4>
                    <ul class="shop_detail_ul">
                      <li class="supports">保</li>
                      <li class="supports">准</li>
                      <li class="supports">票</li>
                    </ul>
                  </section>
                  <section class="shop_rating_order">
                    <section class="shop_rating_order_left">
                      <div class="star star-24">
                        <span class="star-item on"></span>
                        <span class="star-item on"></span>
                        <span class="star-item on"></span>
                        <span class="star-item on"></span>
                        <span class="star-item half"></span>
                        <span class="star-item off"></span>
                      </div>
                      <div class="rating_section">
                        3.6
                      </div>
                      <div class="order_section">
                        月售106单
                      </div>
                    </section>
                    <section calss="shop_rating_order_right">
                      <span class="delivery_style delivery_right">硅谷转送</span>
                    </section>
                  </section>
                  <section class="shop_distance">
                    <p class="shop_delivery_msg">
                      <span>￥20起送</span>
                      <span class="segmentation">/</span>
                      <span>配送费￥5</span>
                    </p>
                  </section>
                </div>
              </a>
            </li>
            <!--<li class="shop_li border-1px">-->
              <!--<a>-->
                <!--<div class="shop_left">-->
                  <!--<img class="shop_img" src="./images/rou.jpg"/>-->
                <!--</div>-->
                <!--<div class="shop_right">-->
                  <!--<section class="shop_detail_header">-->
                    <!--<h4 class="shop_title ellipsis">虾真好吃</h4>-->
                    <!--<ul class="shop_detail_ul">-->
                      <!--<li class="supports">保</li>-->
                      <!--<li class="supports">准</li>-->
                      <!--<li class="supports">票</li>-->
                    <!--</ul>-->
                  <!--</section>-->
                  <!--<section class="shop_rating_order">-->
                    <!--<section class="shop_rating_order_left">-->
                      <!--<div class="star star-24">-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item half"></span>-->
                        <!--<span class="star-item off"></span>-->
                      <!--</div>-->
                      <!--<div class="rating_section">-->
                        <!--3.6-->
                      <!--</div>-->
                      <!--<div class="order_section">-->
                        <!--月售106单-->
                      <!--</div>-->
                    <!--</section>-->
                    <!--<section calss="shop_rating_order_right">-->
                      <!--<span class="delivery_style delivery_right">硅谷转送</span>-->
                    <!--</section>-->
                  <!--</section>-->
                  <!--<section class="shop_distance">-->
                    <!--<p class="shop_delivery_msg">-->
                      <!--<span>￥20起送</span>-->
                      <!--<span class="segmentation">/</span>-->
                      <!--<span>配送费￥5</span>-->
                    <!--</p>-->
                  <!--</section>-->
                <!--</div>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="shop_li border-1px">-->
              <!--<a>-->
                <!--<div class="shop_left">-->
                  <!--<img class="shop_img" src="./images/rou.jpg"/>-->
                <!--</div>-->
                <!--<div class="shop_right">-->
                  <!--<section class="shop_detail_header">-->
                    <!--<h4 class="shop_title ellipsis">虾真好吃</h4>-->
                    <!--<ul class="shop_detail_ul">-->
                      <!--<li class="supports">保</li>-->
                      <!--<li class="supports">准</li>-->
                      <!--<li class="supports">票</li>-->
                    <!--</ul>-->
                  <!--</section>-->
                  <!--<section class="shop_rating_order">-->
                    <!--<section class="shop_rating_order_left">-->
                      <!--<div class="star star-24">-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item half"></span>-->
                        <!--<span class="star-item off"></span>-->
                      <!--</div>-->
                      <!--<div class="rating_section">-->
                        <!--3.6-->
                      <!--</div>-->
                      <!--<div class="order_section">-->
                        <!--月售106单-->
                      <!--</div>-->
                    <!--</section>-->
                    <!--<section calss="shop_rating_order_right">-->
                      <!--<span class="delivery_style delivery_right">硅谷转送</span>-->
                    <!--</section>-->
                  <!--</section>-->
                  <!--<section class="shop_distance">-->
                    <!--<p class="shop_delivery_msg">-->
                      <!--<span>￥20起送</span>-->
                      <!--<span class="segmentation">/</span>-->
                      <!--<span>配送费￥5</span>-->
                    <!--</p>-->
                  <!--</section>-->
                <!--</div>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="shop_li border-1px">-->
              <!--<a>-->
                <!--<div class="shop_left">-->
                  <!--<img class="shop_img" src="./images/rou.jpg"/>-->
                <!--</div>-->
                <!--<div class="shop_right">-->
                  <!--<section class="shop_detail_header">-->
                    <!--<h4 class="shop_title ellipsis">虾真好吃</h4>-->
                    <!--<ul class="shop_detail_ul">-->
                      <!--<li class="supports">保</li>-->
                      <!--<li class="supports">准</li>-->
                      <!--<li class="supports">票</li>-->
                    <!--</ul>-->
                  <!--</section>-->
                  <!--<section class="shop_rating_order">-->
                    <!--<section class="shop_rating_order_left">-->
                      <!--<div class="star star-24">-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item half"></span>-->
                        <!--<span class="star-item off"></span>-->
                      <!--</div>-->
                      <!--<div class="rating_section">-->
                        <!--3.6-->
                      <!--</div>-->
                      <!--<div class="order_section">-->
                        <!--月售106单-->
                      <!--</div>-->
                    <!--</section>-->
                    <!--<section calss="shop_rating_order_right">-->
                      <!--<span class="delivery_style delivery_right">硅谷转送</span>-->
                    <!--</section>-->
                  <!--</section>-->
                  <!--<section class="shop_distance">-->
                    <!--<p class="shop_delivery_msg">-->
                      <!--<span>￥20起送</span>-->
                      <!--<span class="segmentation">/</span>-->
                      <!--<span>配送费￥5</span>-->
                    <!--</p>-->
                  <!--</section>-->
                <!--</div>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="shop_li border-1px">-->
              <!--<a>-->
                <!--<div class="shop_left">-->
                  <!--<img class="shop_img" src="./images/rou.jpg"/>-->
                <!--</div>-->
                <!--<div class="shop_right">-->
                  <!--<section class="shop_detail_header">-->
                    <!--<h4 class="shop_title ellipsis">虾真好吃</h4>-->
                    <!--<ul class="shop_detail_ul">-->
                      <!--<li class="supports">保</li>-->
                      <!--<li class="supports">准</li>-->
                      <!--<li class="supports">票</li>-->
                    <!--</ul>-->
                  <!--</section>-->
                  <!--<section class="shop_rating_order">-->
                    <!--<section class="shop_rating_order_left">-->
                      <!--<div class="star star-24">-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item half"></span>-->
                        <!--<span class="star-item off"></span>-->
                      <!--</div>-->
                      <!--<div class="rating_section">-->
                        <!--3.6-->
                      <!--</div>-->
                      <!--<div class="order_section">-->
                        <!--月售106单-->
                      <!--</div>-->
                    <!--</section>-->
                    <!--<section calss="shop_rating_order_right">-->
                      <!--<span class="delivery_style delivery_right">硅谷转送</span>-->
                    <!--</section>-->
                  <!--</section>-->
                  <!--<section class="shop_distance">-->
                    <!--<p class="shop_delivery_msg">-->
                      <!--<span>￥20起送</span>-->
                      <!--<span class="segmentation">/</span>-->
                      <!--<span>配送费￥5</span>-->
                    <!--</p>-->
                  <!--</section>-->
                <!--</div>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="shop_li border-1px">-->
              <!--<a>-->
                <!--<div class="shop_left">-->
                  <!--<img class="shop_img" src="./images/rou.jpg"/>-->
                <!--</div>-->
                <!--<div class="shop_right">-->
                  <!--<section class="shop_detail_header">-->
                    <!--<h4 class="shop_title ellipsis">虾真好吃</h4>-->
                    <!--<ul class="shop_detail_ul">-->
                      <!--<li class="supports">保</li>-->
                      <!--<li class="supports">准</li>-->
                      <!--<li class="supports">票</li>-->
                    <!--</ul>-->
                  <!--</section>-->
                  <!--<section class="shop_rating_order">-->
                    <!--<section class="shop_rating_order_left">-->
                      <!--<div class="star star-24">-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item on"></span>-->
                        <!--<span class="star-item half"></span>-->
                        <!--<span class="star-item off"></span>-->
                      <!--</div>-->
                      <!--<div class="rating_section">-->
                        <!--3.6-->
                      <!--</div>-->
                      <!--<div class="order_section">-->
                        <!--月售106单-->
                      <!--</div>-->
                    <!--</section>-->
                    <!--<section calss="shop_rating_order_right">-->
                      <!--<span class="delivery_style delivery_right">硅谷转送</span>-->
                    <!--</section>-->
                  <!--</section>-->
                  <!--<section class="shop_distance">-->
                    <!--<p class="shop_delivery_msg">-->
                      <!--<span>￥20起送</span>-->
                      <!--<span class="segmentation">/</span>-->
                      <!--<span>配送费￥5</span>-->
                    <!--</p>-->
                  <!--</section>-->
                <!--</div>-->
              <!--</a>-->
            <!--</li>-->
          </ul>

       </div>
    </div>
  </section>

</template>

<script>
  import Top from "../../components/top/Top.vue";
  import Swiper from 'swiper'
  import 'swiper//dist/css/swiper.min.css'
  import {mapState} from "vuex"
    export default {
        data(){
          return {
            baseImageUrl : "https://fuss10.elemecdn.com",
          }
        },
        mounted(){
          new Swiper(".swiper-container",{
            loop:true,//循环轮播
            slidesPerView :1,
            centeredSlides : true,
            autoplay:true,
            pagination:{//分页器
              el:".swiper-pagination",
            }
          });
          this.$store.dispatch('getCategorys');
          this.$store.dispatch('getShops');
        },
        components:{
          Top,
        },
        computed:{
          //// 映射 this.address 为 store.state.addressd'sa'd'f
          ...mapState(['address','categorys','userInfo','shops']),
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mini.styl"
  .msite  //首页
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            img
              position absolute
              width 100%
              height 100%
            /*.link_to_food*/
              /*width 25%*/
              /*.food_container*/
                /*display block*/
                /*width 100%*/
                /*text-align center*/
                /*padding-bottom 10px*/
                /*font-size 0*/
                /*img*/
                  /*display inline-block*/
                  /*width 50px*/
                  /*height 50px*/
              /*span*/
                /*display block*/
                /*width 100%*/
                /*text-align center*/
                /*font-size 13px*/
                /*color #666*/
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
      .shop_container
        margin-bottom 50px
        .shop_list
        .shop_li
          bottom-border-1px(#f1f1f1)
          width 100%
          >a
            clearFix()
            display block
            box-sizing border-box
            padding 15px 8px
            width 100%
            .shop_left
              float left
              box-sizing border-box
              width 23%
              height 75px
              padding-right 10px
              .shop_img
                display block
                width 100%
                height 100%
            .shop_right
              float right
              width 77%
              .shop_detail_header
                clearFix()
                width 100%
                .shop_title
                  float left
                  width 200px
                  color #333
                  font-size 16px
                  line-height 16px
                  font-weight 700
                  &::before
                    content '品牌'
                    display inline-block
                    font-size 11px
                    line-height 11px
                    color #333
                    background-color #ffd930
                    padding 2px 2px
                    border-radius 2px
                    margin-right 5px
                .shop_detail_ul
                  float right
                  margin-top 3px
                  .supports
                    float left
                    font-size 10px
                    color #999
                    border 1px solid #f1f1f1
                    padding 0 2px
                    border-radius 2px

              .shop_rating_order
                clearFix()
                width 100%
                margin-top 18px
                margin-bottom 8px
                .shop_rating_order_left
                  float left
                  color #ff90ad
                  .rating_section
                    float left
                    font-size 10px
                    color #ff6000
                    margin-left 4px
                  .order_section
                    float left
                    font-size 10px
                    color #666
                    transform  scale(.8)


                .shop_rating_order_right
                  float right
                  font-size 0
                  .delivery_style
                    transform-origin 35px 0
                    transform scale(.7)
                    display inline-block
                    font-size 12px
                    padding 1px
                    border-radius 2px
                  .delivery_left
                    color #fff
                    margin-right -10px
                    background-color #02a774
                    border 1px solid #02a774
                  .delivery_right
                    color #02a774
                    border 1px solid #02a774
              .shop_distance
                clearFix()
                width 100%
                font-size 12px
                .shop_delivery_msg
                  float left
                  transform-origin 0
                  transform scale(.9)
                  color #666
                .segmentation
                  color #ccc
</style>
