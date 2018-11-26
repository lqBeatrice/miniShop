/*
* Action: 通过操作mutation间接更新state的多个方法的对象
* */

//引入api接口
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopRatings,
  reqShopGoods,
  reqShopInfo,
  reqSearchShop
} from '../api';

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types';

export default{
  //异步获取地址
  async getAddress({commit,state}){
    const geohash = state.latitude + ',' + state.longitude;
    const result = await reqAddress(geohash);
    if(result.code === 0){
      const address = result.data;
      commit(RECEIVE_ADDRESS,{address});
    }
  },

  //异步获取商家列表
  async getShops({commit,state}){
    const {longitude,latitude} = state;
    const result = await reqShops(longitude,latitude);
    if(result.code === 0){
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops});
    }
  },

  //异步获取食品分类列表
  async getCategorys({commit}){
    const result = await reqCategorys();
    if(result.code === 0){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys});
    }
  }

}
