<template>
  <footer class="footer">
      <div class="footer__container container">
          <div class="footer__block">
              <div class="footer__logo">
                   <router-link to="/main" class="footer__logo-link">ALEN FEEVA</router-link>
              </div>
              <nav class="footer__menu">
                  <ul class="footer__list">
                      <li><p class="footer__text">Мастерская</p></li>
                      <li><router-link to="/quizpage" class="footer__sub-link ">Рассчитать стоимость</router-link></li>
                      <li><router-link to="/enroll" class="footer__sub-link ">Записаться на пошив</router-link></li>
                      <li><router-link to="/gallery" class="footer__sub-link ">Галерея</router-link></li>
                      <li><router-link to="/" class="footer__sub-link ">Как снять мерки</router-link></li>
                      <li><router-link to="/" class="footer__link ">Контакты</router-link></li>
                      <li><router-link to="/" class="footer__link ">Доставка и опалата</router-link></li>
                  </ul>
              </nav>
              <div class="footer__contacts">
                  <div class="footer__adress">
                      <p>Чувашская республика, г. Чебоксары,</p>
                      <p>ул. Шумилова, д.29,</p>
                      <p>428000</p>
                  </div>
                  <div class="footer__number">
                      <p>8 (123) 456 78-89 *</p>
                      <p>*отвечаем на звонки с 9:00 до 19:00 по будням, с 11:00 до 17:00 по выходным</p>
                  </div>
                  <div class="footer__icon">
                        <a href="" class="contacts__social-items">
                            <img src="../img/vk.png" alt="">
                        </a>
                        <a href="" class="contacts__social-items">
                            <img src="../img/telegram.png" alt="">
                        </a>
                        <a href="" class="contacts__social-items">
                            <img src="../img/instagram.png" alt="">
                        </a>
                        <a href="" class="contacts__social-items">
                            <img src="../img/googlel.png" alt="">
                        </a>
                  </div>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
name: "Footer",
}
</script>

<style>

</style>