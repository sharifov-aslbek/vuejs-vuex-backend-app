<template>
   <ul class="list-group mb-5">
      <li class="list-group-item list-group-item-danger mt-2" v-for="errorMsg in errorMessage" :key="errorMsg">
         {{ errorMsg }}
      </li>
   </ul>   
</template>
<script>
export default {
   props: {
      validationprops: {
         type: Object,
         required: true,
      }
   },
   updated() {
      console.log(this.validationprops);
   },
   computed: {
      errorMessage() {
         return Object.keys(this.validationprops).map(name => {
            const msg = this.validationprops[name].join(',')
            return `${name} ${msg}`
         })
      }
   }
}
</script>
<style>
   
</style>