import { createStore } from 'vuex'

export default createStore({
  state: {
    goodsList:[{goodsId:''}]//所有商品数据列表{goodsId:''}
  },
  getters: {
    //拿到所有商品信息
    allGoodsList(state){
      return state.goodsList;
    }
  },
  mutations: {
    //拿到所有商品信息
    setGoodsList(state,data){
      state.goodsList = data;
      // console.log("mutatat",state.goodsList);
    },
    getGoodsData(state,gid){

    },
    //修改商品信息
    changeGoods(state,data){
      console.log("mu",data); 
      console.log(state.goodsList);
      let dat = state.goodsList
      for(let i=0;i<state.goodsList.length;i++){
        if(state.goodsList[i].goodsId == data.goodsId){
          state.goodsList.splice(i,1,data)
        }
      }
      console.log(state.goodsList);
      
      // let newdata = state.goodsList.find(item => item.goodsId == data.goodsId)
      // let newdata = state.goodsList.filter((item) => {
      //   // console.log(item.goodsId);
      //   return item.goodsId == data.goodsId
        
      // })
      
      
      // state.goodsList = data;
    }
  },
  actions: {
    //拿到所有商品信息
    setGoodsList({commit},data){
      // console.log("ac",data);
      commit('setGoodsList',data)
    },
    changeGoods({commit},data){
      console.log('ac',data);
      commit('changeGoods',data)
    }
  },
  modules: {
  }
})
