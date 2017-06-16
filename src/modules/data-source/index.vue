<style lang="scss" scoped="" type="text/css">
.container {
  position: absolute;
  left: 100px;
  overflow: visible;
}

ul {
  margin: 0;
  padding: 0;
}

.ico-ok {
  background-position: -288px -736px;
  width: 16px;
  height: 16px;
}

.ico-cancel {
  background-position: -288px -736px;
  width: 16px;
  height: 16px;
}

.edp-icon-wrap {
  cursor: pointer;
}

.edit-input {
  width: 150px;
  background: transparent;
  font-size: 13px;
  border: 0;
  border-bottom: 1 solid black;
}

td {
  white-space: nowrap;
}

table {
  width: auto;
  min-width: 100%;
  max-width: auto;
  table-layout: auto;
  td {
    padding: 4px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
  }
}

.page-upload .normal-content {
  padding: 8px 24px 16px;
  height: 100%;
}

.el-upload__tip p:hover {
  color: red;
}

.tab-list-wrap {
  box-shadow: 0 -1px 0 0 #DADDDF inset;
  margin: 0 -24px -3px;
  padding: 0 16px 0 32px;
  height: 30px;
  bottom: -1px;
  .tab-wrap {
    display: inline-block;
    position: relative;
    height: 28px;
    bottom: -1px;
    padding: 0 8px;
    margin-left: -8px;
    overflow: hidden;
    cursor: pointer;
    .tab-left {
      position: absolute;
      left: 0;
      top: -1px;
      width: 0;
      height: 0;
      border: solid 15px transparent;
      border-width: 15px 4px;
      z-index: 3;
      border-color: transparent;
      border-right-color: #DADDDF;
      border-bottom-color: #DADDDF;
    }
    .tab-left::before {
      content: "";
      display: block;
      position: absolute;
      left: -3px;
      top: -15px;
      width: 0;
      height: 0;
      border: solid 15px transparent;
      border-width: 15px 4px;
      z-index: 3;
    }
    .tab-left::before {
      border-color: transparent;
      border-right-color: #fff;
      border-bottom-color: #fff;
    }
    .tab-content {
      height: 29px;
      line-height: 28px;
      width: 100px;
      background-color: #fff;
      border-top: solid 1px #DADDDF;
      color: rgba(10, 18, 32, .64);
    }
    .tab-active {
      background-color: #ECEFF1;
      border-top: solid 1px #DADDDF;
      color: #5182E4;
    }
    .tab-right {
      border-color: transparent;
      border-left-color: #DADDDF;
      border-bottom-color: #DADDDF;
    }
    .tab-right {
      position: absolute;
      right: 0;
      top: -1px;
      width: 0;
      height: 0;
      border: solid 15px transparent;
      border-width: 15px 4px;
      z-index: 1;
      border-color: transparent;
      border-left-color: #DADDDF;
      border-bottom-color: #DADDDF;
    }
    .tab-right::after {
      content: "";
      display: block;
      position: absolute;
      right: -3px;
      top: -15px;
      width: 0;
      height: 0;
      border: solid 15px transparent;
      border-width: 15px 4px;
      z-index: 2;
      border-color: transparent;
      border-left-color: #fff;
      border-bottom-color: #fff;
    }
  }
  .tab-wrap-active {
    display: inline-block;
    position: relative;
    height: 28px;
    bottom: -1px;
    padding: 0 8px;
    margin-left: -8px;
    overflow: hidden;
    cursor: pointer;
    .tab-left {
      position: absolute;
      left: 0;
      top: -1px;
      width: 0;
      height: 0;
      border: solid 15px transparent;
      border-width: 15px 4px;
      z-index: 3;
      border-color: transparent;
      border-right-color: #DADDDF;
      border-bottom-color: #DADDDF;
    }
    .tab-left::before {
      content: "";
      display: block;
      position: absolute;
      left: -3px;
      top: -15px;
      width: 0;
      height: 0;
      border: solid 15px transparent;
      border-width: 15px 4px;
      z-index: 3;
    }
    .tab-left::before {
      border-color: transparent;
      border-right-color: #DADDDF;
      border-bottom-color: #DADDDF;
    }
    .tab-content {
      height: 29px;
      line-height: 28px;
      width: 100px;
      background-color: #DADDDF;
      border-top: solid 1px #DADDDF;
      color: #5182E4;
    }

    .tab-right {
      border-color: transparent;
      border-left-color: #DADDDF;
      border-bottom-color: #DADDDF;
    }
    .tab-right {
      position: absolute;
      right: 0;
      top: -1px;
      width: 0;
      height: 0;
      border: solid 15px transparent;
      border-width: 15px 4px;
      z-index: 4;
      border-color: transparent;
      border-left-color: #DADDDF;
      border-bottom-color: #DADDDF;
    }
    .tab-right::after {
      content: "";
      display: block;
      position: absolute;
      right: -3px;
      top: -15px;
      width: 0;
      height: 0;
      border: solid 15px transparent;
      border-width: 15px 4px;
      z-index: 2;
      border-color: transparent;
      border-left-color: #DADDDF;
      border-bottom-color: #DADDDF;
    }
  }
}

