<style scoped>
  .main-sidebar {
    position: absolute;
    top: 70px;
    width: 230px;
    background-color: #EAEDF1;
    overflow-y: auto;
    bottom: 0;
  }

  .sidebar-scroll {
    min-height: -moz-calc(100% - 120px);
    min-height: -webkit-calc(100% - 120px);
    min-height: calc(100% - 120px);
  }

  .main-sidebar-l .main-sidebar {
    -webkit-transition: all .28s ease-out;
    transition: all .28s ease-out;
    will-change: transform
  }

  .main-sidebar-l.sidebar-mini .main-sidebar {
    overflow-x: hidden;
  }

  .main-sidebar-l.sidebar-mini .main-sidebar {
    -webkit-transform: translateX(-162px) translateY(0) translateZ(0);
    -ms-transform: translateX(-162px) translateY(0);
    transform: translateX(-162px) translateY(0) translateZ(0)
  }

  .main-sidebar-l .main-sidebar .sidebar-content {
    -webkit-transition: all .28s ease-out;
    transition: all .28s ease-out;
    will-change: transform
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-content {
    width: 230px;
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-content {
    -webkit-transform: translateX(170px) translateY(0) translateZ(0);
    -ms-transform: translateX(170px) translateY(0);
    transform: translateX(170px) translateY(0) translateZ(0)
  }

  /*.main-sidebar-l.sidebar-mini .main-sidebar:hover,
  .main-sidebar-l.sidebar-mini .main-sidebar:hover .sidebar-content {
    -webkit-transform: translateX(0) translateY(0) translateZ(0);
    -ms-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0) translateZ(0)
  }*/

  .main-sidebar-l .main-sidebar .sidebar-mini-hide {
    -webkit-transition: opacity .28s ease-out;
    transition: opacity .28s ease-out
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-mini-hide {
    opacity: 0;
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-mini-hidden {
    display: none
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .nav-main > li.open > ul {
    display: none
  }

  .main-sidebar-l.sidebar-mini .main-sidebar:hover .sidebar-mini-hide {
    opacity: 1
  }

  .main-sidebar-l.sidebar-mini .main-sidebar:hover .nav-main > li.open > ul {
    display: block
  }

  .side-content {
    margin: 0 auto;
    padding: 0px 20px 14px;
    max-width: 100%;
    overflow-x: hidden;
    position: relative;
  }

  .nav-main {
    margin: 0 -20px;
    padding: 0;
    list-style: none;
  }

  .nav-main a.router-link-active, .nav-main a.router-link-active:hover {
    color: #fff !important;
    background-color: #387AB7;
  }

  .nav-main a {
    display: block;
    padding: 10px 20px;
    color: #666666;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .nav-main .nav-main-heading {
    padding: 10px 20px 10px;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    position: relative;
    overflow: hidden;
    opacity: 0.8;
  }

  .nav-main a.nav-submenu {
    position: relative;
    display: block;
    padding: 9px 0 9px 20px;
    width: 210px;
    height: 21px;
    line-height: 21px;
  }

  .sidebar-mini-hide {
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 160px;
  }

  .sidebar-mini-hide.active_icon {
    width: 110px !important;
  }

  .sidebar-mini-hide.endtime_icon {
    width: 95px !important;
  }

  .nav-main a:hover {
    background-color: rgba(217, 222, 228, 0.5);
    color: #387AB7;
  }

  .nav-main li:not(.nav-main-heading) {
    position: relative;
  }

  .nav-main a > i {
    float: left;
    margin-right: 5px;
    font-size: 18px;
  }

  .nav-setting{
    position: absolute;
    width: 65px;
    height: 60px;
    background-color: #fff;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
  }
  .setting-item{
    border-bottom: 1px solid lightgray;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 10px;
    color: gray;
    text-align: center;
  }
  .setting-item:hover{
    background-color: lightblue;
    color: black;
  }
  .sidebar-top{
    line-height: 30px;
    margin-bottom: 10px;
    background-color: aliceblue;
  }
  .iconss{
    overflow: hidden;
    opacity: 0.6;
  }
  .sidebar-top .iconss > span {
    color: #666666;
    font-weight: 700;
    font-size: 14px;
    margin-left: 15px;
  }
  .sidebar-top i{
    float: right;
    font-size: 15px;
    line-height: 30px;
    margin-right:10px;
  }
  .sidebar-top a >i{
    font-size: 23px;
  }
  .iconss:hover{
    opacity: 1;
  }

</style>
<template>
  <nav class="main-sidebar">
    <div class="sidebar-scroll">
       <div class="sidebar-top">
       <div class="iconss">
        <span>驾驶舱</span>
        <a @click="toggleMenu" class="fr"><i class="v2 icon-toggle-menu" :class="{'v2-slidebar-packup':!menuIsFold,'v2-slidebar-packup-copy':menuIsFold}"></i></a>
        <i class="el-icon-plus" @click="open3" title="新建类目" ></i>
       </div>
         
         <!--<i class="el-icon-arrow-up" v-if="showok" v-on:click="arrowup()" ></i>
        <i class="el-icon-arrow-down" v-else v-on:click="arrowup()" ></i>-->
       </div>
      <div class="sidebar-content">
        <!--导航菜单-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
					 unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in menus" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title">{{item.name}}<i class="el-icon-setting" style="float: right;margin: 20px;" @click.stop="openSetting($event,index)"></i>
                </template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
      </div>
    </div>
   

    <div class="nav-setting" v-show="settingShow">
    <div class="setting-item"><span @click="open1">创建子菜单</span></div>
    <div class="setting-item"><span @click="open2">重命名</span></div>
    <div class="setting-item"><span>删除</span></div>
    </div>
  </nav>
</template>
<script>
  import menuConfig from '../config/menu'
  import {mapGetters, mapActions} from 'vuex'
  import store from '../store'
  export default {
     computed: mapGetters([
      'menuIsFold',
      'nowtag'
    ]),
    watch: {
      nowtag: function (val) {
        console.log(val);
        this.getMenus(val);
      }
    },
    data () {
      
      return {
        collapsed:false,
        menus: menuConfig.data,
        showok:true,
        childrenShow:true,
       counter:1,
       settingShow:false
        
      }
    },
    mounted (){
      if(store.state.login.tokens==="custom"){
        
        this.menus = menuConfig.caiwu;
        console.log(this.menus)
      
      }
      
    },
    methods:{
      ...mapActions([
      'toggleMenu'
      ]) ,
      
      getMenus: function(val){
        if(val==="datasource"){
          this.menus = menuConfig.datasource;
        }
        
      },
      onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
      openSetting(event,index){
        if(this.counter===index){
          if(this.settingShow===true){
            this.settingShow=false;
          }else{
            this.settingShow=true;
          }
          
        }else{
          this.counter=index;
          this.settingShow=true;
          $(".nav-setting").css("top",(event.clientY-60)+"px").css("left",(event.clientX-28)+"px");
        }
        
        
      },
			handleselect: function (a, b) {
			},
      toggle (index, item) {
        console.log(this);
      // this.expandMenu({
      //   index: index,
      //   expanded: !item.meta.expanded
      // })
      },
      arrowup: function(){
        if(this.showok===false){
          this.showok =true;
        }else{
          this.showok = false;
        }
        
      },
       open1() {
        this.$prompt('请输入子类目名称', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: '',
          inputErrorMessage: ''
        }).then(({ value }) => {
          // this.$message({
          //   type: 'success',
          //   message: '你的邮箱是: ' + value
          // });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      open2() {
        this.$prompt('请输入新名称', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: '',
          inputErrorMessage: ''
        }).then(({ value }) => {
          // this.$message({
          //   type: 'success',
          //   message: '你的邮箱是: ' + value
          // });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      open3() {
        this.$prompt('请输入类目名称', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          
          inputErrorMessage: '类目名称不正确'
        }).then(({ value }) => {
          //添加新类目
          let obj = {
            name:value,
            children:[]
          };
          this.menus.push(obj);

          // this.$message({
          //   type: 'success',
          //   message: '你的邮箱是: ' + value
          // });
        }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '取消输入'
          // });       
        });
      }
    }
  }

</script>
