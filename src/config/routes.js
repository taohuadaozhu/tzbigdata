import Login from '../modules/Login.vue'
import Register from '../modules/register/register.vue'
import NotFound from '../modules/404.vue'
import Home from '../modules/Home.vue'
import Main from '../modules/Main.vue'
import Table from '../modules/page1/index.vue'
import EditChart from '../modules/dashboard/editChart.vue'
import Datasource from '../modules/data-source/index.vue'

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
              },
              {
                path: 'bigChart/:index',
                meta: {auth: true},
                name:'bigChart',
                component: resolve => require(['../modules/dashboard/bigChart.vue'], resolve)
              }]
          },
          { path: 'worktable', component: Table, name: 'Table' },
          { path: 'datasource', component: Main, name: 'datasource',hidden:true,
            children:[
              {
                path:'source1',
                meta:{auth:true},
                component:resolve => require(['../modules/data-source/index'], resolve)

              },
              {
                path:'data',
                meta:{auth:true},
                component:resolve => require(['../modules/data-source/data'], resolve)

              }
            ]
          },
          { path: 'cost', component: Main, name: 'caiwu', hidden: true,  
             children: [
              {
                path: 'people',
                meta: {auth: true},
                component: resolve => require(['../modules/caiwu/cost'], resolve)
              },
              {
                path: 'project',
                meta: {auth: true},
                component: resolve => require(['../modules/caiwu/cost'], resolve)
              }]
          },
          { path: 'income', component: Main, name: 'income', hidden: true,  
             children: [
              {
                path: 'depart',
                meta: {auth: true},
                component: resolve => require(['../modules/caiwu/income'], resolve)
              },
              {
                path: 'business',
                meta: {auth: true},
                component: resolve => require(['../modules/caiwu/income'], resolve)
              }]
          }
      ]
  },
  
  {
      path: '*',
      hidden: true,
      redirect: { path: '/login' }
  }
]

export default routes;
