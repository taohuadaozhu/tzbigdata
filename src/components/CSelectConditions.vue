<style lang="scss" scoped="" type="text/css">
.condi {
    width: 100%;
    padding: 5px 10px;
    height: 40px;
    .condi-item {
        float: left;
        margin-left: 20px;
    }
}
</style>
<template>
    <div class="condi">
        <div class="condi-item">
            <el-select v-model="fieldId" filterable placeholder="请选择" @change="idChanged">
                <el-option v-for="item in childMsg" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
            </el-select>
        </div>
        <div class="condi-item">
            <el-select v-model="fieldType" filterable placeholder="请选择">
                <el-option v-for="item in arrType" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="condi-item">
            <input v-model="fieldId">
            <div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        childMsg: Array
    },
    data () {
      return { 
        fieldId:'',
        fieldType:'',//选中的筛选类型
        arrType:[],
        arrNum:[
            {value:0,label:'等于'},
            {value:1,label:'不等于'},
            {value:2,label:'大于'},
            {value:3,label:'小于'},
            {value:4,label:'大于等于'},
            {value:5,label:'小于等于'},
            {value:6,label:'为空'},
            {value:7,label:'不为空'}
        ],
        arrStr:[
            {value:0,label:'等于'},
            {value:1,label:'不等于'},
            {value:2,label:'包含'},
            {value:3,label:'不包含'},
            {value:4,label:'为空'},
            {value:5,label:'不为空'}
        ],
        arrTime:[
            {value:0,label:'选择日期范围'},
            {value:1,label:'为空'},
            {value:2,label:'不为空'}
        ]
      }
    },
    watched: {
   
    },
    mounted(){
        this.arrType = this.arrNum;
    },
    methods: {
        
        idChanged(val){
            let app = this;
            this.childMsg.map(function(item){
            if(item.id===val){
                //选中的字段类型： 数值1 文本2 时间3
                switch(item.type){
                    case 1:
                    app.arrType = app.arrNum;
                    break;
                    case 2:
                    app.arrType = app.arrStr;
                    break;
                    case 3:
                    app.arrType = app.arrTime;
                    break;
                }
            }
        })
        },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      logout:function(){
        this.$store.dispatch('logout')
      },
      changeTag:function(value){
        this.$store.commit("CHANGE_TAG",value)
      }
    }
  }

</script>
