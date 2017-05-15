<template>
  <div class="home">
    <ul class="nav nav-tabs nav-justified">
      <li role="presentation"><router-link to='/equip'>装备</router-link></li>
      <li role="presentation"><router-link to='/hero'>英雄</router-link></li>
      <li role="presentation"><router-link to='/search'>搜索</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
