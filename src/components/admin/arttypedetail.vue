<template>
  <div class="container">
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
export default {
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
        description: ""
	  }
	};
  },
  methods:{
	 onSubmit() {
      
          axios
            .put("/arttype", { ...this.articlename, ...this.articletype })        
            .then((response) => {
              //this.article = {};
            })
            .catch((e) => console.log(e));
        }
  }
};
</script>