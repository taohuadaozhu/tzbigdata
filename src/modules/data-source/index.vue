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
    width:150px;background:transparent;font-size:13px;
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
    table-layout: auto;
  }
 .el-upload__tip p :hover{
   color: red;
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
    <div slot="tip" class="el-upload__tip"><span>只能上传excel文件，且不超过</span><p> for hover test</p></div>
  </el-upload>
  <table>
    <tr v-for="(data,index) in tableData1" @click ="rowClick(index)">
      <td><div>{{index+1}}</div>
      <div v-show="editTr===index">表头</div>
      </td>
        <td class="text center" v-for="(item,indexTd) in data" @mouseover ="tdMouseOver(indexTd)">
         
          <div v-show="!(editTr===index&&editTd===indexTd)" style="margin-left: 10px;float:left;">{{item}}</div>
          <div ></div>

          <i class="el-icon-edit"  v-show="editTr===index&&editTd!=indexTd&&overTd===indexTd" style="cursor:pointer;float:right" @click.stop="handleEdit(indexTd)" ></i>
          <div  v-if="editTr===index&&editTd===indexTd">
            <input class="edit-input" type='text' :value="item" id='_editable' >
            <a class="edp-icon-wrap " title="确定" @click.stop="saveEdit()" >y</a>
            <a class="edp-icon-wrap " title="取消" @click.stop="cancelEdit()" >n</a>
          </div>
        </td>
    </tr>
  </table>
  </div>
</template>
<script>

export default {
    data() {
      return {
        editTr:0,
        editTd:-1,
        overTd:-1,
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
        tableData1:[
        [
          "hehe0",
          "hehe1",
          "hehe2"
        ],
        [
          "hehe0",
          "hehe1",
          "hehe2"
        ],
        [
          "titlehehe0上海市普陀区金沙江路 ",
          "titlehehe1",
          "titlehehe2上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄"
        ]
      ],
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
      tdMouseOver(index) {
        this.overTd =index;
      },
      handleEdit(index) {
        this.editTd = index;
      },
      saveEdit:function(){
        this.editTd=-1;
        this.overTd=-1;
      },
      cancelEdit:function(){
        this.editTd=-1;
        this.overTd=-1;
      },
      rowClick:function(index){
        // this.$refs.singleTable.setCurrentRow(row);
        // console.log(column.id);
        this.editTr = index;

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


