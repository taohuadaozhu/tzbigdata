<style  rel="stylesheet/scss" lang="scss" scoped>
  .main-sidebar {
    width: 230px;
    position: absolute;
    top: 70px;
    bottom: 0;
    z-index: 1000;
    overflow-y: auto;
    border-right: 1px solid #D5D4D4;
    background-color: #1C2B36;
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
    -webkit-transform: translateX(-166px) translateY(0) translateZ(0);
    -ms-transform: translateX(-166px) translateY(0);
    transform: translateX(-166px) translateY(0) translateZ(0)
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
  .main-sidebar .sidebar-content .el-icon-more {
    -webkit-transform: rotate(90deg); 
    -moz-transform: rotate(90deg);
    transform: rotate(90deg);
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
    width: 66px;
    background-color: #fff;
    border: 1px solid lightgray;
  }
  .setting-item{
    width: 100%;
    height: 28px;
    line-height: 28px;
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
  }
  .iconss{
    overflow: hidden;
    opacity: 0.6;
  }
  .sidebar-top .iconss > span {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 14px;
    margin-left: 15px;
  }
  .sidebar-top i{
    float: right;
    font-size: 14px;
    line-height: 30px;
    margin-right: 10px;
    color: #989898;
  }
  .sidebar-top a >i{
    font-size: 20px;
  }
  .iconss:hover{
    opacity: 1;
  }
  .el-dropdown-menu{
    z-index: 9999;
  }
  .sidebar-content {
    font-size: 14px;
    ul,li,a {
      margin: 0;
      padding: 0;
      color: #7BA0BB;
    }
    .sidebar-title {
      color: #C1CFE0;
      line-height: 14px;
      padding: 10px 0;
      &:hover {
        color: #fff;
        background-color: #48555D;
        i {
          visibility: visible;
        }
      }
      > span {
        display: inline-block;
        width: 18px;
        height: 14px;
        vertical-align: text-top;
        margin: 0 20px 0 30px;
      }
      > i {
        float: right;
        margin-right: 20px;
        visibility: hidden;
        color: #FFF;
      }
    }
    .sidebar-submenu {
      > li {
        line-height: 40px;
        padding: 0 20px 0 84px;
        > i{
          float: right;
          line-height: 40px;
          visibility: hidden;
        }
        &:hover {
          background-color: #48555D;
          a {
            color: #FFF;
          }
          i {
            color: #FFF;
            visibility: visible;
          }
        }
      }
    }
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
      <div class="sidebar-content" @mouseenter="showSideBar()">
        <!--导航菜单-->
				<!-- <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
                   unique-opened router>
                          <template v-for="(item,index) in menus" v-if="!item.hidden">
                            <span style="display:inline-block;width:18px;height:14px;float:left;margin: 20px 26px 20px 30px;">
                              <img src="../assets/folder.png" width="100%" height="100%">
                            </span>
                            <el-submenu :index="index+''" v-if="!item.leaf">
                      <template slot="title">{{item.name}}
                              </template>
                      <el-menu-item style="padding-right: 10px;padding-left: 80px;" v-for="(child, index) in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
                                {{child.name}}
                                <i class="el-icon-more" style="float: right;line-height: 50px;" @click.stop="openSetting($event, index)"></i>
                              </el-menu-item>
                    </el-submenu>
                    <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
                  </template>
                </el-menu> -->
         <ul class="sidebar-menu" id="sortable1">
          <li v-for="(item,idx) in menus">
            <div @click="toggle" class="sidebar-title">
              <span>
                <img src="../assets/folder.png" width="100%" height="100%">
              </span>
              {{item.name}}
              <i class="el-icon-more" @click.stop="openSetting($event, idx)"></i>
            </div>
            <ul style="display: none" class="sidebar-submenu" id="sortable2">
              <li v-for="(child, index) in item.children">
                <router-link :to="child.path">{{child.name}}</router-link>
                <i class="el-icon-more" @click.stop="openSetting($event, index)"></i>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-setting" v-show="settingShow">
      <div class="setting-item" v-if="newBuiltShow"><span @click="open1">创建子菜单</span></div>
      <div class="setting-item"><span @click="open2">重命名</span></div>
      <div class="setting-item"><span>删除</span></div>
    </div>
  </nav>
</template>
<script>
  import menuConfig from '../config/menu'
  import {mapGetters, mapActions} from 'vuex'
  import Sortable from 'sortablejs'
  import store from '../store'
  export default {
     computed: mapGetters([
      'menuIsFold',
      'nowtag'
    ]),
    watch: {
      nowtag: function (val) {
        this.getMenus(val);
      }
    },
    data () {
      return {
        menus: menuConfig.data,
        showok:true,
        childrenShow:true,
        counter:1,
        settingShow:false,
        newBuiltShow: false
      }
    },
    mounted (){
      if(store.state.login.tokens==="custom"){
        this.menus = menuConfig.caiwu;
      }
      let firstLevel = document.getElementById('sortable1');
      Sortable.create(firstLevel)
    },
    methods:{
      ...mapActions([
        'toggleMenu'
      ]),
      showSideBar(){
        if(this.$store.state.menu.isFold){
          this.$store.dispatch('toggleMenu')
        }
      },
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
        console.log(index)
        console.log(this.counter)
        if(this.counter===index){
          if(this.settingShow===true){
            this.settingShow=false;
          }else{
            this.settingShow=true;
            if (event.target.parentElement.tagName === 'DIV') {
              this.newBuiltShow = true
            } else {
              this.newBuiltShow = false
            }
            $(".nav-setting").css("top",(event.clientY-60)+"px").css("left",(event.clientX-66)+"px");
          }
        }else{
          this.counter=index;
          this.settingShow=true;
          if (event.target.parentElement.tagName === 'DIV') {
            this.newBuiltShow = true
          } else {
            this.newBuiltShow = false
          }
          $(".nav-setting").css("top",(event.clientY-60)+"px").css("left",(event.clientX-66)+"px");
        }
      },
			handleselect: function (a, b) {
			},
      // 二级菜单折叠伸展
      toggle () {
        $(event.target).next().toggle(200)
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
