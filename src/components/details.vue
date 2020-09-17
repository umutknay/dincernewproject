<template>
<div>
 <h1>test deneme detail {{article}}</h1>
  <button @click="test">Tıkla</button>
</div>
 
</template>
<script>
export default {
  data() {
    return {
	  article : this.$route.params.aname,
	 
	};
	
  },
  methods:{
	  test(){
		  console.log(this.article);
	  }
  }
};
</script>