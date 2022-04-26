<template>
  <header>
    <div class="header__container container">
      <div class="header__block">
        <div class="header__logo">
          <router-link to="/main" class="header__logo-link">ALEN FEEVA</router-link>
        </div>
        <nav class="header__menu" @click="activeClick" :class="isActive ? '_active' : ''">
          <ul class="header__list">
            <li>
              <p class="header__link">Мастерская</p>
              <ul class="header-submenu__list">
                <li><router-link to="/quizpage" class="header-submenu__link ">Рассчитать стоимость</router-link></li>
                <li><router-link to="/enroll" class="header-submenu__link ">Записаться на пошив</router-link></li>
                <li><router-link to="/gallery" class="header-submenu__link ">Галерея работ</router-link></li>
                <li><router-link to="/" class="header-submenu__link ">Как снять мерки</router-link></li>
              </ul>
            </li>
            <li><router-link to="/delivery" class="header__link ">Доставка и оплата</router-link></li>
            <li><router-link to="/contacts" class="header__link ">Контакты</router-link></li>
            <li><router-link to="/" class="header__link link">Профиль</router-link></li>    
            <li v-if="!isLogin"><router-link to="/signin" class="header__link link">Войти</router-link></li>
            <li v-if="isLogin">
              <router-link to="/profile"  class="header__link link">Профиль</router-link>
            </li>
            <li v-if="isLogin">
              <router-link to="/ordering"  class="header__link link">Заказать</router-link>
            </li>
            <li v-if="isLogin">
              <router-link to="/main" @click="this.logout()" class="header__link link">Выход</router-link>
            </li>
            <li><router-link to="/signin" class="header__link link">Войти</router-link></li>
          </ul>
        </nav>
        <div class="header__burger" @click="activeClick" :class="isActive ? '_active' : ''">
          <span></span>
        </div>
      </div>     
    </div>
  </header>
  
</template>


<script>
export default {
  name: 'HeaderDefault',
  data() {
    return {
      isActive: false,
    };
  },
  computed:{
    isLogin(){
      return this.$store.getters['authModule/isLogin']
    },
  },
  methods: {
    activeClick() {
      this.isActive = !this.isActive;
    },
    logout(){
      this.$store.dispatch('authModule/logout')
    }
  },
}
</script>
