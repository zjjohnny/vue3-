import { createStore } from 'vuex'
import { useStore } from "vuex";
const store = useStore();
export default createStore({
  state: {
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

    }
  },
  actions: {
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
    }

  }
})
