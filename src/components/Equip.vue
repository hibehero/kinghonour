<template>
  <div class="equip">
    <router-link to='/'>&lt;</router-link>
    <div class="row">

      <div class="col-sm-1 col-md-1" v-for="(item,index) in equip">
        <div class="thumbnail tippy" v-bind:title="'售价'+item.total_price">
          <img v-bind:src="icon_url+'/'+item.item_id+'.jpg'" v-bind:alt="item.item_name">
          <div class="caption">
            <p>{{item.item_name}}</p>
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
  name: 'equip',
  props:['message'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      icon_url: "http://game.gtimg.cn/images/yxzj/img201606/itemimg",
      equip:[
        {'item_name':'铁剑'},
        {'item_name':'无尽'}
      ],
    }
  },
  beforeCreate:function(){
    //console.log(this.msg)
    //alert(this.message)
  },
  created:function(){
      // console.log(this.equip)
      //var length = document.querySelectorAll('.caption').length;
      //console.log(length)
      this.getEquip();
      alert(this.message)
      
  },
  mounted:function(){
      //var length = document.querySelectorAll('.caption').length;
      //console.log(length)
  },
  updated:function(){
      //var length = document.querySelectorAll('.caption').length;
      //console.log(length)
      new Tippy('.tippy')
  },
  methods:{

    getEquip:function(){
        // GET /someUrl 
        this.$emit('upEvent')
        this.$http.get('../../static/equip.json').then(response => {
          
          // get body data 
          this.equip = response.body;
       
        }, response => {
          // error callback 
        });
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
