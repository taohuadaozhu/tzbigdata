<style>
  .main-wrapper {
    width: 100%;
    height: 100%;
    padding: 0;
  }

 

  /* 页内样式 */
  .home-page-center {
    height: 100%;
  }

  .single-page-center {
    padding: 8px;
    box-sizing: border-box;
  }

  .home-section-wrap {
    padding: 8px;
    position: relative;
  }

  .home-section-wrap-bottom {
    min-height: -moz-calc(100% - 130px);
    min-height: -webkit-calc(100% - 130px);
    min-height: calc(100% - 130px);
    margin: 8px;
    background-color: #fff;
  }

  .page-center-wrap-bottom {
    min-height: -moz-calc(100% - 16px);
    min-height: -webkit-calc(100% - 16px);
    min-height: calc(100% - 16px);
    background-color: #fff;
  }

  .page-center-wrap-bottom .home-section-env, .home-section-wrap-bottom .home-section-env, .home-section-wrap-right .home-section-env {
    padding: 8px !important;
  }

  .home-section-wrap-right {
    min-height: -moz-calc(50% - 32px);
    min-height: -webkit-calc(50% - 32px);
    min-height: calc(50% - 32px);
    margin: 8px;
    background-color: #fff;
  }

  .home-section-env {
    background-color: #fff;
    padding: 16px;
    position: relative;
    border-radius: 4px;
  }
</style>
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
</style>
<template>
  <div class="main-wrapper main-sidebar-l" :class="{'sidebar-mini':menuIsFold}">
    <c-main></c-main>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import CMain from 'components/CMain'

  export default {
    computed: mapGetters([
      'menuIsFold',
      'tokens'
    ]),
    components: {
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
    methods: mapActions([
      'logout'
    ])
  }
</script>
