<template>
   <div class="w-50 mx-auto">
      <form @submit.prevent>
         <Input type="text" label='Title' v-model="title" />
         <TextArea type="text" label="Description" v-model="description"/>
         <TextArea type="text" label="Body" v-model="body"/>
         <Button @click="editArticle">Edit Article</Button>
      </form>
   </div>
</template>


<script>
export default {
   props: {
      onSubmitHandler: {
         type: Function
      },
      initialValue: {
         type: Object
      }
   },
   data() {
      return {
         title: this.initialValue.title,
         description: this.initialValue.description,
         body: this.initialValue.body,
      }
   },
   methods: {
      editArticle() {
         const article = {
            title: this.title,
            description: this.description,
            body: this.body,
            tagList: [],
         }
      this.onSubmitHandler(article)    
      }
   },
}
</script>