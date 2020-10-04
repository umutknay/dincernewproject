<template>
  <div class="container">
    <div class="row">
      <div v-for="article in articleList" :key="article.Id">
        <div class="card-expansion">
          <md-card>
            <md-card-media>
              <img :src="article.image" alt="okipu.net" style="width:310px;height:140px;"/>
            </md-card-media>

            <md-card-header>
              <div class="md-title">{{ article.title }}</div>
              <div class="md-subhead">
                <a :href="article.url">Ayrıca bakınız...</a>
              </div>
            </md-card-header>

            <md-card-expand>
              <md-card-actions md-alignment="space-between">
                <div>
                  <md-button>Detay...</md-button>
                </div>

                <md-card-expand-trigger>
                  <md-button class="md-icon-button">
                    <md-icon>keyboard_arrow_down</md-icon>
                  </md-button>
                </md-card-expand-trigger>
              </md-card-actions>

              <md-card-expand-content>
                <md-card-content>
                  <div v-html="article.content"></div>
                </md-card-content>
              </md-card-expand-content>
            </md-card-expand>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getData();
  },
  name: "CardExpansion",
  data() {
    return {
      articleList: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("/articlecustom/getall")
        .then((response) => {
          let data = response.data;
          this.articleList = data;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
.card-expansion {
  height: 350px;
}

.md-card {
  width: 320px;
  margin: 2px;
  display: inline-block;
  vertical-align: top;
}
</style>