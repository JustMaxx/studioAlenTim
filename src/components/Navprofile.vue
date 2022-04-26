<template>
  <div class="navprofile">
      <div class="navprofile__container container">
        <div class="navprofile__block">
            <nav class="navprofile__menu" >
                <ul class="navprofile__list">
                    <li><router-link to="/profile" class="navprofile__link">Профиль</router-link></li>
                    <li><router-link to="/orders" class="navprofile__link">Заказы</router-link></li>
                    <li><router-link to="/" class="navprofile__link">Мерки</router-link></li>
                    <li><router-link to="/" class="navprofile__link">Безопасность</router-link></li>
                </ul>
            </nav>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'Navprofile',
}
</script>

<style>

</style>