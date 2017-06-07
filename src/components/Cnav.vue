<style scoped>
html,body{
  margin: 0;
  padding: 0;
}
.nav-ul{
    list-style: none;
 } 
.nav-ul li {
   float: left;
   height: 64px;
   cursor: pointer;
   font-weight: 700;

 }
 .nav-item-title{
   line-height: 32px;
   font-size: 14px;
   margin: 0 16px;
   color:white;
   opacity: 0.8;
 }
 .nav-item-title:hover{
  opacity: 1;
 }
 nav{float:left;}
 .logo-personal{
   float: left;
   height: 64px;
    width: 120px;
   overflow: hidden;
 }
 .logo-link{
   float: left;
    display: block;
    width: 100px;
    height: 64px;
    line-height: 34px;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    transition: all .2s ease-in-out;
    cursor: pointer;
    color: white;
 }
  .main-header {
    top: 0;
    width: 100%;
    height: 60px;
		line-height: 60px;
    padding: 0;
    background-color: #20A0FF;
    z-index: 8000;
    min-width: 860px;
    color:#fff;
  }
  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
    
    }
    .userinfo-inner {
      cursor: pointer;
      color:#fff;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      margin: 10px 0px 10px 10px;
      float: right;
    }
</style>
<template>
<header class="main-header">
  <h1 class="logo-personal">
    <a class="logo-link" href="#">LOGO</a></h1>
 <nav>
   <!--<el-menu  :default-active="1" class="el-menu-demo" mode="horizontal"  @select="handleSelect">
   <el-menu-item index="1">仪表盘</el-menu-item>
   <el-menu-item index="2">工作表</el-menu-item>
   <el-menu-item index="3">数据源</el-menu-item>
   <el-menu-item index="4">模板库</el-menu-item>
</el-menu>-->

   <ul class="nav-ul">
     <li v-for="item in menus">
     <router-link :to="{path:item.path,params:item.query}" @click.native="changeTag(item.path)">
     <div class="nav-item-title">{{ item.text}}</div>
     </router-link></li>
   </ul> 
</nav>
  <el-col :span="4" class="userinfo">
    <el-dropdown trigger="hover">
      <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>我的消息</el-dropdown-item>
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</el-col>
</header>
</template>
<script>
var  navList=[
			{text:'仪表盘',path:'/nav/dashboard/dash1',query:{data:'dashboard'}},
			{text:'工作表',path:'/nav/worktable'},
			{text:'数据源',path:'/nav/datasource/source1',query:{data:'datasource'}},
      {text:'模板库',path:'/nav/modellib'}
		]
export default {
    data () {
      return {
        menus: navList,
        sysUserName: '史惠美',
				sysUserAvatar: '',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      logout:function(){
        this.$store.dispatch('logout')
      },
      changeTag:function(path){
        this.$store.commit("CHANGE_TAG",path)
      }
    }
  }

</script>
