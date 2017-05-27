// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//import '../static/css/jquery.gridster.min.css'
//import './assets/jquery.gridster.min'

import './css/common.css'
import './css/iconfont.css'
import mock from './apis/mock'

import routes from './config/routes'
import App from './App'
import splitting from './modules/code-splitting-demo'
import $ from 'jquery'
import 'dsmorse-gridster/dist/jquery.gridster.min.css'
import 'dsmorse-gridster'



Vue.use(VueRouter) //路由注册
Vue.use(ElementUI) //UI框架注册



// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  mode:'history',
  routes // （缩写）相当于 routes: routes
})

router.beforeEach(({meta, path}, from, next) => {
  let {auth = true} = meta
  let isLogin = Boolean(store.state.login.tokens != '') //true用户已登录， false用户未登录

  if (auth && !isLogin && path !== '/login'&& path !== '/register') {
    return next({path: '/login'})
  }

  if (isLogin && (path == '/login' || path == '/')) { //已登录过，则跳转到主页
    return next({path: '/nav/dashboard/dash1'})
  }

  next()
})

mock.start() //启动ajax mock服务

splitting.start() //demo：运行webpack2 code splitting示例

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
