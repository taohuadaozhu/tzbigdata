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
export default {
    //接收父组件的参数
    props: ['indexvalue'],
    data() {
      return {
        
        datax:[5, 20, 36, 10, 10, 20],
        datay:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      } 
    },

    methods: {
      drawchart:function(event){
        var myChart = echarts.init(document.getElementById('main'+this.indexvalue));
         myChart.setOption({
          tooltip: {},
          xAxis: {
              data: this.datay
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: this.datax
          }]
      });
      this.$emit('drawchart',this.drawchart);
    }
},
 mounted (){
     let app = this;
     setTimeout(function () {
            app.drawchart();
    }, 1000)
    
  }
  };
</script>


