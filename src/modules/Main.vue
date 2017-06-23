<style scoped>
  .top-menu-item {
    color: #fff;
    float: right;
    height: 70px;
    margin-right: 35px;
    font-size: 16px;
    padding: 0 16px;
  }

  .top-menu-item:hover {
    background-color: rgb(90, 197, 232);
  }
  .ccc{
    
  }
</style>
<template>
  <div class="ccc">
    <c-menu></c-menu>
    <c-main></c-main>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import CMenu from 'components/CMenu'
  import CMain from 'components/CMain'

  export default {
    computed: mapGetters([
      'menuIsFold',
      'tokens'
    ]),
    components: {
      CMenu,
      CMain
    },
    watch: {
      tokens: function (val) {
          console.log(val);
        if (val == '') {
          this.$router.push('/login');
        }
      }
    },
    methods:{ ...mapActions([
        'logout'
      ])
    },
    created (){
      // console.log(this.$route);
      
    }
  }
</script>
