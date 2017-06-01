<style scoped>

  .container{
      
    width:100%;
    height: 100%;
  }
  .big-chart{
      position: absolute;
      width:cal(100%-20px);
      background: red;
  }
</style>
<template>
<div class="container" >
    <div class="big-chart" :id="'main'+indexvalue"></div>
</div>
</template>
<script>
import echarts from 'echarts'
import Vue from 'vue'
import { bus } from './bus.vue'
export default {
    //接收父组件的参数
    props: ['indexvalue'],
    data() {
      return {
        
        datay:[5, 20, 36, 10, 10, 20],
        datax:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      } 
    },

    methods: {
      drawchart:function(index){
        var myChart = echarts.init(document.getElementById('main'+index));
         myChart.setOption({
          tooltip: {},
          xAxis: {
              data: this.datax
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: this.datay
          }]
      });
    }
},
 mounted (){
     let app = this;
     setTimeout(function () {
            //app.drawchart(app.indexvalue);
    }, 1000)
    
  },
  created(){
    var app = this;
    bus.$on('drawchart',(index) =>{
        app.drawchart(index);
    });
  }
  };
</script>


