<style scoped>
* {
        margin: 0;
        padding: 0;
    }

    .leftside {
        position: absolute;
        left:0;
        width: 200px;
        float: left;
        background: #E8EBED;
        height: 100%;
        overflow: hidden;
    }

    .rightside {
        display: none;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 200px;
        float: right;
        background: lightblue;
        height: 100%;
        overflow: hidden;
    }

    .middle {
        margin-right: 10px;
        margin-left: 202px;
        height: 100%;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1), 0 10px 24px 0 rgba(0,0,0,.06);
        background-color: #F3F5F6;
    }
  .container{
    width:100%;
    height: 100%;
  }
  .field-list{
      list-style: none;
  }
  .field-list li{
      margin: 10px 10px;
      padding: 1px 8px 1px 1px;
      color: rgba(10,18,32,.64);
      font-size: 12px;
      cursor: pointer;
  }
  .field-list li:hover{
      color: rgba(10,18,32,1);
  }
  .field-list li div{
        height: 32px;
        line-height: 32px;
  }
  .chart-args {
    position: relative;
    z-index: 100;
    min-width: 794px;
    padding: 4px 16px 0;
}
  .row-axis{
          position: relative;
    padding: 1px 0 6px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .drag-target {
    padding-left: 2px;
}
  .drag-target-inner {
    min-width: 100px;
    min-height: 34px;
    padding-left: 65px;
}
.chart-args .drag-target-inner.xAxis {
    padding-right: 140px;
}
.chart-args .axis-head{
    float: left;
    width: 65px;
    margin-top: 11px;
    height: 29px;
}
.axis-head span{
    float: left;
}
.drag-target-list{
    height: 35px;
     list-style: none;
}
.drag-target-list li{
    float:left;
    margin: 0 10px 0 10px;
   
}
.chart-main {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1), 0 10px 24px 0 rgba(0,0,0,.06);
    background-color: #F3F5F6;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-x: auto;
    min-width: 450px;
    height: 100%;
    z-index: 999;
}

.chart-data-info {
    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,.06);
    padding: 12px 16px 12px 0;
    position: relative;
    margin-left: 16px;
}
.leftside .h5-title{
    height: 32px;
    line-height: 32px;
    margin: 0 -16px;
    padding: 0 16px;
}
.chart-data-info p{
    height: 30px;
    line-height: 32px;
    white-space: nowrap;
}
.left-title{
 height: 32px;
    line-height: 32px;
    padding: 5px 16px;
}
.chart-left-side {
    position: absolute;
    float:left;
    top: 93px;
    bottom: 0;
    left: 210px;
    width: 175px;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid rgba(0,0,0,.1);
}
.filter-layer {
    width: 100%;
    padding: 16px 14px 12px;
    overflow: hidden;
    position: relative;
}
.filter-layer .hd {
    padding-bottom: 10px;
}
.filter-layer .bd {
    white-space: normal;
}
.chartBox{
    position: absolute;
    float:left;
    top: 143px;
    right: 225px;
    bottom: 10px;
    left: 385px;
    min-width: 420px;
    min-height: 389px;
    background: #fff;
    border-left: 1px solid rgba(0,0,0,.1);
}
i {
    font-style: normal;
}
.chart-type-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: 0 0;
}
.chart-type-icon.C240, .chart-type a.disabled .C240 {
    background-image: url(../../assets/simples.png);
}
.chart-type-icon.C240 {
    background-repeat: no-repeat;
}
.chart-type-icon.C240 {
    background-position: -1058px -420px;
}
.chart-right-side{
    position: absolute;
    float:left;
    top: 93px;
    bottom: 0;
    right: 0;
    width: 175px;
    overflow: hidden;
}
</style>
<template>
<div class="chart-main">
     <i class="el-icon-d-arrow-left" @click="goback"></i>
<div class="leftside">
    <div class="chart-data-info">
        <h5 class="h5-title" >所用工作表</h5>
        <p class="table-name">工作表名称</p>
    </div>
    
    <h5 class="left-title">包含字段</h5>
    <ul class="field-list" >
        <li  v-for="item in items ">
            <div draggable="true" @dragstart='drag($event)' class=""><i class="el-icon-edit"></i><span>{{item.name}}</span></div>
        </li>
    </ul>

</div>

<div class="rightside"></div>
<div class="middle">
    <div class="chart-args">
        <div class="row-axis">
            <span class="axis-head">维度</span>
            <div class="drag-target">
                <div class="drag-target-inner">
                    <ul class="drag-target-list" @drop='drop($event)' @dragover='allowDrop($event)'></ul>
                </div>
            </div>
        </div>
        <div class="row-axis">
            <span class="axis-head">数值</span>
            <div class="drag-target">
                <div class="drag-target-inner">
                    <ul class="drag-target-list" @drop='drop($event)' @dragover='allowDrop($event)'></ul>
                </div>
            </div>
        </div>
    </div>
    <div class="chart-left-side">
        <div class="filter-layer">
            <div class="hd"><p>添加条件筛选数据</p></div>
            <div class="bd">
                <ul class="row-y "></ul>
            </div>
        </div>
    </div>
    <div class="chartBox">
        <div id="chartBox" style="width:100%;height:100%;"></div>
    </div>
    <div class="chart-right-side">
        <div class="filter-layer">
            <div class="hd"><p>更换图表类型</p></div>
            <div class="bd">
                <ul class="row-y ">
                    <li><a><i class="chart-type-icon C240"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  </div>
</template>
<<script>
import echarts from 'echarts'

let dom = null
export default {
   data (){
            return {
                msg:"123",
                items:[{id:'name',name:'名称'},
                {id:'direction',name:'导演'},
                {id:'showtime',name:'上映时间'},
                {id:'showdays',name:'上映天数'},
                {id:'marks',name:'评价人数'},
                {id:'goodmarks',name:'好评人数'}]
            }
        },
        methods: {
            goback:function (params) {
                 this.$router.back(-1);
            },
            drag:function(event){
                dom = event.currentTarget;
            },
            drop:function(event){
                event.preventDefault();
                $(dom).parent().append($(dom).clone());
                let domli =document.createElement('li');
                $(domli).css("float","left").css("margin-left","15px");
                domli.appendChild(dom);
                event.target.appendChild(domli);
            },
            allowDrop:function(event){
                event.preventDefault();
            },
        },
        mounted (){
            var myChart = echarts.init(document.getElementById('chartBox'));
            myChart.setOption({
                title: { text: '...' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
}
</script>


