import { stat } from 'fs';
import { createStore } from 'vuex';
import { useStore } from "vuex";
const store = useStore();
export default createStore({
  state: {
    //会员列表
    memberUserList: JSON.parse(localStorage.getItem('memberUserList') || '[]'),
    //会员等级列表
    memberGradeList:[],
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
    // 优惠卷信息
    tableData:JSON.parse(localStorage.getItem('tableData') || '[]'),  },

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
    gettableData(state){
      return state.tableData
    },
  },
  mutations: {
    /* 存储用户列表 */
    savaMemberUserList(state: any, value) {
      state.memberUserList = value;
      localStorage.setItem('memberUserList', JSON.stringify(state.memberUserList));
    },
    //获取全部商品数据
    setGoodsList(state:any,data){
      state.goodsList = data;
      let localData = localStorage.getItem('goodslist')
      if(localData == null){
        localStorage.setItem('goodslist',JSON.stringify(data))
      }
    },
    //修改商品信息
    changeGoods(state:any,data){
      for(let i=0;i<state.goodsList.length;i++){
        if(state.goodsList[i].goodsId == data.goodsId){
          state.goodsList.splice(i,1,data)
        }
      };
      localStorage.setItem('goodslist',JSON.stringify(state.goodsList))
    },
    //增加商品
    addGoods(state:any,data){
      console.log(data);
    },
    setUserlists(state:any, payload) {
      state.aceesuser = payload
    },
    /* 添加用户 */
    addMemberUser(state:any, value) {
      state.memberUserList.push(value)
      localStorage.setItem('memberUserList', JSON.stringify(state.memberUserList));
    },
    /* 修改会员信息 */
    updateMemberUser(state:any, value) { 
      for (let i = 0; i < state.memberUserList.length; i++) {
        if (state.memberUserList[i].userId === value.userId) {
          state.memberUserList.splice(i, 1,value);
        }
      }
      localStorage.setItem('memberUserList', JSON.stringify(state.memberUserList));
    },
    /* 修改会员状态：启用||禁用 */
    updateMemberUserStatus(state:any, value) { 
      for (let i = 0; i < state.memberUserList.length; i++) {
        if (state.memberUserList[i].userId === value) {
          state.memberUserList[i].userStatus = !state.memberUserList[i].userStatus
        }
      }
      localStorage.setItem('memberUserList', JSON.stringify(state.memberUserList));
    }, 
     /* 存储会员等级列表 */
    saveMemberGradeList(state: any, value) { 
      state.memberGradeList = value;
    },
    /* 修改会员等级列表信息 */
    updateMemberGradeList(state: any, value) { 
      for (let i = 0; i < state.memberGradeList.length; i++) {
        if (state.memberGradeList[i].id === value.id) {
          state.memberGradeList.splice(i, 1,value);
        }
      }
    },
    // 优惠卷信息
    settableData(state,data){
      state.tableData=data;
    }
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
    setUserlist(context:any, payload) {
      context.commit('setUserlists', payload)
    },
    deleteUser(context:any, payload) {
      context.commit('deleteUser', payload)
    },
    // 增加权限
    steacess(context:any, payload) {
      context.commit('addAcess', payload)
    },
    // 新增
    addUser(context:any, payload) {
      context.commit('addUser', payload)
    },
    /* 存储会员用户列表 */
    savaMemberUserList(context:any, value) {
      context.commit('savaMemberUserList', value);
    },
    /* 添加会员用户 */
    addMemberUser(context:any, value) {
      context.commit('addMemberUser', value);
    },
    /* 修改会员信息 */
    updateMemberUser(context:any, value) { 
      context.commit('updateMemberUser', value);
    },
    /* 修改会员状态：启用||禁用 */
    updateMemberUserStatus(context:any, value) { 
      context.commit('updateMemberUserStatus', value);
    },
    /* 存储会员等级列表 */
    saveMemberGradeList(context: any, value) { 
      context.commit('saveMemberGradeList', value);
    },
    /* 修改会员等级列表信息 */
    updateMemberGradeList(context:any, value) { 
      context.commit('updateMemberGradeList', value);
    },
    //拿到所有满减信息
    settableData({commit},data){
      commit('settableData',data);
    }
},

  modules: {}
})
