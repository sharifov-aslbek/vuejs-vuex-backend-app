<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div v-if="isLoading" class="spinner-border"  role="status">
         <span class="visually-hidden">Loading...</span>
      </div>
      <ArticleCard v-else v-for="article in data" :article="article" :key="article.id" />
   </div>
</template>

<script>
import { mapState } from 'vuex';
import ArticleCard from '../components/ArticleCard.vue'
export default {
   computed: {
      ...mapState({
         data: state => state.articles.data,
         isLoading: state => state.articles.isLoading,
         error: state => state.articles.error,
      })
   },
   components: {
      ArticleCard
   },
   mounted() {
      this.$store.dispatch('articles')
   }
}
</script>

<style></style>