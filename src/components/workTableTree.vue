<style lang="scss" scoped="" type="text/css">

  .container{
    width:100%;
    height: 100%;
    background-color: #fff;
  }
  .chart-type-icon.C240, .chart-type a.disabled .C240 {
    background-image: url(../assets/simples.png);
  }
  .chart-type-icon.C240 {
      background-repeat: no-repeat;
  }
  .chart-type-icon.C240 {
      background-position: -1058px -420px;
  }
  .tab{
    padding: 15px;
    font-weight: bold;
    border-bottom: 1px solid rgba(0,0,0,.1);
    i{
      float: right;
    }
  }
  .tab-c{
    padding: 15px 20px;
    p{
      margin-top: 10px;
    }
    input[type="button"]{
      margin-top: 15px;
      margin-right: 20px;
    }
  }
  .tab-h{
    width: 100%;
    height: 35px;
    div{
      float: left;
      margin: 0 5px;
      border: 1px solid #dde1e3;
      width: 80px;
      height: 35px;
    }
  }
  .tab-t{
    width: 100%;

    .tree-con{
      width: 100%;
      height: 200px;
      max-height: 200px;
      border: 1px solid #d1dbe5;
      overflow: auto;
    }
  }
</style>
<template>
<div class="container">
  <div class="tab"><span>添加图表</span><i @click="closePanel" class="el-icon-close"></i></div>
  <div class="tab-c">
      <p>选择图表类型</p>
      <div class="tab-h">
        <div ><i class="chart-type-icon C240"></i><span>普通图表</span></div> 
        <div ><i class="chart-type-icon C240"></i><span>经纬度地图</span></div>
      </div>
      <div class="tab-t">
        <p>选择工作表</p>
        <input type="text"  placeholder="输入关键字进行过滤"
          v-model="filterText">
        <div class="tree-con">
          <el-tree
            class="filter-tree"
            :data="data2"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree2">
          </el-tree>
        </div>  
      </div>
        
        <input type="button" @click="toEdit" value="确定">
        <input type="button"  value="取消">
      </div>
  </div>
</div>
</template>
<script>
export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      closePanel(){
        document.getElementById("addChartPanel").style.display="none";
        document.getElementById("vmodal").style.display="none";
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      toEdit(){
          this.$router.push('/nav/dashboard/editChart');
      }

    },
    mounted(){
      // 此处问题：element ui中 tree.css的sass文件内font-size:14px，是写死的，没办法改，其他同
      $(".el-tree-node__label").css("font-size","12px");
      $(".el-tree-node__content").css("height","25px");
      $(".el-tree-node__content").css("line-height","25px");
    },
    data() {
      return {
        filterText: '',
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1'
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>


