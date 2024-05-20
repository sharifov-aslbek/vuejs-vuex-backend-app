<template>
   <main class="form-signin w-25 m-auto main">
  <form>
    <img class="mb-4 rounded-circle" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1715040000&semt=ais" alt="" width="70" height="60">
    <h1 class="h3 mb-3 fw-normal">Register</h1>
    <ValidationErr v-if="validationErr" :validationprops="validationErr" />
    <Input :label="'Name'" :type="'text'" v-model="username"/>
    <Input :label="'Email address'" :type="'email'" v-model="email"/>
    <Input :label="'Password'" :type="'password'" v-model="password"/>
    
    <Button type="submit" :disabled="isLoading" @click=submitHandler>Register</Button>
    <p class="mt-5 mb-3 text-body-secondary">© Created 2024 05.05</p>
  </form>
</main>
   </template>
   
   <script>
   import ValidationErr from '@/components/ValidationErr.vue'
   export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      }
    },
    components:{
      ValidationErr
    },
    computed: {
      isLoading() {
        return this.$store.state.auth.isLoading
      },
      validationErr() {
        return this.$store.state.auth.errors
      }
    },
    methods: {
      submitHandler(e) {
        e.preventDefault();
        const data = {
          username: this.username,
          email: this.email,
          password: this.password,
        }
        this.$store.dispatch("register" , data)
        .then(user => {
          console.log("user" , user)
          this.$router.push({name: 'home'})
        }).catch(err => console.log("err register vue" , err))
      }
    }
   }
   </script>
   
<style>

</style>