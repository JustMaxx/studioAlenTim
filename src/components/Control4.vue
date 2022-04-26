<template>
  <div class="wrapper">
      <HeadControl/>
      <div class="control">
          <div class="control__container container">
              <div class="control__menu">
                  <div class="control__list">
                      <div class="control__click" >
                          <router-link to="/control1">Новые заказы</router-link>
                      </div>
                      <div class="control__click ">
                          <router-link to="/control2">В ожидании</router-link>
                      </div>
                      <div class="control__click">
                          <router-link to="/control3">В процессе</router-link>
                      </div>
                      <div class="control__click _active">
                          <router-link to="/control4">Завершенные</router-link>
                      </div>
                  </div>
              </div>
              <div class="control__body">
                  <div class="control__row">
                        <div class="control__column">
                            <div class="control__title">ФИО</div>
                        </div>
                        <div class="control__column">
                            <div class="control__title">Дата пошива</div>
                        </div>
                        <div class="control__column">
                            <div class="control__title">Описание</div>
                        </div>
                        <div class="control__column">
                            <div class="control__title">Номер телефона</div>
                        </div>
                  </div>
                  <CompletedOrder/>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
import CompletedOrder from './CompletedOrder.vue';
import HeadControl from './HeadControl.vue';

export default {
name:"Control4",
components:{
CompletedOrder,
HeadControl,
},
}
</script>

<style>

</style>