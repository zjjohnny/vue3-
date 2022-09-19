import { createStore } from 'vuex'
import { useStore } from "vuex";
const store = useStore();
export default createStore({
  state: {
    //会员列表
    memberUserList:JSON.parse(localStorage.getItem('memberUserList') || '[]'),
    // memberUserList:[],
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
    aceesuser: []
  },
  getters: {
    getUserlist(state) {
      return state.userlist
    },
    getuseracc(state) {
      return state.aceesuser
    }

  },
  mutations: {
    /* 存储用户列表 */
    savaMemberUserList(state: any, value) { 
      state.memberUserList = value;
      localStorage.setItem('memberUserList',JSON.stringify(state.memberUserList));
    },
    /* 添加用户 */
    addMemberUser(state: any, value) {
      state.memberUserList.push(value)
      localStorage.setItem('memberUserList', JSON.stringify(state.memberUserList));
    },
    /* 修改会员信息 */
    updateMemberUser(state: any, value) { 
      for (let i = 0; i < state.memberUserList.length; i++) {
        if (state.memberUserList[i].userId === value.userId) {
          state.memberUserList.splice(i, 1,value);
        }
      }
      localStorage.setItem('memberUserList', JSON.stringify(state.memberUserList));
    },
    /* 修改会员状态：启用||禁用 */
    updateMemberUserStatus(state: any, value) { 
      for (let i = 0; i < state.memberUserList.length; i++) {
        if (state.memberUserList[i].userId === value) {
          state.memberUserList[i].userStatus = !state.memberUserList[i].userStatus
        }
      }
      localStorage.setItem('memberUserList', JSON.stringify(state.memberUserList));
    }
  },
  actions: {
    setUserlist(context: any, payload) {
      context.commit('setUserlists', payload)
    },
    deleteUser(context: any, payload) {
      context.commit('deleteUser', payload)
    },
    // 增加权限
    steacess(context: any, payload) {
      context.commit('addAcess', payload)
    },
    // 新增
    addUser(context: any, payload) {
      context.commit('addUser', payload)
    },
    /* 存储会员用户列表 */
    savaMemberUserList(context: any, value) {
      context.commit('savaMemberUserList', value);
    },
    /* 添加会员用户 */
    addMemberUser(context: any, value) {
      context.commit('addMemberUser', value);
    },
    /* 修改会员信息 */
    updateMemberUser(context: any, value) { 
      context.commit('updateMemberUser', value);
    },
    /* 修改会员状态：启用||禁用 */
    updateMemberUserStatus(context: any, value) { 
      context.commit('updateMemberUserStatus', value);
    }
  },
  modules: {
    // setUserlists(state, payload) {
    //   state.aceesuser = payload
    // },
    // // 删除用户
    // deleteUser(state, payload,) {
    //   state.userlist.splice(payload, 1)
    // },
    // // 增加权限
    // addAcess(state, payload: any) {
    //   console.log('%c ======>>>>>>>>', 'color:orange;', payload.acess,)
    //   state.userlist[payload.id].acess = payload.acess
    // },
    // // 新增用户
    // addUser(state, payload) {
    //   state.userlist.push({
    //     id: state.userlist.length,
    //     username: payload.username,
    //     name: payload.name,
    //     password: payload.password,
    //     acess: [], //权限
    //     date: new Date().getFullYear() +
    //       "年" +
    //       new Date().getMonth() +
    //       "月" +
    //       new Date().getDate() +
    //       "日",         
    //   }),
    //   // 存本地
    //   localStorage.setItem('userlist', JSON.stringify(state.userlist))

    // }
  }
})
