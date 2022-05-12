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
                      <div class="control__click">
                          <router-link to="/control2">В ожидании</router-link>
                      </div>
                      <div class="control__click">
                          <router-link to="/control3">В процессе</router-link>
                      </div>
                      <div class="control__click">
                          <router-link to="/control4">Завершенные</router-link>
                      </div>
                  </div>
              </div>
          </div>
    </div>
    <div class="order-details" v-if="order">
      <div class="order-details__container container">
        <div class="title">Информация о заказе</div>
        <div class="order-details__row">
          <div class="order-details__column">
          <div class="order-details__title">Личные данные</div>
          <div class="order-details__body">
            <div class="order-details__info">
              <div class="order-details__items">
                <div class="order-details__item">
                  <p class="order-details__text">Имя:</p>
                  <p class="order-details__data">{{order.firstName}}</p>
                </div>
                 <div class="order-details__item">
                  <p class="order-details__text">Фамилия:</p>
                  <p class="order-details__data">{{order.lastName}}</p>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item">
                  <p class="order-details__text">Номер телефона:</p>
                  <p class="order-details__data">{{order.number}}</p>
                </div>
                 <div class="order-details__item">
                  <p class="order-details__text">Дата пошива:</p>
                  <p class="order-details__data order-details__data_r">{{order.date}}</p>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Удобный способ связи:</p>
                  <p class="order-details__data">Ссылка на соц сеть</p>
                </div>
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Адрес:</p>
                  <p class="order-details__data">{{order.adress}}</p>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Описание:</p>
                  <p class="order-details__data">{{order.comment}}</p>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Эскизы от заказчика:</p>
                  <div class="order-details__image">
                    <div class="order-details__item-image" v-for="(el,key) in order.pathPhoto" :key="key" >
                      <img :src="require(`../img/${this.$route.params.id}/${el}`)" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Мои эскизы:</p>
                  <div class="order-details__image">
                    <div class="order-details__item-image" v-for="(el,key) in order.pathSketch" :key="key" >
                      <img :src="require(`../img/${this.$route.params.id}/${el}`)" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="order-details__column order-details__column_s">
            <div class="order-details__title">Мерки</div>
            <div class="order-details__body">
              <div class="order-details__sizes sizes">
                <SizesLook :measurements="order.measurements"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SizesLook from './SizesLook.vue';
import HeadControl from './HeadControl.vue';
export default {
  name: "ControlOrderLook",
  components: {
      SizesLook,
      HeadControl 
    },
    data(){
      return {
        order:null,
      }
    },
    computed:{
      getOrderById(){
        return this.$store.getters['orderModule/getOrderById'](this.$route.params.id)
      }
    },
    methods:{
    },

    mounted(){
        this.$store.dispatch('orderModule/setAllOrders')
        .then(()=>{
            console.log(this.$store.getters['orderModule/getAllOrders'])
            console.log(this.getOrderById)
        })
        this.order = this.getOrderById

    }
  };
  
</script>

<style></style>
