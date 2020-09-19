<template>

 <div>
 <Header name="Yeni Makale" to="/newarticle"></Header>


 <div v-for="article in articleList" :key="article.id">
      <a href="#" @click="goDetail(article.id)" class="list-group-item list-group-item-action flex-column align-items-start">
            {{article.title}} 

    <router-view></router-view>
 
  </a> 
  </div>


 </div>
 
</template>

<script>

 import axios from "axios";
 import Header from "./header"

  export default {
    components:{
      Header
    },
    created(){
      axios.get("/article")
      .then(response => {
        let data = response.data;
        this.articleList = data;
      })
      .catch(e=>console.log(e))
    },
   
    data(){
      return{
        articleList:[],
        articlename:null
      }
    },
    methods:{
      goDetail(article){
        this.$router.push({name:'details',params: { aname: article }})
      }
    }
  }
  </script>
<style>
  
  
</style>