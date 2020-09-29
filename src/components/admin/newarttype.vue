<template>
  <div class="container">
    <Header name="Yeni Makale Tipi" to="/newarttype"></Header>
    <form @submit.prevent="onSubmit">
      <div class="well">
        <h4>Yeni Makale Tipi</h4>
      </div>
        <div class="form-group">
          <input v-model="arttype.title" class="form-control" placeholder="title" />
        </div>
        <div class="form-group">
          <textarea
            v-model="arttype.description"
            cols="40"
            rows="10"
            class="form-control"
            placeholder="content"
          ></textarea>
        </div>
       
      <button
        type="submit"
        class="btn btn-large btn-block btn-primary full-width">Kaydet</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./header"
export default {
  components: {
    Header
  },
  methods: {
        onSubmit() {
          this.articletype.dates = new Date().toLocaleString();
          axios
            .post("/arttype", { ...this.arttype })        
            .then((response) => {
              console.log(response);
              this.arttype = {};
              
            })
            .catch((e) => console.log(e));
        },
      },
  data() {
    return {
      arttype: {
        title: "",
        content: "",
        dates: ""
      },

      articleTypes: [],
    };
  },
};
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
