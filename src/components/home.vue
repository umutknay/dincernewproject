<template>

 <div>
 <Header></Header>


 <div v-for="article in articleList" :key="article.id">
      <a href="#"
    @click="goDetail(article.id)" class="list-group-item list-group-item-action flex-column align-items-start"
    >
            {{article.title}} 

	<hr/>
    <router-view></router-view>
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">dincer</h5>
      <small class="text-muted">3 days ago</small>
    </div>  
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
        //console.log(response);
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
        //console.log(article);
        this.$router.push({name:'details',params: { aname: this.article }})
      }
    }
  }
  </script>
<style>
  
  
</style>