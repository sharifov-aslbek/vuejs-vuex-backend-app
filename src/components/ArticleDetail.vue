<template>
   <div v-if="article">
      <div class="row">
         <div class="col-12">
            <p class="fs-2">{{ article.title }}</p>
         </div>
         <div class="col-8 mt-3">
            <h5>Desciption: </h5>
            <p class="font-monospace">{{ article.description }}</p>
         </div>
         <div class="col-2 mt-3">
            <h5>Created At: </h5>
            <p class="font-monospace">{{ new Date(article.createdAt).toLocaleDateString("uzb") }}</p>
         </div>
         <div class="col-2 mt-3">
            <h5>Updated At: </h5>
            <p class="font-monospace">{{ new Date(article.updatedAt).toLocaleDateString("uzb") }}</p>
         </div>
         <div class="col-4 mt-3">
            <div class="d-flex gap-3 align-items-center">
               <div class="d-flex gap-3 justify-content-center align-items-center bg-primary" style="width: 50px; height: 50px; border-radius: 100%;">
                  <span class="text-light text-uppercase font-monospace">
                     {{ article.author.username[0] }}
                  </span>
               </div>
               <div class="text-uppercase">
                  {{ article.author.username }}
               </div>
            </div>
            <h5 class="mt-4">Bio</h5>
            <p class="font-monospace">{{ article.author.bio }}</p>
         </div>
         <div class="col-8 mt-3">
            <p class="font-monospace">{{ article.body }}</p>
         </div>
      </div>
   </div>
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