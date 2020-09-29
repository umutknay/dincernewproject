<template>
  <div class="container">
    <Header name="Yeni Makale" to="/newarticle"></Header>
    <form @submit.prevent="onSubmit">
      <div class="well">
        <h4>Makale Tipi Güncelleme Ekranı</h4>

        <div class="form-group">
          <input v-model="articletype.title" class="form-control" placeholder="title" />
        </div>
        <div class="form-group">
          <textarea
            v-model="articletype.description"
            cols="40"
            rows="10"
            class="form-control"
            placeholder="content"
          ></textarea>
        </div>

      </div>

      <button
        type="submit"
        class="btn btn-large btn-block btn-primary full-width">Güncelle</button>
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
	created() {
    axios
     .get("/arttype/"+this.articlename.toString())
      .then((response) => {
        let data = response.data;
        this.articletype = data;
        console.log(this.articletype);
      })
		.catch((e) => console.log(e));
		
	
  },
  data() {
    return {
		
	  articlename : this.$route.params.aname,
	  articletype: {
        title: "",
        description: "",
        dates: ""
	  }
	};
  },
  methods:{
	 onSubmit() {
       this.articletype.dates = new Date().toLocaleString();
          axios
            .put("/arttype", { ...this.articletype })        
            .then((response) => {
              //this.article = {};
            })
            .catch((e) => console.log(e));
        }
  }
};
</script>