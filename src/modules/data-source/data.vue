<style lang="scss" scoped="" type="text/css">
.main-container {
    position: absolute;
    top: 70px;
    left: 230px;
    right: 0;
    bottom: 0;
    overflow: hidden;
    -webkit-transition: all .28s ease-out;
    transition: all .28s ease-out;
    will-change: transform
}

.main-wrapper.sidebar-mini .main-container {
    left: 60px;
}

table {
    width: auto;
    min-width: 100%;
    max-width: auto;
    td {
        padding: 4px;
        white-space: nowrap;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1)
    }
}

#dataDetail {
    margin-top: -20px;
}

.tab-header {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    div {
        float: left;
        padding: 11px;
        margin: 0 10px 0 10px;
        border-bottom: 3px solid lightblue;
    }
}

.panel {
    position: relative;
    background: #fff;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .06), 0 10px 12px 0 rgba(170, 182, 206, .15);
    overflow: auto;
    max-height: 200px;
    .condition > div{
        float: left;margin-left: 15px;
    }
}
</style>
<template>
    <div>
        <h3>爱奇艺播放数据</h3>
        <div class="tab-header">
            <div>数据预览</div>
            <div>使用概况</div>
        </div>
    
        <div id="tb_preview">
            <div id="tb_info">
                <span class="wtb-desc-tip ng-binding">显示最新
                    <em class="num ng-binding">348</em>
                    条数据，共
                    <em class="num ng-binding">348</em>条数据
                    <a class="bdp-icon-wrap ng-scope" href="javascript:;" title="导出Excel">
                        <i class="bdp-icon ico-download"></i>
                    </a>
    
                </span>
            </div>
            <div class="tab-filter">
                <div class="tab-filter-action">
                    <div v-show="whereConditionShow===false" @click="showPanel(1)">
                        <span>数据筛选</span>
                        <i class="el-icon-arrow-down" ></i>
                    </div>
                    <div v-show="whereConditionShow===true" @click="showPanel(1)">
                        <span>收起筛选</span>
                        <i class="el-icon-arrow-up"></i>
                    </div>
                    <div v-show="fieldConditionShow===false" @click="showPanel(2)">
                        <span>设置显示字段</span>
                        <i class="el-icon-arrow-down"></i>
                    </div>
                    <div v-show="fieldConditionShow===true" @click="showPanel(2)">
                        <span>收起设置字段</span>
                        <i class="el-icon-arrow-up"></i>
                    </div>
                </div>
                <div class="panel" v-show="whereConditionShow">
                    <div style="float:left;width:100%;">
                        <span>筛选方式</span>
                        <el-radio class="radio" v-model="radio" label="1">条件过滤</el-radio>
                        <el-radio class="radio" v-model="radio" label="2">表达式过滤</el-radio>
                    </div>
                    <div style="position:relative;">
                    <div style="float:left;min-height:40px;">
                        <CSelectConditions v-for="item in conditions" :child-msg="tableTitle" ></CSelectConditions>
                    </div>
                    <div style="left:850px;position:absolute;bottom:15px;">
                        <i class="el-icon-plus" @click="addCondition()"></i>
                        <i class="el-icon-minus" @click ="minusCondition()"></i>
                        <el-button>确定</el-button>
                    </div>
                    <div style="clear:both;"></div>
                    </div>
                    
                </div>
                <div class="panel" v-show="fieldConditionShow">
                    <div v-if="tableTitleTime.length>0"><input type="checkbox" id="ckTimeAll"><label for="ckTimeAll">日期</label>
                        <ul>
                            <li v-for="item in tableTitleTime"><input type="checkbox" :id="'ck'+item.id" name="ckTime"><label :for="'ck'+item.id">{{item.name}}</label></li>
                        </ul>
                    </div>
                    <div v-if="tableTitleText.length>0"><input type="checkbox" id="ckTextAll"><label for="ckTextAll">文本</label>
                        <ul>
                            <li v-for="item in tableTitleText"><input type="checkbox" :id="'ck'+item.id" name="ckText"><label :for="'ck'+item.id">{{item.name}}</label></li>
                        </ul>
                    </div>
                    <div v-if="tableTitleNum.length>0"><input type="checkbox" id="ckNumAll"><label for="ckNumAll">数值</label>
                        <ul>
                            <li v-for="item in tableTitleNum"><input type="checkbox" :id="'ck'+item.id" name="ckNum"><label :for="'ck'+item.id">{{item.name}}</label></li>
                        </ul>
                    </div>
                    <el-button>确定</el-button>
                </div>
            </div>
            <div>
                <div>
                    <table>
                        <thead>
                            <tr id="tableTitles">
                                <td v-for="(item,index) in tableTitle">{{item.name}}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div style="position: relative; overflow: auto; max-height: 200px; width: 100%;">
                    <table id="dataDetail">
                        <thead>
                            <tr id="detailTitle">
                                <td v-for="item in tableTitle" :width="item.cwidth">{{item.name}}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data,index) in tableData3" @click="rowClick(index)">
                                <td class="text center" v-for="(item,indexTd) in data">
                                    <div style="margin-left: 10px;float:left;">{{item}}</div>
                                </td>
                            </tr>
                        </tbody>
    
                    </table>
                </div>
            </div>
        </div>
    
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import CSelectConditions from 'components/CSelectConditions'
export default {
    components: {
        CSelectConditions
    },
    data() {
        return {
            whereConditionShow:false,
            fieldConditionShow:false,
            conditions: [{}],
            radio: 1,
            tableTitle: [
                { name: '时间', cwidth: 100,id:'f1',type:3},
                { name: '姓名', cwidth: 100,id:'f2',type:2 },
                { name: '地址', cwidth: 100,id:'f3',type:2 },
                { name: '名次', cwidth: 100,id:'f4',type:1 }
            ],
            // tableTitleTime:[],
            // tableTitleText:[],
            // tableTitleNum:[],
            tableData3: [
                [
                    "hehe0",
                    "hehe1",
                    "hehe2tlehehe0上海市普陀区金"
                ],
                [
                    "hehe0",
                    "hehe1tlehehe0上海市普陀区金",
                    "hehe2"
                ],
                [
                    "titlehehe0上海市普陀区金沙江路 ",
                    "titlehehe1",
                    "titlehehe2上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄"
                ],
                [
                    "hehe0",
                    "hehe1",
                    "hehe2tlehehe0上海市普陀区金"
                ],
                [
                    "hehe0",
                    "hehe1tlehehe0上海市普陀区金",
                    "hehe2"
                ],
                [
                    "titlehehe0上海市普陀区金沙江路 ",
                    "titlehehe1",
                    "titlehehe2上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄"
                ],
                [
                    "hehe0",
                    "hehe1",
                    "hehe2tlehehe0上海市普陀区金"
                ],
                [
                    "hehe0",
                    "hehe1tlehehe0上海市普陀区金",
                    "hehe2"
                ],
                [
                    "titlehehe0上海市普陀区金沙江路 ",
                    "titlehehe1",
                    "titlehehe2上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄"
                ],
                [
                    "hehe0",
                    "hehe1",
                    "hehe2tlehehe0上海市普陀区金"
                ],
                [
                    "hehe0",
                    "hehe1tlehehe0上海市普陀区金",
                    "hehe2"
                ],
                [
                    "titlehehe0上海市普陀区金沙江路 ",
                    "titlehehe1",
                    "titlehehe2上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄"
                ]
            ]
        }
    },
    computed: {
        getWidth: function (index) {
            return "120px";
        },
        tableTitleTime() {
            return this.tableTitle.filter((item) => {return item.type===3})
        },
        tableTitleText() {
            return this.tableTitle.filter((item) => {return item.type===2})
        },
        tableTitleNum() {
            return this.tableTitle.filter((item) => {return item.type===1})
        }
    },
    mounted() {
        $.each($("#detailTitle").children(), function (i, item) {
            $($("#tableTitles").children()[i]).css("width", $(item).css("width"));
        })
        console.log(this.tableTitleTime)
        // this.tableTitleTime =this.tableTitle.filter((item) => {return item.type==="3"})
    },
    methods: {
        addCondition:function(){
            let obj={};
            this.conditions.push(obj);
        },
        minusCondition:function(){
            if(this.conditions.length>1){
                this.conditions.pop();
            }
            
        },
        showPanel:function(index){
            if(index===1){
                this.whereConditionShow = !this.whereConditionShow;
                if(this.whereConditionShow){
                    this.fieldConditionShow =false;
                }
            }else{
                this.fieldConditionShow = !this.fieldConditionShow;
                if(this.fieldConditionShow){
                    this.whereConditionShow =false;
                }
            }
        }
    }
}

</script>
