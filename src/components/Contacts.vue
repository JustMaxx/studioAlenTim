<template>
  <div class="wrapper">
     
      <Header/>
      <div class="content">
          <div class="contacts">
              <div class="contacts__container container">
                <div class="contacts__row">
                  <div class="contacts__column">
                      <div class="contacts__block">
                          <h1 class="contacts__title title">Контакты</h1>
                          <div class="contacts__text contacts__text_1">
                            Чувашская республика, г. Чебоксары, 
                            ул. Шумилова, д.29,
                            428000
                            </div>
                          <div class="contacts__telephone">8 (123) 456 78-89 *</div>
                          <div class="contacts__subtext">*отвечаем на звонки с 9:00 до 19:00 по будням, с 11:00 до 17:00 по выходным</div>
                      </div>
                  </div>
                  <div class="contacts__column">
                      <div class="contacts__block">
                          <div class="contacts__text">Оставьте заявку и мы с Вами свяжемся</div>
                            <form class="contacts__form">
                                <div class="contacts__input">
                                    <input type="text" placeholder="Имя">
                                </div>
                                <div class="contacts__input">
                                    <input type="text" placeholder="Номер телефона">
                                </div>
                                 <div class="contacts__button">
                                    <button class="button">оставить заявку</button>
                                </div>
                            </form>
                            <div class="contacts__social">
                                <a href="" class="contacts__social-items">
                                    <img src="../img/vk.png" alt="">
                                </a>
                                <a href="" class="contacts__social-items">
                                    <img src="../img/telegram.png" alt="">
                                </a>
                                <a href="" class="contacts__social-items">
                                    <img src="../img/googlel.png" alt="">
                                </a>
                            </div>
                      </div>
                  </div>
                </div>
                <div class="contacts__map">
                 <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff4a83dce97d002cbde814f8b582d5973ffbfd5f7a36f0799d0f805627d8b3cd&amp;source=constructor" 
                 width="100%" height="300" frameborder="0"></iframe>
                </div>
              </div>
          </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'
export default {
     name: 'Contacts',
     components:{
        Header,
        Footer,
    },
}
</script>

<style>

</style>