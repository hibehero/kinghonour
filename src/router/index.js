import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Equip from '@/components/Equip'
//import Hero from '@/components/Hero'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/equip',
      name: 'Equip',
      component: Equip
    }
  ]
})
