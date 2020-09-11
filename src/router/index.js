import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import services from '@/components/services'
import details from '@/components/details'
import java from '@/components/java'  
import mongo from '@/components/mongo' 
import newarticle from '@/components/newarticle'  
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    },
    {
      path: '/java',
      name: 'java',
      component: java
    },
    {
      path: '/mongo',
      name: 'mongo',
      component: mongo
    },
    {
      path: '/newarticle',
      name: 'newarticle',
      component: newarticle
    }
    
  ]
})
