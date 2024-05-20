import ArticleService from "@/service/articles"
import AuthService from "@/service/auth"

const state = {
   data: null,
   isLoading: false,
   error: null,
   articleDetail: null
}

const mutations = {
   getArticleStart(state) {
      state.isLoading = true
      state.data = null
      state.error = null
      state.articleDetail = null
   },
   getArticleSuccess(state, payload) {
      state.isLoading = false
      state.data = payload
   },
   getArticlesFailure(state) {
      state.isLoading = false
   },
   getArticleDetailStart(state) {
      state.isLoading = true
      state.error = null
      state.data = null
      state.articleDetail = null
   },
   getArticleDetailSuccess(state, payload) {
      state.isLoading = false
      state.articleDetail = payload
   },
   getArticleDetailFailure(state) {
      state.isLoading = false
   }
}

const actions = {
   articles(context) {
      return new Promise((resolve, reject) => {
         context.commit('getArticleStart')
         ArticleService.articles()
         .then(response => {
            context.commit("getArticleSuccess" , response.data.articles)
            resolve(response.data.articles)
         })
         .catch(() => context.commit('getArticlesFailure'))
      })
   },
   articleDetail(context , slug) {
      return new Promise((resolve ) => {
         context.commit("getArticleDetailStart")
         ArticleService.articleDetail(slug)
         .then(response => {
            context.commit("getArticleDetailSuccess" , response.data.article)
            resolve(response.data.article)
         })
         .catch(() => context.commit("getArticleDetailFailure"))
      })
   }
} 

export default {
   state , mutations , actions
}