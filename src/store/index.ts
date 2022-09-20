import { createStore } from 'vuex'

export default createStore({
  state: {
    UserList:[]//所有用户数据
  },
  getters: {
    allUserList(state){
      return state.UserList
    }
  },
  mutations: {
    setUserList(state,data){
      state.UserList=data;
  }
  },
  actions: {
    setUserList({commit},data){
     
      console.log(data);
      commit("setUserList",data)
    }
  },
  modules: {
  }
})
