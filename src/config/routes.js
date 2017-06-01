import Login from '../modules/Login.vue'
import Register from '../modules/register/register.vue'
import NotFound from '../modules/404.vue'
import Home from '../modules/Home.vue'
import Main from '../modules/Main.vue'
import Table from '../modules/page1/index.vue'
import Form from '../modules/page2/index.vue'
import EditChart from '../modules/dashboard/editChart.vue'

let routes =[
  {
    path:'/login',
    component:Login,
    name :'',
    hidden:true
  },
  {
    path:'/register',
    component:Register,
    name :'',
    hidden:true
  },
  {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
  },
  {
      path:'/404',
      component: NotFound,
      name: '',
      hidden: true
  },
  //{ path: '/main', component: Main },
  {
      path: '/nav',
      component: Home,
      name :'',
      iconCls: 'el-icon-message',//图标样式class
      children: [
          { 
            path: 'dashboard', component: Main, name: '', hidden: true, 
            children: [
              {
                path: 'dash1',
                meta: {auth: true},
                component: resolve => require(['../modules/dashboard/'], resolve)
              },
              {
                path: 'dash2',
                meta: {auth: true},
                component: resolve => require(['../modules/dashboard/'], resolve)
              },
              {
                path: 'editChart/:index',
                meta: {auth: true},
                name:'editChart',
                component: EditChart
              }]
          },
          { path: 'worktable', component: Table, name: 'Table' },
          { path: 'datasource', component: Form, name: 'Form' }
      ]
  },
  
  {
      path: '*',
      hidden: true,
      redirect: { path: '/login' }
  }
]

export default routes;
