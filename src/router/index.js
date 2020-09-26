import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/admin/home'
import details from '@/components/admin/details'
import newarticle from '@/components/admin/newarticle'  
import arttypes from '@/components/admin/arttypes'
import newarttype from '@/components/admin/newarttype'
import arttypedetail from '@/components/admin/arttypedetail'
import Index from '@/components/Index.vue'
import Auth from "@/auth/Auth.vue";
import { store } from "@/store";

Vue.use(VueRouter)

export const router =  new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: 'Admin',
        metaTags: [
          {
            name: 'Article',
            content: 'Article management'
          },
          {
            property: 'Article Type',
            content: 'Article Type Management'
          }
        ]
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      beforeEnter(to, from, next){
        if(store.getters.isAuthenticated){
            next()
        }
        else{
            next("/auth")
        }
    }
    },
    { path : "/auth", component : Auth },
    
    {
      path: '/details/:aname',beforeEnter:(to,from,next)=>{
        next();
      },
      name: 'details',
      component: details,
      beforeEnter(to, from, next){
        if(store.getters.isAuthenticated){
            next()
        }
        else{
            next("/auth")
        }
    }
    },
    {
      path: '/newarticle',
      name: 'newarticle',
      component: newarticle,
      beforeEnter(to, from, next){
        if(store.getters.isAuthenticated){
            next()
        }
        else{
            next("/auth")
        }
    }
    },
    {
      path: '/arttypes',
      name: 'arttypes',
      component: arttypes,
      beforeEnter(to, from, next){
        if(store.getters.isAuthenticated){
            next()
        }
        else{
            next("/auth")
        }
    }
    },
    {
      path: '/newarttype',
      name: 'newarttype',
      component: newarttype,
      beforeEnter(to, from, next){
        if(store.getters.isAuthenticated){
            next()
        }
        else{
            next("/auth")
        }
    }
    },
    {
      path: '/arttypedetail',
      name: 'arttypedetail',
      component: arttypedetail,
      beforeEnter(to, from, next){
        if(store.getters.isAuthenticated){
            next()
        }
        else{
            next("/auth")
        }
    }
    }
    
  ],
  mode:"history"
})

