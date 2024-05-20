<template>
   <h1 v-if="article">{{ article.title }}</h1>
</template>


<script>
import { mapState } from 'vuex';
export default {
   computed: {
      ...mapState({
      article: state => state.articles.articleDetail
   })
   }
   
}
</script>