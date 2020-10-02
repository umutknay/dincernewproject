<template>
<div>

  <div class="container">
    <Header name="Yeni Makale" to="/newarticle"></Header>
    <form @submit.prevent="onSubmit">
      <div class="well">
        <h4>Yeni Makale</h4>

        <div class="form-group">
         <input @blur="$v.article.title.$touch()" v-model.trim="article.title" class="form-control" placeholder="title" :class="{'is-invalid': $v.article.title.$error}"  />
          <small v-if="!$v.article.title.required" class="form-text text-danger">Bu alan zorunludur.</small>
          <small v-if="!$v.article.title.minLength" class="form-text text-danger">Başlık girdisi çok az.</small>
          <small v-if="!$v.article.title.maxLength" class="form-text text-danger">Başlık girdisi çok fazla.</small>
        </div>
        <div class="form-group">
          <!-- <textarea
            v-model="article.content"
            cols="40"
            rows="10"
            class="form-control"
            placeholder="content"
          ></textarea> -->
          <vue-editor v-model="article.content"></vue-editor>
        </div>
        <div class="form-group">
          <input v-model="article.url" type="text" class="form-control" placeholder="url" />
        </div>
        <div class="form-group">
          <input v-model="article.image" type="text" class="form-control" placeholder="image" />
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <select class="browser-default custom-select" v-model.lazy="article.articletype" @change="selectedArttype">
              <option v-for="atype in articleTypes" :value="atype.id" :key="atype.id">{{atype.title}}</option>
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-large btn-block btn-primary full-width" :disabled="$v.$invalid">Kaydet</button>
    </form>
  </div>
</div>
</template>

<script>
import axios from "axios";
import { VueEditor } from "vue2-editor";
import { required, minLength, maxLength,  between } from "vuelidate/lib/validators";
 import Header from "./header"

export default {
  components: {
    VueEditor,Header
  },
  created() {

    axios
      .get("/arttype")
      .then((response) => {
        let data = response.data;
        this.articleTypes = data;

      })

  },
  methods: {
        onSubmit() {
          this.article.dates = new Date().toLocaleString();
          axios
            .post("/article", { ...this.article })
            .then((response) => {
              this.article = {};

            })
            .catch((e) => console.log(e));
        },
        selectedArttype(e){
           this.arttype.Id = this.article.articletype
           this.arttype.title = e.target.value;
           this.arttypedetail.push(this.arttype);
           this.article.arttypedetail = this.arttypedetail;
        }
      },
  data() {
    return {
      article: {
        title: "",
        content: "",
        url: "",
        articletype: "",
        image: "",
        dates:  "",
        arttypedetail:""
      },
      arttype: {
        Id:"",
        title: "",
        description: "",
        dates: ""
      },
      articleTypes: [],
      arttypedetail:[],
      datetimenow:""
    };
  },
  validations:{
    article:{
      title:{
        required,
        minLength: minLength(4),
        maxLength: maxLength(150)
      }
    }

  }
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
