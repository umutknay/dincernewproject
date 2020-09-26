<template>
  <div class="container">
    <Header name="Yeni Makale Tipi" to="/newarttype"></Header>

    <!-- <div v-for="articletype in articleTypeList" :key="articletype.id">
      <a href="#" @click="goDetail(articletype.id)" class="list-group-item list-group-item-action flex-column align-items-start">
            {{articletype.title}} 
    <router-view></router-view>
 
  </a> 
    </div>-->

    <v-client-table
      :data="articleTypeList"
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
import Header from "./header";

export default {
  components: {
    Header,
  },
  created() {
   this.getData();
  },

  data() {
    return {
      columns: ['id','title', 'description','actions'],
      articleTypeList: [],
      articleTypeName: null,
      options: {
        headings: {
          id : 'id',
          title: 'Title',
          description: 'description',
          actions: 'Actions'
        },
        sortable: ['id','title', 'description'],
        filterable: ['id','title', 'description'],
      },
    };
  },
  methods: {
    // goDetail(article) {
    //   this.$router.push({ name: "arttypedetail", params: { aname: article } });
    // },
    getData(){
       axios
      .get("/arttype")
      .then((result) => {
        let data = result.data;
        this.articleTypeList = data;
      })
      .catch((e) => console.log(e));
    },
    edit (Id) {
       this.$router.push({ name: "arttypedetail", params: { aname: Id } });
    },   
    erase (Id) {
       console.log(Id);

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
               axios.delete("arttype/"+Id).then((result) => { this.getData(); }).catch((e) => console.log(e));
             }
            }
          }
        }
      )

    }   
  },
};
</script>
<style>
</style>