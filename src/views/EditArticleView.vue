<template>
    <h1 class="text-center">Edit</h1>
   <ArticleForm v-if="article" :initialValue="initialValue" :onSubmitHandler="editArticleHandler" />
</template>


<script>
import { mapState } from 'vuex';
import ArticleForm from '../components/ArticleForm.vue'
export default {
   computed: {
      ...mapState({
         article: state => state.articles.articleDetail
      }),
      initialValue() {
         return {
            title: this.article.title,
            description: this.article.description,
            body: this.article.body,
         }
      }
   },
   components: {
      ArticleForm
   },
   methods: {
      editArticleHandler(article) {
        this.$store.dispatch("updateHandler" , {article: article, slug: this.$route.params.slug}).then(() => {this.$router.push("/")})
      }
   },
   mounted() {
      this.$store.dispatch("articleDetail" , this.$route.params.slug)
   }
}
</script>