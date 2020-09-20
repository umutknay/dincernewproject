<template>
  <div id="app">
    <vue-confirm-dialog></vue-confirm-dialog>
    <!-- <a href="home"><img src="./assets/logo.png"></a> -->
      <!-- navbar test deneme-->
      <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
      
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Makaleler</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/arttypes">Makale Tipleri</router-link>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.moveInUp-enter-active{
  animation: fadeIn 2s ease-in;
}
.btn-1 {
    background-color: #ffffff;
    border: none;
    color: #000000;
    padding: 15px;
    width: 160px;
    transition: all 0.5s;
    cursor: pointer;
}
 
.btn-1 span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}
 
.btn-1 span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: -3px;
    right: -20px;
    transition: 0.5s;
    font-size: 18px;
}
 
.btn-1:hover span {
    padding-right: 15px;
}
 
.btn-1:hover span:after {
    opacity: 1;
    right: 0;
}
   .link {
    border: 1px solid #000;
  	border-radius: 10px;
  	padding: 5px;
  	text-decoration: none;
  }
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
</style>