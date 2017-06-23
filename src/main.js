// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import '../theme/index.css'

//import '../static/css/jquery.gridster.min.css'
//import './assets/jquery.gridster.min'

import './css/common.css'
import './css/iconfont.css'
// import mock from './apis/mock'

import routes from './config/routes'
import App from './App'
import splitting from './modules/code-splitting-demo'
import $ from 'jquery'
import 'dsmorse-gridster/dist/jquery.gridster.min.css'
import 'dsmorse-gridster'
import axios from 'axios';
var VueEditable= require('../static/js/vue-editable.js');






Vue.use(VueRouter) //路由注册
Vue.use(ElementUI) //UI框架注册
Vue.use(VueEditable);


// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  mode:'history',
  routes // （缩写）相当于 routes: routes
})
//这是一个路由钩子，所有的路由验证都通过这里，而前端只要写脚本把islogin变量改为true就可以访问其他数据界面
//这样做是否安全，是否应由不同的login.html register.html等不同界面，然后交由后台验证，待考虑----shi20170621
router.beforeEach(({meta, path}, from, next) => {
  console.log(window.location)
  let {auth = true} = meta
  let isLogin = Boolean(store.state.login.tokens != '') //true用户已登录， false用户未登录
   isLogin = true;
  if(path!=='/newPass'){
     if (auth && !isLogin && path !== '/login'&& path !== '/register') {
        return next({path: '/login'})
      }

      if (isLogin && (path == '/login' || path == '/')) { //已登录过，则跳转到主页
        if(store.state.login.tokens==="custom"){
          return next({path: '/nav/cost/people'})
        }else{
          return next({path: '/nav/dashboard/dash1'})
        }

        
      }
  }
 

  next()
})

//  mock.start() //启动ajax mock服务
// mock.stop();

splitting.start() //demo：运行webpack2 code splitting示例

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
