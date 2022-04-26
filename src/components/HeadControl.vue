<template>
  <header class="headcontrol">
    <div class="headcontrol__container container">
      <div class="headcontrol__block">
          <nav class="headcontrol__menu">
              <ul class="headcontrol__list">
                <li><router-link to="/sewinddate" class="headcontrol__link ">Даты на пошив</router-link></li>
                <li><router-link to="/control1" class="headcontrol__link ">Новые заказы</router-link></li>
                  <li><router-link to="/" class="headcontrol__link ">Выйти</router-link></li>
                  
              </ul>
          </nav>
      </div>
    </div>   
  </header>
  
</template>


<script>
export default {
  name: 'HeadControl',
  
}
</script>
