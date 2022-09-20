import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import { AxiosInstance } from 'axios'
import Axios from "@/axios/axiosInstance";
//配置
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $axios:AxiosInstance
        //----下面可以继续配置其他的全局内容
    }
}

const app=createApp(App);
    app.use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
    
app.config.globalProperties.$axios=Axios;
