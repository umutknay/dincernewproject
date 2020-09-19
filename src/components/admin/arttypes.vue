<template>

 <div>
 <Header name="Yeni Makale Tipi" to="/newarttype"></Header>


 <div v-for="articletype in articleTypeList" :key="articletype.id">
      <a href="#" @click="goDetail(articletype.id)" class="list-group-item list-group-item-action flex-column align-items-start">
            {{articletype.title}} 
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
      axios.get("/arttype")
      .then(response => {
        let data = response.data;
        this.articleTypeList = data;
      })
      .catch(e=>console.log(e))
    },
   
    data(){
      return{
        articleTypeList:[],
        articleTypeName:null
      }
    },
    methods:{
      goDetail(article){
        this.$router.push({name:'arttypedetail',params: { aname: article }})
      }
    }
  }
  </script>
<style>
  
  
</style>