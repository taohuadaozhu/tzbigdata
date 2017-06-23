<style lang="scss" scoped="" type="text/css">

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
    .chart-operate {
    position: absolute;
    z-index: 100;
    top: 20px;
    right: 22px;
    background: white;
}
.edp-icon-wrap {
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
}
.chart-operate .edp-icon-wrap {
    cursor: pointer;
}
.bdp-icon-wrap>.bdp-icon {
    margin-top: -2px;
}
.ico-refresh,.ico-edit,.ico-more,.ico-fullscreen,.ico-ok,.ico-cancel{
    opacity: 1;
    display: inline-block;
        vertical-align: middle;
        background: url(../../assets/svg-sprite.svg);
}
.ico-refresh {
    background-position: -736px -256px;
    width: 16px;
    height: 16px;
}

.ico-edit {
    background-position: -655px -620px;
    width: 16px;
    height: 16px;
}
.ico-more {
    background-position: -528px -720px;
    width: 16px;
    height: 16px;
}
.ico-fullscreen {
    background-position: -511px -620px;
    width: 16px;
    height: 16px;
}
.toolbox{
    width: 100%;
    height: 30px;
    h2{
        float: left;
        margin: 0;
        margin-top: 10px;
        margin-left: 30px;
        font-family: 微软雅黑;
    }
    &>div{
        float: right;
        margin: 15px 15px;
    }
    span{
        opacity: 0.8;
       
        cursor: pointer;
    }
    span:hover{
        opacity: 1;
    }
}
</style>
<template>
<div class="container">
    <div class="toolbox">
        <h2>二级标题</h2>
        <div @click="exportChart"><span>导出PDF</span></div>
        <div  @click="openAddChartPanel"><span>新建图表</span></div>
        
        
    </div>
  
  
  <div id="charts">
<div class="gridster">
    <ul class="grids" >
      <li v-for="(item,index) in itemPosition" class="grid gs-w" @mouseover="showOper(index)" @mouseout="hideOper(index)"  :indexvalue ="index"   :data-row="item.row" :data-col="item.colu" :data-sizex="item.sizex" :data-sizey="item.sizey">
        <header>drag here</header>
        <div class="grid-item">
            <!-- 这里chart打算用子组件-->
            <childChart :indexvalue="index" ref="child"></childChart>
        </div>
        <div class="chart-operate" v-show="showOperate&&focusIndex === index">
            <a class="cursor-pointer edp-icon-wrap" @click="refreshChart(index)" title="刷新图表">
                <i class="edp-icon ico-refresh"></i>
            </a>
            <a class="cursor-pointer edp-icon-wrap" @click="toEdit(index)" title="编辑">
                <i class="edp-icon ico-edit"></i>
            </a>
            <a class="cursor-pointer edp-icon-wrap" @click="gotoBigChart(index)" title="全屏">
                <i class="edp-icon ico-fullscreen"></i>
            </a>
            <a class="cursor-pointer edp-icon-wrap" @click="exportChart(index)" title="更多">
                <i class="edp-icon ico-more"></i>
            </a>
        </div>
      </li>
    </ul>

</div>
  </div>
    <el-dialog title="添加图表" :visible.sync="dialogTableVisible"
    :modal-append-to-body=false>
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
// require('../../../static/js/html2canvas.js')
// require('../../../static/js/jspdf.debug.js')

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
          options: [{
          value: '选项1',
          label: 'tomcat7'
        }, {
          value: '选项2',
          label: 'tomcat8'
        }],
        value10:[],
          msg:"123",
          dialogTableVisible:false,
          filterText: '',
          beforeX:0,
          beforeY:0,
          showOperate:false,
          focusIndex:0,
          itemPosition:[
            {row:"1",colu:"1",sizex:"4",sizey:"3"},
            {row:"1",colu:"5",sizex:"3",sizey:"2"},
            {row:"3",colu:"1",sizex:"2",sizey:"2"},
            {row:"3",colu:"2",sizex:"1",sizey:"2"},
            {row:"3",colu:"2",sizex:"1",sizey:"2"}
          ]
      }
        },
  methods: {
      openAddChartPanel(){
        document.getElementById("addChartPanel").style.display="block";
        document.getElementById("vmodal").style.display="block";
      },
    showOper: function(index){
        this.focusIndex = index;
        this.showOperate=true;
    },
    hideOper: function(index){
        this.focusIndex = index;
        this.showOperate=false;
    },
    goback:function (params) {
          this.$router.back(-1);
    },
     getSelect: function () {
            console.log(this.value10)
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
    exportChart:function(index){
         html2canvas($('#charts'), {  
        height:5000,  
        onrendered: function(canvas) {           
            var imgData = canvas.toDataURL('img/notice/png');  
            var doc = new jsPDF('p', 'px','a3');  
            //第一列 左右边距  第二列上下边距  第三列是图片左右拉伸  第四列 图片上下拉伸  
            doc.addImage(imgData, 'PNG', -9, 0,650,1500);  
            doc.addPage();  
            doc.addImage(imgData, 'PNG', -9, -900,650,1500);  
            doc.save('test.pdf');  
        }  
    });  
        // bus.$emit('exportChart', index);
    },
    refreshChart: function(index){
        bus.$emit('drawchart', index);
    },
    toEdit(index){
        this.$router.push({name:'editChart', params:{index:index}});
    },
    gotoBigChart:function(index){
        this.$router.push({name:'bigChart', params:{index:index}});
    },
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
                    //vue是数据驱动的，不应该从dom中取数据，但gridster是jquery插件，返回jquery对象，这里应该还有可以改变的方法
                    //拖动后应保存到localStorage
                   bus.$emit('drawchart', $widget.attr("indexvalue"));
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


