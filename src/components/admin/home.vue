<template>

 <div class="container">
 <Header name="Yeni Makale" to="/newarticle"></Header>

<v-client-table 
          :data="articleList"
          :columns="columns" 
          :options="options">
          <span slot="actions" slot-scope="{row}"> 
            <button v-on:click="edit(row.id)">Seç</button>
            <button v-on:click="erase(row.id)">Sil</button>
          </span>
      </v-client-table>

 </div>
 
</template>

<script>

 import axios from "axios";
 import Header from "./header"

  export default {
    components:{
      Header
    },
    created(){
      this.getData();
    },
   
    data(){
      return{
        columns: ['id','title', 'url', 'articleType','actions'],
        articleList:[],
        articlename:null,
        options: {
                headings: {
                    id : 'id',
                    title: 'Title',
                    url: 'Url',
                    articletype: 'Tip',
                    actions: 'Actions'
                },
                sortable: ['id','title', 'url'],
                filterable: ['id','title', 'url']
            }
      }
    },
    methods:{
      // goDetail(article){
      //   this.$router.push({name:'details',params: { aname: article }})
      // }
      getData(){
        axios.get("/articlecustom/getall")
      .then(response => {
        let data = response.data;
        this.articleList = data;
      })
      .catch(e=>console.log(e))
      },
      edit (Id) {
        this.$router.push({name:'details',params: { aname: Id }})
    },   
    erase (Id) {
       this.$confirm(
        {
          message: 'Emin misin?',
          button: {
            no: 'Hayır',
            yes: 'Evet'
          },
          callback: confirm => {
            if (confirm) {
             if(confirm){
               axios.delete("article/"+Id).then((result) => { this.getData(); }).catch((e) => console.log(e));
             }
            }
          }
        }
      )

    }
    }
  }
  </script>

<style scoped>
  #app {
  width: 95%;
  margin-top: 50px; 
}

.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}

  
</style>