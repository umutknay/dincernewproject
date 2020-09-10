<template>
<html>
  <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></head>
  <div class="container-fluid pt-5">
    <a class="btn" href="https://github.com/umutknay" rel="noopener" target="blank" 
    aria-label="Follow @umutkınay on GitHup">
    <svg viewBox="0 0 16 16" width="14" height="14" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>      
 <span>Follow @umutknay</span>
    </a>
     <a class="social-count" href="https://github.com/onselaydin?tab=followers" rel="noopener" target="_blank" aria-label="1144 followers on GitHub"></a>
 <a class="btn" href="https://github.com/onselaydin" rel="noopener" target="blank" 
    aria-label="Follow @onselaydin on GitHup">
    <svg viewBox="0 0 16 16" width="14" height="14" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>      
 <span>Follow @onselaydin</span></a>
    <a class="social-count" href="https://github.com/onselaydin?tab=followers" rel="noopener" target="_blank" aria-label="1144 followers on GitHub"></a>
 
        <button class="btn-1" > 
   
  <a href="http://www.dincerlojistik.com.tr/">
  <span>Dinçer Lojsitik</span> </a>
</button> 
    </div>
	<font title="Frontend Development With JS"><router-link to="/java" tag="a" class="list-group-item list-group-item-action flex-column align-items-start" >
  <b><font size="5">Frontend Development With JS</font></b>/Published August 14th 2020</router-link></font>
  
  <font title="Vue.JS Eğitim Seti"><router-link to="/java" tag="a" class="list-group-item list-group-item-action flex-column align-items-start"><b><font size=
  "5">Vue.JS Eğitim Seti</font></b>/Published August 30th 2020</router-link></font>
  <font title="MongoDb Eğitim Seti">	<router-link to="/mongo" tag="a" class="list-group-item list-group-item-action flex-column align-items-start" >
  <b><font size="5">MongoDb Eğitim Seti</font></b>/Published September 5th 2020</router-link></font>
	
	<hr/>
    <router-view></router-view>
    
  
   <a href="#" class="list-group-item list-group-item-action flex-column align-items-start"
  v-for="article in articleList">
            {{article.title}} --{{article.id}}
            
 
      
	<hr/>
    <router-view></router-view>
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">dincer</h5>
      <small class="text-muted">3 days ago</small>
    </div>  
  </a> 
  
    
  
      <!-- <div class="card m-1" v-for="article in articleList">
 
        <div class="card-body">
         <a href='#' @click=""> 
        <h5 class="card-title">{{article.title}}</h5>
           </a>
   
        </div>
      </div> -->
     
    
  
     
   
  <!-- Footer -->
</html>
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
        this.articleList = data;
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