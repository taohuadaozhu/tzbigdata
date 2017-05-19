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
</style>
<template>
<div class="container">
 
  <el-button class="newbtn" @click="dialogTableVisible = true">新建图表</el-button>
<div>this is the first echarts</div>

<div id="charts">
    <div id="main"  :style="{width:'600px',height:'400px'}"></div>
</div>
<el-dialog title="添加图表" :visible.sync="dialogTableVisible">
        <template>
          <workTableTree></workTableTree>
        </template>
    </el-dialog>
  </div>
</template>
<<script>
import echarts from 'echarts'
import workTableTree from '../../components/workTableTree'
export default {
  components: {
      workTableTree
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
         filterText: ''
            }
        },
        mounted (){
            var myChart = echarts.init(document.getElementById('main'));
            myChart.setOption({
                title: { text: 'ECharts 入门示例' },
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


