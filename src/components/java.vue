<template>
  <div class="container-fluid pt-5">
    <b>
      <font size="5">Frontend Development With JS</font>
    </b>
    <div class v-for="article in articleList">
      <img class="card-img-top" :src="article.image" />
    </div>
    <div class="jumbotron">
      <h1 class="display-4">Nasıl Frontend Uzmanı Olabilirim ?</h1>
      <p class="lead"></p>
      <p
        id="bd53"
        align="left"
        class
        data-selectable-paragraph
      >Web Frontend(Önyüz) Geliştirme konusunda kapsamı yani büyük resmi bulmaya çalışmak çok önemli. Neden mi ?</p>
      <ul align="left" class>
        <li id="087c" class data-selectable-paragraph>Bu serüvende kaybolmamak</li>
        <li
          id="1cf3"
          class
          data-selectable-paragraph
        >Hangi rotada/kapsamda ne kadar ilerlemeniz gerektiğini bilmek.</li>
        <li
          id="f225"
          class="mj mk ik ml b jn nk mn mo jq nl mq mr ms nm jv mu mv nn jy mx my no kb na nb nh ni nj dd"
          data-selectable-paragraph
        >Tüm kapsamı görebilmek ve kavramları ve araçları doğru adlandırabilmek.</li>
      </ul>
      <hr class="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
//import customAxios from "./custom_axios";
export default {
  created() {
    axios
      .get("/article")

      .then((response) => {
        console.log(response);
        let data = response.data;
        for (let key in data) {
          this.articleList.push({ ...data[key], id: key });
        }
      })
      .catch((e) => console.log(e));
  },
  data() {
    return {
      articleList: [],
    };
  },
};
</script>
<style>
.card {
  width: 300px;
}
</style>