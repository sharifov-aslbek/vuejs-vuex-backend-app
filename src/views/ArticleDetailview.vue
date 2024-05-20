<template >
   <div v-if="isLoading" class="spinner-border"  role="status">
         <span class="visually-hidden">Loading...</span>
      </div>
   <ArticleDetail v-else /> 
</template>
<script>
import { mapState } from 'vuex';
import ArticleDetail  from '../components/ArticleDetail.vue';
export default {
   computed: {
      ...mapState({
         isLoading: state => state.articles.isLoading
      })
   },
   mounted() {
      this.$store.dispatch("articleDetail" , this.$route.params.slug)
   },
   components: {ArticleDetail}
}
</script>
<style>
   
</style>