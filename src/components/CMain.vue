<style scoped>
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

  .sdp-container-scroll {
    position: absolute;
    width: auto;
    top: 0;
    bottom: 8px;
    left: 8px;
    right: 8px;
    overflow: auto;
    /* overflow-y: auto; */
    -moz-transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .content-container {
    position: relative;
    padding: 0;
    min-width: 763px;
  }

  .newbtn{
    float: right;
    margin-right: 20px;
    height: 27px;
    line-height: 12px;
    margin-top: 2px;
  }
</style>
<template>
  <main class="main-container">
    
    <div class="sdp-container-scroll">
      <div class="content-container height100">
        <router-view></router-view>
      </div>
    </div>
    
  </main>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
   
    computed: mapGetters([
      'menuIsFold'
    ]),
    methods:mapActions([
      'toggleMenu'
      ]) 
    }
  
</script>
