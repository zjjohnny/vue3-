import { createStore } from 'vuex'

export default createStore({
  state: {
    // userList:JSON.parse(localStorage.getItem('userList') || '[]')
    userList:[]
  },
  getters: {
  },
  mutations: {
    /* 存储用户列表 */
    savaUserList(state: any, value) { 
      state.userList = value;
      localStorage.setItem('userList',JSON.stringify(state.userList));
    },
    /* 添加用户 */
    addUser(state: any, value) {
      state.userList.push(value)
      localStorage.setItem('userList', JSON.stringify(state.userList));
    },
  },
  actions: {
    /* 存储用户列表 */
    savaUserList(context: any, value) {
      context.commit('savaUserList', value);
    },
    /* 添加用户 */
    addUser(context: any, value) {
      context.commit('addUser', value);
    }
  },
  modules: {
  }
})
