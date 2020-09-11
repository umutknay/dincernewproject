<template>
  <div class="container">
  
    <form>
  
      <div class="well">
        <h4> New Arcticle</h4>
        <div class="form-group">
          <label class="pull-left"></label>
          <input type="text" class="form-control" placeholder="title" v-model="User.title">
        </div>
        <div class="form-group">
          <textarea  v-model="User.content" cols="40" rows="10" class="form-control" placeholder="content" ></textarea>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="url" v-model="User.url">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="image " v-model="User.image">
        </div>
           
     
      </div>
     
      <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI">Kaydet</button>
     
      
    </form>
  
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      User: { title: '', content: '', url: '',image: '' },
    }
  }, methods: {
    addToAPI() {
      let newUser = {
        title: this.User.title,
        content: this.User.content,
        url: this.User.url,
        image:this.User.url

      }
      console.log(newUser);
      axios.post('http://localhost:54313/api/article', newUser)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  }
}
 
    
  

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>