<template>
  <router-view>
  </router-view>
</template>

<script>

export default {
  mounted(){
    if(this.$store.getters['authModule/isLogin']){
      this.$store.dispatch('authModule/verifyToken')
    }
  }
}
</script>

<style lang="scss">
@import './src/scss/style.scss'
</style>
