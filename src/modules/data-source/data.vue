<style lang="scss" scoped="" type="text/css">
  .main-container {
    position: absolute;
    z-index: 2001;
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

  table{
    width:auto;
    min-width:100%;
    max-width:auto;
    td{
      padding: 4px;
          white-space: nowrap;
      border-bottom: 1px solid rgba(0,0, 0, 0.1)
    }
  }
</style>
<template>
 <div>
     <div>
         <table id="tableTitle">
             <thead>
                 <tr>
                     <td v-for="(item,index) in tableTitle" :width="getWidth(index)">{{item.name}}</td>
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
                <tr v-for="(data,index) in tableData3" @click ="rowClick(index)">
                    <td class="text center" v-for="(item,indexTd) in data" @mouseover ="tdMouseOver(indexTd)">
                        <div  style="margin-left: 10px;float:left;">{{item}}</div>
                    </td>
                </tr>
             </tbody>
          
        </table>
     </div>
  
 </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data() {
      return {
          tableTitle:[
              {name:'时间',cwidth:100},
              {name:'姓名',cwidth:100},
              {name:'地址',cwidth:100}
          ],
        tableData3: [
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
        ]
      }
    },
    computed:{
      getWidth:function(index){
          //console.log($("#dataDetail").children());
        //console.log(document.getElementById("detailTitle").childNodes[index]);
        return "120px";
      }
    },
    mounted (){
        
    },
    methods:mapActions([
      'toggleMenu'
      ]) 
    }
  
</script>