.nowrap {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.el-step {
  width: 300px;
}

.page-content {
  margin-top: 50px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, .06), 0 10px 12px 0 rgba(170, 182, 206, .15);
  .upload-content {
    margin-left: 80px;
  }
}
</style>
<template>
  <div class="container">
    <el-steps :space="100" :active="pageActive">
      <el-step title="上传文件" icon="upload" style="width:300px;"></el-step>
      <el-step title="数据预览与编辑" icon="edit" style="width:300px;"></el-step>
      <el-step title="保存数据源" icon="document"></el-step>
    </el-steps>
    <div class="page-content" v-show="pageActive===1">
      <!--action="http://192.168.31.234:8080/file/upload"-->
      <div class="upload-content">
        <el-upload class="upload-demo" accept=".xls,.xlsx" :on-success="handelSucess" :on-error="handelError" drag action="http://localhost:8080/file/upload" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">请上传excel文件，且不超过10M</div>
        </el-upload>
      </div>
    </div>
    <div class="page-content" v-if="pageActive===2">
      <div class="normal-content clearfix">
        <p class="line-height-32 ng-binding">当前选中的表头为第
          <span class="a-with-color ng-binding">3</span> 行，如不符合预期，可点击将你需要的数据行指定为表头和设置表头类型.</p>
        <p class="line-height-32 ng-binding">表头前的数据，将不会保留</p>
        <div class="tab-list-wrap">
          <div v-for="(item,index) in sheetDataSelect" :class="isTagActive===index? 'tab-wrap-active':'tab-wrap'" @click="changeTag(index)">
            <div class="tab-left"></div>
            <div class="tab-content" :title="sheetData[item].name">{{sheetData[item].name}}</div>
            <div class="tab-right"></div>
          </div>
        </div>
        <table>
          <tr v-for="(data,index) in tableData1" @click="rowClick(index)">
            <td>
              <div>{{index+1}}</div>
              <div v-show="editTr===index">表头</div>
            </td>
            <td class="text center" v-for="(item,indexTd) in data" @mouseover="tdMouseOver(indexTd)">
  
              <div v-show="!(editTr===index&&editTd===indexTd)" style="margin-left: 10px;float:left;">{{item}}</div>
              <div></div>
  
              <i class="el-icon-edit" v-show="editTr===index&&editTd!=indexTd&&overTd===indexTd" style="cursor:pointer;float:right" @click.stop="handleEdit(indexTd)"></i>
              <div v-if="editTr===index&&editTd===indexTd">
                <input class="edit-input" type='text' :value="item" id='_editable'>
                <a class="edp-icon-wrap " title="确定" @click.stop="saveEdit()">y</a>
                <a class="edp-icon-wrap " title="取消" @click.stop="cancelEdit()">n</a>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="page-content" v-show="pageActive=== 3">
      <table>
        <thead>
          <tr>
            <td>数据表</td>
            <td>所属文件夹</td>
            <td>分类标签</td>
            <td>备注</td>
            <td>是否公开</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sheetData">
            <td>
              <div>{{item.name}}</div>
            </td>
            <td>
              <el-select v-model="value" placeholder="根目录">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </td>
            <td>
              <input type="text" class="t-input">
            </td>
            <td>
              <textarea rows="2" style="width:250px;"></textarea>
            </td>
            <td>
              <el-switch v-model="value" on-text="公开" off-text="">
              </el-switch>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="padding:20px;">
      <el-button type="text" v-show="pageActive!=1" @click="goback()">上一步</el-button>
      <el-button @click="gonext()" style="margin-left:20px;" type="primary" v-show="pageActive!=1">{{pageActive===2?'下一步':'保存'}}</el-button>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      options: [{
        value: 'root',
        label: '根目录'
      }, {
        value: 'menu1',
        label: '菜单一'
      }, {
        value: 'menu2',
        label: '菜单二'
      }, {
        value: 'menu3',
        label: '菜单三'
      }],
      value: 'root',
      isTagActive: 0,
      sheetData: [
        { name: 'sheet1', id: '0', isempty: false },
        { name: 'sheet2', id: '1', isempty: false },
        { name: 'sheet3', id: '2', isempty: true },
        { name: 'sheet4', id: '3', isempty: false }],
      sheetDataSelect: [0, 1, 2, 3],
      pageActive: 1,
      editTr: 0,
      editTd: -1,
      overTd: -1,
      buttonText: '下一步',
      tableTitle: ['num', 'date', 'name', 'address'],
      excelData: {
        "status": "200",
        "errorCode": null,
        "errorMsg": null,
        "extraMsg": null,
        "list": [
          {
            "name": "sheet2",
            "col_offset": null,
            "column": null,
            "auto_col_offset": null,
            "auto_row_offset": null,
            "row_offset": 2,
            "row": null,
            "data": [
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
                "titlehehe0",
                "titlehehe1",
                "titlehehe2"
              ]
            ],
            "schema": [
              {
                "type": 1,
                "name": "titlehehe0",
                "empty": false
              },
              {
                "type": 1,
                "name": "titlehehe1",
                "empty": false
              },
              {
                "type": 1,
                "name": "titlehehe2",
                "empty": false
              }
            ]
          },
          {
            "name": "sheet2",
            "col_offset": null,
            "column": null,
            "auto_col_offset": null,
            "auto_row_offset": null,
            "row_offset": 2,
            "row": null,
            "data": [
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
                "titlehehe0",
                "titlehehe1",
                "titlehehe2"
              ]
            ],
            "schema": [
              {
                "type": 1,
                "name": "titlehehe0",
                "empty": false
              },
              {
                "type": 1,
                "name": "titlehehe1",
                "empty": false
              },
              {
                "type": 1,
                "name": "titlehehe2",
                "empty": false
              }
            ]
          },
          {
            "name": "sheet2",
            "col_offset": null,
            "column": null,
            "auto_col_offset": null,
            "auto_row_offset": null,
            "row_offset": 2,
            "row": null,
            "data": [
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
                "titlehehe0",
                "titlehehe1",
                "titlehehe2"
              ]
            ],
            "schema": [
              {
                "type": 1,
                "name": "titlehehe0",
                "empty": false
              },
              {
                "type": 1,
                "name": "titlehehe1",
                "empty": false
              },
              {
                "type": 1,
                "name": "titlehehe2",
                "empty": false
              }
            ]
          }
        ]
      },
      tableData1: [
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
      fileList: []
    };
  },
  computed: {
    nextButtonText: function () {
      if (this.pageActive === 2) {

      }
    }
  },
  methods: {
    changeTag(index, obj) {
      this.isTagActive = index;
    },
    openErrorM() {
      this.$message('上传失败了！');
    },
    goback() {
      this.pageActive = this.pageActive - 1;
    },
    gonext() {
      this.pageActive = this.pageActive + 1;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handelSucess(response, file, fileList) {
      console.log(response);
      this.openChooseSheets();
      this.pageActive = 2;
      console.log(file, fileList);
    },
    handelError(err, file, fileList) {
      this.openChooseSheets();

      this.openErrorM();
      console.log(err);
      // console.log(file, fileList);
    },
    tdMouseOver(index) {
      this.overTd = index;
    },
    handleEdit(index) {
      this.editTd = index;
    },
    saveEdit: function () {
      this.editTd = -1;
      this.overTd = -1;
    },
    cancelEdit: function () {
      this.editTd = -1;
      this.overTd = -1;
    },
    rowClick: function (index) {
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
    openChooseSheets() {
      let allchecked = false;
      const h = this.$createElement;
      this.$msgbox({
        title: '请选择需要的数据源',
        message: h('div', [h('div', [
          h('input',
            {
              attrs: {
                type: 'checkbox',
                id: 'ckall',
                checked: allchecked
              },
              on: {
                click: function (event) {
                  let obj = document.getElementById("ckall");
                  var sonSelect = document.getElementsByName("ckSheetfalse");

                  for (var i = 0; i < sonSelect.length; i++) {
                    sonSelect[i].checked = obj.checked;
                  }
                }
              },
            }
          ),
          h('label',
            {
              attrs: {
                for: 'ckall'
              }
            },
            '全选'
          )
        ]
        ),
        h('ul', this.sheetData.map(function (item, index) {
          return h('li', [
            h('input',
              {
                attrs: {
                  type: 'checkbox',
                  id: 'ck' + index,
                  name: 'ckSheet' + item.isempty,
                  disabled: item.isempty
                },
                on: {
                  click: function (event) {
                    let obj = document.getElementById('ck' + index);
                    if (obj.checked === false) {
                      document.getElementById("ckall").checked = false;
                    }
                  }
                }
              }
            ),
            h('label',
              {
                attrs: {
                  for: 'ck' + index
                }
              },
              [h('span', '' + item.name), h('span', { style: { color: 'red', marginLeft: '5px' } }, item.isempty === true ? '(表内为空)' : '')]
            )
          ])
        }),
          {
            style: {
              padding: 0
            }
          }
        )]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            var sonSelect = document.getElementsByName("ckSheetfalse");
            this.sheetDataSelect = [];
            for (var i = 0; i < sonSelect.length; i++) {
              if (sonSelect[i].checked === true) {
                this.sheetDataSelect.push(sonSelect[i].id.replace("ck", ""));
              }

            }

            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 1000);
          } else {
            done();
          }
        }
      }).then(action => {
        this.pageActive = 2;
      });
    },
    edit: function (event) {

    },
    /*
        e     :事件
        field :字段，用于告诉服务端要更新哪个字段
        user  :列表中某一行数据
      */
    editable: function (e, field, user) {
      var that = this;
      that.$editable(e, function (value) {
        // 这里做ajax请求
        //如果数据没有被修改这个回调方法不会执行
      });
    }
  }
}
</script>


