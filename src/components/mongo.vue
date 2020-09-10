<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div class="card m-1" v-for="article in articleList">
        <img class="card-img-top" :src="article.image">
        <div class="card-body">
          <h5 class="card-title">{{article.title}}</h5>
           
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>
import axios from "axios";
//import customAxios from "./custom_axios";
  export default {
    created(){
      axios.get("/article")
      .then(response => {
        console.log(response);
        let data = response.data;
        for(let key in data){
          this.articleList.push({ ...data[key], id : key})
        }
      })
      .catch(e=>console.log(e))
    },
    data(){
      return{
        articleList:[]
      }
    }
  }
</script>
<style>
  .card {
    width: 300px;
  }
</style>