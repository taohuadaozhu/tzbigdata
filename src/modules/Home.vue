
<style lang="scss" scoped="" type="text/css">
 .main-wrapper {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .top-menu-item {
    color: #fff;
    float: right;
    height: 70px;
    margin-right: 35px;
    font-size: 16px;
    padding: 0 16px;
  }

  .top-menu-item:hover {
    background-color: rgb(90, 197, 232);
  }
  .container{
      position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
  }
  #vmodal {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
}
#addChartPanel{
  position: fixed;
  display: none;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .addchart-box{
      position: absolute;
      top:20%;
      left:35%;
      width:400px;
      height:450px;
    }
}
#addChartPanel::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
}
</style>
<template>
<el-row class="container">
  <div class="main-wrapper main-sidebar-l" :class="{'sidebar-mini':menuIsFold}">
    <Cnav></Cnav>
    <router-view></router-view>
    
   <div id="addChartPanel" style="z-index: 2001;">
      <div class="addchart-box">
         <workTableTree></workTableTree>
      </div>
   </div>
   <div id="vmodal" style="z-index: 2000;"></div>
  </div>
  </el-row>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import CMenu from 'components/CMenu'
  import CMain from 'components/CMain'
  import Cnav from 'components/Cnav'
  import workTableTree from 'components/workTableTree'

  export default {
    computed: mapGetters([
      'menuIsFold',
      'tokens'
    ]),
    components: {
      CMenu,
      CMain,
      Cnav,
      workTableTree
    },
    watch: {
      tokens: function (val) {
        console.log(val+'12345');
        if (val == '') {
          this.$router.push('/login');
        }
      }
    },
    methods: mapActions([
      'logout'
    ])
  }
</script>
