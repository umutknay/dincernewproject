import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/admin/home'
import blog from '@/components/blog'
import services from '@/components/services'
import details from '@/components/admin/details'
import java from '@/components/java'  
import mongo from '@/components/mongo' 
import newarticle from '@/components/admin/newarticle'  
import arttypes from '@/components/admin/arttypes'
import newarttype from '@/components/admin/newarttype'
import arttypedetail from '@/components/admin/arttypedetail'

Vue.use(VueRouter)

export const router =  new VueRouter({
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
      path: '/details/:aname',beforeEnter:(to,from,next)=>{
        next();
      },
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
    },
    {
      path: '/arttypes',
      name: 'arttypes',
      component: arttypes
    },
    {
      path: '/newarttype',
      name: 'newarttype',
      component: newarttype
    },
    {
      path: '/arttypedetail',
      name: 'arttypedetail',
      component: arttypedetail
    }
    
  ],
  mode:"history"
})

