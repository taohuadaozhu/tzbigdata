<style scoped>

  .container{
      
    width:100%;
    height: 100%;
  }
</style>
<template>
<div class="container" :id="'main'+indexvalue">{{indexvalue}}
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
        imageUrl:'',
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
      this.imageUrl= myChart.getDataURL()
      

    },
    exportChart:function(index){
      var doc = new jsPDF('p', 'px','a3');  
      //第一列 左右边距  第二列上下边距  第三列是图片左右拉伸  第四列 图片上下拉伸  
      doc.addImage(imageUrl, 'PNG', -9, 0,650,1500);  
      doc.save('test.pdf'); 
    }

},
 mounted (){
     let app = this;
     setTimeout(function () {
            app.drawchart(app.indexvalue);
    }, 1000)
    
  },
  created(){
    var app = this;
    bus.$on('drawchart',(index) =>{
        app.drawchart(index);
    });
    bus.$on('exportChart',(index) =>{
        app.exportChart(index);
    });
  }
  };
</script>


