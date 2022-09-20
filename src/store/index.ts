import { createStore } from 'vuex'
import { useStore } from "vuex";
const store = useStore();
export default createStore({
  state: {
    goodsList:[{goodsId:''}],//所有商品数据列表{goodsId:''}
    userlist: [
      {
        id: 0,
        username: 'dabai',
        password: '123',
        name: 'hhh',
        acess: [] as any[], //权限
        date: new Date().getFullYear() +
          "年" +
          new Date().getMonth() +
          "月" +
          new Date().getDate() +
          "日",

      }, {
        id: 1,
        username: 'pll',
        name: 'heihei',
        password: '1234',
        acess: [], //权限
        date: new Date().getFullYear() +
          "年" +
          new Date().getMonth() +
          "月" +
          new Date().getDate() +
          "日",
      }
    ],
    // 增加的权限用户
    aceesuser: [],
    //order订单设置
    orderList:[],
    countryList:[],
    
  },
  getters: {
    //拿到所有商品信息
    allGoodsList(state){
      return state.goodsList;
    },
    getUserlist(state) {
      return state.userlist
    },
    getuseracc(state) {
      return state.aceesuser
    },
    //订单设置
    allOrder(state){
      return state.orderList
    },
    allCountry(state){
      return state.countryList
    },
  },
  mutations: {
    //获取全部商品数据
    setGoodsList(state,data){
      state.goodsList = data;
      let localData = localStorage.getItem('goodslist')
      if(localData == null){
        localStorage.setItem('goodslist',JSON.stringify(data))
      }
    },
    //修改商品信息
    changeGoods(state,data){
      for(let i=0;i<state.goodsList.length;i++){
        if(state.goodsList[i].goodsId == data.goodsId){
          state.goodsList.splice(i,1,data)
        }
      };
      localStorage.setItem('goodslist',JSON.stringify(state.goodsList))
    },
    //增加商品
    addGoods(state,data){
      console.log(data);
      
    },
    setUserlists(state, payload) {
      state.aceesuser = payload
    },
    // 删除用户
    deleteUser(state, payload,) {
      state.userlist.splice(payload, 1)
    },
    // 增加权限
    addAcess(state, payload: any) {
      console.log('%c ======>>>>>>>>', 'color:orange;', payload.acess,)
      state.userlist[payload.id].acess = payload.acess
    },
    // 新增用户
    addUser(state, payload) {
      state.userlist.push({
        id: state.userlist.length,
        username: payload.username,
        name: payload.name,
        password: payload.password,
        acess: [], //权限
        date: new Date().getFullYear() +
          "年" +
          new Date().getMonth() +
          "月" +
          new Date().getDate() +
          "日",         
      }),
      // 存本地
      localStorage.setItem('userlist', JSON.stringify(state.userlist))

    },
    //order
    setOrderList(state,data){
      state.orderList=data
      // console.log(state.orderList);
    },
    setCountryList(state,data){
      state.countryList=data
    },
    
  },
  actions: {
    //拿到所有商品信息
    setGoodsList({commit},data){
      commit('setGoodsList',data);
    },
    //修改商品信息
    changeGoods({commit},data){
      commit('changeGoods',data)
    },
    //添加商品
    addGoods({commit},data){
      commit('addGoods',data)
    },

    setUserlist(context, payload) {
      context.commit('setUserlists', payload)
    },
    deleteUser(context, payload) {
      context.commit('deleteUser', payload)
    },
    // 增加权限
    steacess(context, payload) {
      context.commit('addAcess', payload)
    },
    // 新增
    addUser(context, payload) {
      context.commit('addUser', payload)
    },
    //order新增
    setOrderList({commit},data){
      // console.log(data);
      commit("setOrderList",data)
    },
    setCountryList({commit},data){
      commit("setCountryList",data)
    },
  }
})
