<template>
  <div class="container">
  
    <form>
  
      <div class="well">
        <h4> Add User</h4>
        <div class="form-group">
          <label class="pull-left"> First Name </label>
          <input type="text" class="form-control" placeholder="First Name" v-model="User.first_name">
        </div>
        <div class="form-group">
          <label class="pull-left"> Last Name </label>
          <input type="text" class="form-control" placeholder="Last Namen" v-model="User.last_name">
        </div>
        <div class="form-group">
          <label class="pull-left"> Email </label>
          <input type="text" class="form-control" placeholder="Email " v-model="User.email">
        </div>
      </div>
  
      <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI">Submit</button>
      <button class="btn btn-large btn-block btn-success full-width">Go User</button>
    </form>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.287050175647!2d29.18883941484749!3d40.90945157931083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac488cc87dadf%3A0x1e3857b6db5dad4b!2sKartal%20Kule%20%C4%B0%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1599484063807!5m2!1str!2str"  width="500" height="150" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'contact',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      User: { first_name: '', last_name: '', email: '' },
    }
  }, methods: {
    addToAPI() {
      let newUser = {
        first_name: this.User.first_name,
        last_name: this.User.last_name,
        email: this.User.email
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