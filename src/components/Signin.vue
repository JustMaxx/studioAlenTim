<template>
  <div><input v-model="email" type="text"></div>
  <div><input v-model="pass" type="text"></div>
  <button @click="signin()">Войти</button>
</template>

<script>
export default {
  data(){
    return{
      email:'',
      pass:'',
    }
  },
  computed:{
    isLogin(){
      return this.$store.getters['authModule/isLogin']
    },
  },
  methods:{
    signin(){
      this.$store.dispatch('authModule/login', {email:this.email, password:this.pass})
      .then(()=>{
        this.$router.push('/profile')
      })
    },
  },
  mounted(){
    if(this.isLogin){
      this.$router.push('/profile')
    }
  }
}
</script>

<style>

</style>