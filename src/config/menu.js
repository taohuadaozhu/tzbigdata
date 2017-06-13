/**
 * Created by lichb on 2017/1/24.
 */
export default 
  {
    data:[{
    name: '财务数据分析',
    children: [
      {
        name: '工资',
        path: '/nav/dashboard/dash1'
      }, {
        name: '报销',
        path: '/nav/dashboard/dash2'
      }
    ]
  },
  {
    name: '人力资源数据分析',
    children: [
      {
        name: '页面1',
        path: '/home/page2'
      }, {
        name: '页面2',
        path: '/home/page2'
      }, {
        name: '页面3',
        path: '/env/page3'
      }, {
        name: '页面4',
        path: '/env/page4'
      }
    ]
  }],
  caiwu:[
    {
    name: '成本分析',
    children: [
      {
        name: '人力成本',
        path: '/nav/cost/people'
      }, {
        name: '项目成本',
        path: '/nav/cost/project'
      }
    ]
  },
  {
    name: '收入分析',
    children: [
      {
        name: '按部门',
        path: '/nav/income/depart'
      }, {
        name: '按业务',
        path: '/nav/income/business'
      }
    ]
  }
  ],
  datasource:[
    {
    name: '数据源一',
    children: [
      {
        name: '一个sheet',
        path: '/nav/datasource/data'
      }, {
        name: '项目成本',
        path: '/nav/cost/project'
      }
    ]
  }
  ]

  }

