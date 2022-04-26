<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div class="delivery">
        <div class="delivery__container container">
               <div class="delivery__row">
                 <div class="delivery__column">
                   <h2 class="delivery__title title">
                     ПО ЧЕБОКСАРАМ
                   </h2>
                   <div class="delivery__block">
                     <div class="delivery__items">
                      <div class="delivery__image">
                        <img src="../img/1.png" alt="">
                      </div>
                      <div class="delivery__text">
                       <p>Доставка по Чебоксарам осуществляется</p>
                       <p>- C помощью Yandex.Доставки</p>
                       <p>- Либо самовывоз с возможностью примерки по адресу г. Чебоксары, ул. Шумилова, д. 29.</p> 
                      </div>
                    </div>
                    <div class="delivery__items">
                      <div class="delivery__image">
                        <img src="../img/2.png" alt="">
                      </div>
                      <div class="delivery__text">
                      <p>Оплата переводом на карту или наличкой при самовывозе</p>
                      </div>
                    </div>
                   </div>
                  
                 </div>
                 <div class="delivery__column">
                   <h2 class="delivery__title title">
                     ПО РОССИИ
                   </h2>
                   <div class="delivery__block">
                     <div class="delivery__items">
                      <div class="delivery__image">
                        <img src="../img/3.png" alt="">
                      </div>
                      <div class="delivery__text">
                       <p>Доставка осуществляется по всей России</p>
                      <p>Цена доставки*:</p>
                      <p>- Почтой России от 3 дней и больше</p>
                      <p>- СДЭК от 1 дня и больше</p>
                      <p>Срок доствки*: </p>
                      <p>- Почтой росии от 350 рублей</p>
                      <p>- СДЭК от 250 рублей</p>
                      <p>*срок и цена доставки зависит от вашего региона</p>
                      </div>
                    </div>
                    <div class="delivery__items">
                      <div class="delivery__image">
                        <img src="../img/2.png" alt="">
                      </div>
                      <div class="delivery__text">
                       <p>Оплата возможна только по карте</p>
                      </div>
                    </div>
                   </div>
                  
                 </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Header from "./Header.vue";
export default {
  name: "Delivery",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
