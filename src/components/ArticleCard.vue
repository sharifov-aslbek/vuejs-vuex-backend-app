<template>
   
   
   <div class="col">
     <div class="card shadow-sm">
       <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>
         <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
       <div class="card-body">
         <p class="card-title fw-bold">{{ article.title }}</p>
         <p class="card-text">{{ article.body }}</p>
         <div class="d-flex justify-content-between align-items-center">
           <div class="btn-group">
             <button type="button" class="btn btn-sm btn-outline-secondary" @click='navigateHandler'>Read Article</button>
             <button v-if="article.author.username == user.username" type="button" class="btn btn-sm btn-outline-danger" @click='deleteArticleHandler' :disabled="isLoading">Delete</button>

             <button type="button" v-if="article.author.username == user.username" class="btn btn-sm btn-outline-primary" @click="navigateEditHandler">Edit</button>
           </div>
           <small class="text-body-secondary">{{ new Date(article.createdAt).toLocaleString("uzb") }}</small>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
   props: {
      article: [Object , String]
   },
   computed: {
      ...mapState({
        user: state => state.auth.user,
        isLoading: state => state.control.isLoading
      })
   },
   methods: {
    navigateHandler() {
      return this.$router.push(`/article/${this.article.slug}`)
    },
    deleteArticleHandler() {
      this.$store.dispatch('deleteArticle' , this.article.slug).then(() => this.$store.dispatch("articles"))
    },
    navigateEditHandler() {
      return this.$router.push(`/edit-article/${this.article.slug}`)
    }
   }
}
</script>

<style></style>