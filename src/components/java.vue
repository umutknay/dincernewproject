<template>
  <div class="container-fluid pt-5">
    <b><font size="5">Frontend Development With JS</font></b>
 
      <div class="" v-for="java in javaList">
        <img class="card-img-top" :src="java.image">
        
 
     
      </div>
      
       <div class="jumbotron"  >
  <h1 class="display-4">Nasıl Frontend Uzmanı Olabilirim ?</h1>
  <p class="lead" >
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4" >
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
  </div>
</template>
<script>
import axios from "axios";
//import customAxios from "./custom_axios";
  export  default {
    created(){
      axios.get("/java")
      .then(response => {
        console.log(response);
        let data = response.data;
        for(let key in data){
          this.javaList.push({ ...data[key], id : key})
        }
      })
      .catch(e=>console.log(e))
    },
    data(){
      return{
        javaList:[]
      }
    }
  }
</script>
<style>
  .card {
    width: 300px;
  }
</style>