<template>
  <div id="app">
    
    <!-- <router-link to="/hello">hello</router-link> -->
    <!-- <router-link to="/world">world</router-link> -->
    <router-view v-on:upEvent="alertNum"  message='你好'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:function(){
    return {
      message:'父组件数据'
    }
  },
  methods:{
    alertNum:function(){
      alert(1)
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
