<template>
  <div class="hero">
    
    <button type="button" class="btn btn-primary btn-lg btn-block"><router-link to='/' >&lt;返回主页</router-link></button>
    <div class="row">

      <div class="col-sm-1 col-md-1" v-for="(item,index) in hero">
        <div class="thumbnail tippy" 
          v-bind:title="
          '攻击范围:'+item.atk_range+
          '<br/>描述:'+item.hero_desc+
          '<br/>移速:'+item.move_speed">
          <img v-bind:src="icon_url+'/'+item.hero_img_id+'.png'" v-bind:alt="item.hero_name">
          <div class="caption">
            <p>{{item.hero_name}}</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

import Vue from 'vue';

import VueResource from 'vue-resource';

require('tippy.js/dist/tippy.css')
var Tippy = require('tippy.js/dist/tippy.min.js')
require('tippy.js/dist/tippy.standalone.js')
Vue.use(VueResource);

export default {
  name: 'world',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      icon_url: "http://cdn.tgp.qq.com/kog/v3/images/hero/",
      hero:[
        {'item_name':'铁剑'},
        {'item_name':'无尽'}
      ],
    }
  },
  created:function(){
      // console.log(this.equip)
      //var length = document.querySelectorAll('.caption').length;
      //console.log(length)
      this.getHero();
      
  },
  updated:function(){
      //var length = document.querySelectorAll('.caption').length;
      //console.log(length)
      new Tippy('.tippy')
  },
  methods:{
    getHero:function(){
      this.$http({
        method:'GET',
        url:'http://kogapi.games-cube.com/champion',
        headers:{
          "DAIWAN-API-TOKEN":"4BBC8-CD041-BD4BC-4C84C"
        }
      }).then(function(response){
          this.hero = response.body.data;
      },function(error){
        console.log(rsp)
      })
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
}
</style>
