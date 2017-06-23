<style lang="scss" scoped="" type="text/css">
html,body{
  margin: 0;
  padding: 0;
}
.nav-ul{
  float: left;
  margin: 0;
  margin-left: 30px;
  padding: 0;
  height: 60px;
    li {
      float: left;
      height:41px;
      margin: 16px 3px;
      cursor: pointer;
      font-weight: 700;
    }
    & li:hover{
      border-bottom-style: solid;
      border-bottom-width: 3px;
    }
    .li-active{
      border-bottom-style: solid;
      border-bottom-width: 3px;
    }
 } 
 .nav-item-title{
   line-height: 32px;
   font-size: 14px;
   margin: 0 16px;
 }
 .nav-item-title:hover{
  opacity: 1;
 }
 .logo-personal{
   float: left;
   height: 60px;
    width: 120px;
   overflow: hidden;
 }
 .logo-link{
   float: left;
    display: block;
    width: 163px;
    height: 100%;
    line-height: 34px;
    transition: all .2s ease-in-out;
    cursor: pointer;
    img {
      width: 100%;
      height: auto;
      margin-top:5px;

    }
 }
  .main-header {
    position: absolute;
    width: 100%;
    height: 60px;
		line-height: 60px;
    padding: 0;
    z-index: 1000;
    min-width: 860px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .06), 0 10px 12px 0 rgba(170, 182, 206, .15);
  }
  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
    .userinfo-inner {
      cursor: pointer;
    }
  }
  
  .head{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
  
</style>
<template>
<header class="theme main-header">
    <a class="logo-link" href="#"><img src="../assets/logo.png"></a>
   <ul class="theme nav-ul">
     <li v-for="(item,index) in menus" :class="{ 'li-active': index===liActive }">
     <router-link :to="{path:item.path,params:item.query}" @click.native="changeTag(index,item.classify)">
     <div class="nav-item-title">{{ item.text}}</div>
     </router-link></li>
   </ul> 
  <el-col :span="4" class="userinfo">
    <el-dropdown trigger="hover" @command="handleCommand">
      <span class="el-dropdown-link userinfo-inner"><img class="head" :src="this.sysUserAvatar" /> {{sysUserName}}</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="mess">我的消息</el-dropdown-item>
        <el-dropdown-item command="info">个人资料</el-dropdown-item>
        <el-dropdown-item command="theme">更换主题</el-dropdown-item>
        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</el-col>
</header>
</template>
<script>
var  navList=[
			{text:'驾驶舱',path:'/nav/dashboard/dash1',classify:'dashboard'},
			{text:'数据模型',path:'/nav/worktable'},
			{text:'数据源',path:'/nav/datasource/source1',classify:'datasource'},
      {text:'数据模型库',path:'/nav/modellib'}
		]
export default {
    data () {
      return {
        liActive:0,
        menus: navList,
        sysUserName: '史惠美',
				sysUserAvatar: require('../assets/tao.png'),
      }
    },
    methods: {
      handleCommand(command) {
        if(command==="theme"){
          let a = document.getElementById('themedark');
          a.disabled=!a.disabled;
          let b = document.getElementById('themelight');
          b.disabled=!b.disabled;
        }
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      logout:function(){
        this.$store.dispatch('logout')
      },
      changeTag:function(index,value){
        this.liActive = index;
        this.$store.commit("CHANGE_TAG",value)
       
      }
    }
  }

</script>
