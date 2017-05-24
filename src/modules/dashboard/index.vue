<style scoped>
.el-row {
    margin-bottom: 20px;
    
  }
  .el-row last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .container{
    width:100%;
    height: 100%;
  }
  #charts{
    position: absolute;
    overflow-y: scroll;
    overflow-x: auto;
    padding: 0 24px 8px;
    top: 56px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .grids{
    height: 100%;
    list-style: none;
    box-sizing: inherit;
    position: relative;
  }
  .grid{
    position: absolute;
    box-sizing: border-box;
    list-style: outside none none;
    transition: box-shadow .3s ease-in-out;
    background: #fff;
  }
  
  .grid-item{
    position: absolute;
    top:40px;
    bottom:10px;
    right: 10px;
    left:10px;
    min-width: 130px;
    min-height: 60px;
  }
  .gridster{
      height: 100%;
  }
  .gridster ul{height: 100%;}
  .gridster li header {
      position: absolute;
       top:10px;
    bottom:10px;
    right: 10px;
    left:15px;
    height:30px;
        background: #999;
        display: block;
        font-size: 20px;
        line-height: normal;
        padding: 4px 0 6px;
        cursor: move;
    }
</style>
<template>
<div class="container">
  <el-button class="newbtn" @click="dialogTableVisible = true">新建图表</el-button>
  <div id="charts">
<div class="gridster">
    <ul class="grids" >
      <li v-for="(item,index) in itemPosition" class="grid gs-w"  :indexvalue ="index" ref="child"  :data-row="item.row" :data-col="item.colu" :data-sizex="item.sizex" :data-sizey="item.sizey">
        <header>drag here</header>
        <div class="grid-item">
            <!-- 这里chart打算用子组件-->
            <childChart :indexvalue="index"></childChart>
        </div>
      </li>
    </ul>

</div>
  </div>
    <el-dialog title="添加图表" :visible.sync="dialogTableVisible">
        <template>
          <workTableTree></workTableTree>
        </template>
    </el-dialog>
  </div>
</template>
<script>

import workTableTree from '../../components/workTableTree'
import childChart from './chart.vue'
import { bus } from './bus.vue'
let dom = null

export default {
  components: {
      workTableTree,
      childChart
    },
     watch: {
      filterText(val) {
        //this.$refs.tree2.filter(val);
      }
    },
   data (){
      return {
          msg:"123",
          dialogTableVisible:false,
          filterText: '',
          beforeX:0,
          beforeY:0,
          
          itemPosition:[
              {row:"1",colu:"1",sizex:"4",sizey:"3"},
          {row:"1",colu:"5",sizex:"3",sizey:"2"},
          {row:"3",colu:"1",sizex:"2",sizey:"2"},
          {row:"3",colu:"2",sizex:"1",sizey:"2"},
          {row:"3",colu:"2",sizex:"1",sizey:"2"}]
      }
        },
  methods: {
      getDraw:function(drawfuc){
          var child = this.$refs.child[0]; //获取子组件实例
          console.log(child);
          child.drawchart();
      },
    goback:function (params) {
          this.$router.back(-1);
    },
    //this three methods can drag doms but cant sort them 
    // drag:function(event){
    //     dom = event.currentTarget;
    //    this.beforeX =event.clientX;
    //    this.beforeY =event.clientY;
    // },
    // drop:function(event){
    //     event.preventDefault();
    //     let xx = Number($(dom).css("top").replace("px",""));
    //     let yy = Number($(dom).css("left").replace("px",""));
    //     $(dom).css("top",xx+(event.clientY-this.beforeY)+"px");
    //     $(dom).css("left",yy+(event.clientX-this.beforeX)+"px");
    //     console.log(this.itemPosition);
    // },
    // allowDrop:function(event){
    //     event.preventDefault();
    // },
    
    getGridster:function(event){
        var app = this;
        var  gridster;
        gridster = $(".gridster ul").gridster({
            widget_base_dimensions: [150, 100],
            widget_margins: [10, 10],
            draggable: {
                handle: 'header'
            },
            resize:{
                enabled:true,
                max_size:[10,7],
                stop:function(e, ui, $widget) {
                   console.log($widget);
                   bus.$emit('drawchart', '0');
                }
            }
        }).data('gridster');
    }
},
  mounted (){
    this.getGridster();
  }
}
</script>


