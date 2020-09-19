<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="well">
        <h4>Yeni Makale</h4>

        <div class="form-group">
          <input v-model="article.title" class="form-control" placeholder="title" />
        </div>
        <div class="form-group">
          <textarea
            v-model="article.content"
            cols="40"
            rows="10"
            class="form-control"
            placeholder="content"
          ></textarea>
        </div>
        <div class="form-group">
          <input v-model="article.url" type="text" class="form-control" placeholder="url" />
        </div>
        <div class="form-group">
          <input v-model="article.image" type="text" class="form-control" placeholder="image" />
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <select class="browser-default custom-select" v-model="article.articletype">
              <option v-for="atype in articleTypes" :value="atype.id" :key="atype.id">{{atype.title}}</option>
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-large btn-block btn-primary full-width">Kaydet</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("/arttype")
      .then((response) => {
        console.log(response);
        let data = response.data;
        this.articleTypes = data;
        
      })
        
  },
  methods: {
        onSubmit() {
          // console.log(this.article);
          // debugger;
          axios
            .post("/article", { ...this.article })        
            .then((response) => {
              console.log(response);
              this.article = {};
              
            })
            .catch((e) => console.log(e));
        },
      },
  data() {
    return {
      article: {
        title: "",
        content: "",
        url: "",
        articletype: "",
        image: "",
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
