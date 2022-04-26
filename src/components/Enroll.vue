<template>
 <div class="wrapper">
      <Header/>
      <div class="content">
          <div class="enroll">
              <div class="enroll__container container">
                  <div class="enroll__block">
                      <div class="enroll__row">
                          <div class="enroll__column">
                              <div class="enroll__subtitle title">
                                  Срочный пошив
                              </div>
                              <div class="enroll__text">
                                  <p>— Для воздушной гимнастики</p>
                                <p>— Для художественной гимнастики</p>
                                <p>— Poledance</p>
                                <p>— Эксклюзивные костюмы для занятий фитнесом, йогой, растяжкой  </p>
                                <p>— Костюмы шьются по эскизам, разработанным нами специально для вас  </p>
                                <p>— Удаленный пошив без примерки  </p>
                                <p>— Идеальная посадка на нескользо сезонов</p>
                              </div>
                              <div class="enroll__button button button_o">записаться</div>
                          </div>
                          <div class="enroll__column">
                              <div class="enroll__subtitle title">
                                  Стандартный пошив
                              </div>
                              <div class="enroll__text">
                                  <p>— Для воздушной гимнастики</p>
                                <p>— Для художественной гимнастики</p>
                                <p>— Poledance</p>
                                <p>— Эксклюзивные костюмы для занятий фитнесом, йогой, растяжкой  </p>
                                <p>— Костюмы шьются по эскизам, разработанным нами специально для вас  </p>
                                <p>— Удаленный пошив без примерки  </p>
                                <p>— Идеальная посадка на нескользо сезонов</p>
                              </div>
                              <div class="enroll__button button button_o">записаться</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="enroll__body">
                  <div class="enroll__container container">
                      <div class="enroll__inner">
                        <h2 class="enroll__title title">
                          Хотите узнать примерную стоимось костюма до заказа?
                        </h2>
                        <div class="enroll__sub-subtitle">Специально для вас мы подготовили вопросы, которые помогут ва балалаал ааывп еббобо что исать </div>
                        <router-link to="/quizpage" class="enroll__link button button_o">пройти опрос</router-link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    name:'Enroll',
    components:{
        Header,
        Footer,
    },
}
</script>

<style>

</style>