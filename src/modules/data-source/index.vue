<style scoped>

  .container{
      position: absolute;
      left: 100px;
      top: 150px;
      right: 200px;
      bottom: 0;

      overflow: visible;
  }
  .ico-ok{
        background-position: -288px -736px;
    width: 16px;
    height: 16px;
  }
  .ico-cancel{
     background-position: -288px -736px;
    width: 16px;
    height: 16px;
  }
  .edp-icon-wrap{
    cursor: pointer;
  }
  .edit-input{
    width:70%;background:transparent;font-size:13px;
    border:0;border-bottom:1 solid black;
  }
  td
  {
      white-space: nowrap;
  }
  .el-table{
    width:auto;
    min-width:100%;
    max-width:auto;
  }
  td>div{

  }
</style>
<template>
<div class="container">
<el-upload
  class="upload-demo"
  action="http://192.168.31.234:8080/console/batchImport"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过</div>
</el-upload>
<table>
    <tr v-for="user in tableData">
        <td class="text center" @dblclick="editable($event,'name',user)">{{user['name']}}</td>
    </tr>
    </table>

    <el-table
    ref="singleTable"
    :data="tableData"
    stripe
    
    width="auto"
    :current-row-key=2
    :highlight-current-row=true
    :show-header= false
    @row-click ="rowClick">
    <!--<el-table-column
      prop="num"
      width="50">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>-->
    <el-table-column v-for="item in tableTitle"
      prop="item"
      label="姓名"
      min-width="50">
      <template scope="scope" >
        <i class="el-icon-edit" v-show="isEdit===scope.$index&&nowColumn!=scope.column.id" style="cursor:pointer" @click.stop="handleEdit(scope.$index, scope.row, scope.column)" ></i>
        <span v-show="!(isEdit===scope.$index&&nowColumn===scope.column.id)" style="margin-left: 10px">{{ scope.row[item] }}</span>
        <div v-if="isEdit===scope.$index&&nowColumn===scope.column.id">
          <input class="edit-input" type='text' :value="scope.row[item]" id='_editable' >
          <a class="edp-icon-wrap " title="确定" @click.stop="saveEdit()" >y</a>
          <a class="edp-icon-wrap " title="取消" @click.stop="cancelEdit()" >n</a>
        </div>
        
      </template>
    </el-table-column>
    <el-table-column v-for="item in tableTitle"
      prop="item"
      label="姓名"
      min-width="50"
      >
      <template scope="scope" >
        <i class="el-icon-edit" v-show="isEdit===scope.$index&&nowColumn!=scope.column.id" style="cursor:pointer" @click.stop="handleEdit(scope.$index, scope.row, scope.column)" ></i>
        <span v-show="!(isEdit===scope.$index&&nowColumn===scope.column.id)" style="margin-left: 10px">{{ scope.row[item] }}</span>
        <div v-if="isEdit===scope.$index&&nowColumn===scope.column.id">
          <input class="edit-input" type='text' :value="scope.row[item]" id='_editable' >
          <a class="edp-icon-wrap " title="确定" @click.stop="saveEdit()" >y</a>
          <a class="edp-icon-wrap " title="取消" @click.stop="cancelEdit()" >n</a>
        </div>
        
      </template>
    </el-table-column>

    <el-table-column v-for="item in tableTitle"
      prop="item"
      label="姓名"
      min-width="50">
      <template scope="scope" >
        <i class="el-icon-edit" v-show="isEdit===scope.$index&&nowColumn!=scope.column.id" style="cursor:pointer" @click.stop="handleEdit(scope.$index, scope.row, scope.column)" ></i>
        <span v-show="!(isEdit===scope.$index&&nowColumn===scope.column.id)" style="margin-left: 10px">{{ scope.row[item] }}</span>
        <div v-if="isEdit===scope.$index&&nowColumn===scope.column.id">
          <input class="edit-input" type='text' :value="scope.row[item]" id='_editable' >
          <a class="edp-icon-wrap " title="确定" @click.stop="saveEdit()" >y</a>
          <a class="edp-icon-wrap " title="取消" @click.stop="cancelEdit()" >n</a>
        </div>
        
      </template>
    </el-table-column>
    <!--<el-table-column
      prop="address"
      label="地址">
    </el-table-column>-->
  </el-table>

  </div>
</template>
<script>

export default {
    data() {
      return {
        isEdit:0,
        nowColumn:'',
        tableTitle:['num','date','name','address'],
        tableData: [{
          num:0,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          num:1,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄'
        }, {
          num:2,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          num:3,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleEdit(index, row,column) {
        this.nowColumn = column.id;
        console.log(index, row,column);
      },
      saveEdit:function(){
        this.nowColumn='';
      },
      cancelEdit:function(){
        this.nowColumn='';
      },
      rowClick:function(row,event,column){
        this.$refs.singleTable.setCurrentRow(row);
        console.log(column.id);
        this.isEdit = row.num;

        // this.isEdit++;
        // console.log(row);
        // console.log(event);
        // console.log(column);
        // this.$refs.singleTable.setCurrentRow(row);
        // var target=event.target,value=target.innerText;
        // console.log(target);
        // var $tr = target.parentNode.parentNode.childNodes;
        // $.each($tr,function(i,item){
        //   if(i===0){
        //     console.log(item);
        //     $(item).html("<div>表头</div>");
        //   }else{
        //     // $(item).html(target+'<i class="el-icon-edit" @click="edit()">');
        //     // $(item).html("<input type='text' value='" + value + "' id='_editable' style='width:100%;box-sizing:border-box;background:transparent;font-size:13px;color:red;text-align:center'>");
        //   }
        // })

      },

      edit:function(event){

      },
      /*
          e     :事件
          field :字段，用于告诉服务端要更新哪个字段
          user  :列表中某一行数据
        */
      editable:function(e,field,user){
          var that=this;
          that.$editable(e,function(value){
              // 这里做ajax请求
              //如果数据没有被修改这个回调方法不会执行
          });
      }
    }
  }
</script>


