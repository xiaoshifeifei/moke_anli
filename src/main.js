import Vue from 'vue'
import App from './App'
import router from './router'
// 这个是mockjs的开关
import "./mock_utils/index"
// 手动配置element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
//引入全局样式
import './assets/css/global.css'
import axios from 'axios'
// axios.defaults.baseURL='http://frontdev.youqimei.com/plat/v1'
// 请求拦截：请求接口数据到服务器之前做数据拦截处理处理完发送到服务器
// 通过axios请求拦截器添加token，保障拥有获取数据的权限
axios.interceptors.request.use(config =>{
  console.log("config",config)
  config.headers.authorization ='Bearer' +' '+ sessionStorage.getItem('token')
    return config
})
Vue.prototype.$http = axios //大家可以直接通过this访问$http 的axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
