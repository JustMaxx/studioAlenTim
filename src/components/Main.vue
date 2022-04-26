<template>
  <div class="wrapper">
        <header class="header header_main">
            <div class="header__container container">
                <div class="header__block">
                    <div class="header__logo">
                        <router-link to="/main" class="header__logo-link">ALEN FEEVA</router-link>
                    </div>
                    <nav class="header__menu" @click="activeClick" :class="isActive ? '_active' : ''">
                        <ul class="header__list">
                            <li>
                                <p class="header__link">Мастерская</p>
                                <ul class="header-submenu__list header-submenu__list_main">
                                    <li><router-link to="/quizpage" class="header-submenu__link">Рассчитать стоимость</router-link></li>
                                    <li><router-link to="/enroll" class="header-submenu__link">Записаться на пошив</router-link></li>
                                    <li><router-link to="/" class="header-submenu__link">Галерея работ</router-link></li>
                                    <li><router-link to="/" class="header-submenu__link">Как снять мерки</router-link></li>
                                </ul>
                            </li>
                            <li><router-link to="/delivery" class="header__link">Доставка и оплата</router-link></li>
                            <li><router-link to="/contacts" class="header__link">Контакты</router-link></li>
                            <li><router-link to="/signin" class="header__link">Войти</router-link></li>
                        </ul>
                    </nav>
                    <div class="header__burger" @click="activeClick" :class="isActive ? '_active' : ''">
                        <span></span>
                    </div>
                </div>     
            </div>
        </header>
        <div class="main-screen">
            <!-- <div class="main-screen__items">
            <div class="main-screen__title title">Творческая студия Алёны Феевой</div>
            </div>-->
            <div class="main-screen__block">
                <div class="main-screen__image">
                    <img src="../img/01.jpg" alt="">
                </div>
                <div class="main-screen__image">
                    <img src="../img/02.jpg" alt="">
                </div>
                <div class="main-screen__image">
                    <img src="../img/03.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="main-content">
        <div class="about">
            <div class="about__container container">
                <div class="about__row">
                    <div class="about__column">
                        <div class="about__image">
                            <img src="../img/04.jpg" alt="">
                        </div>
                    </div>
                    <div class="about__column">
                        <div class="about__items">
                            <h2 class="about__title title">Индивидуальный пошив костюмов</h2>
                            <div class="about__text">
                                <p>— Для воздушной гимнастики</p>
                                <p>— Для художественной гимнастики</p>
                                <p>— Poledance</p>
                                <p>— Эксклюзивные костюмы для занятий фитнесом, йогой, растяжкой  </p>
                                <p>— Костюмы шьются по эскизам, разработанным нами специально для вас  </p>
                                <p>— Удаленный пошив без примерки  </p>
                                <p>— Идеальная посадка на нескользо сезонов</p>
                            </div>
                            <router-link to="/ordering" class="about__link">заказать</router-link>
                        </div>
                    </div>
                </div>
                <div class="about__block">
                    <h3 class="about__subtitle title">
                        Наша география – от Мурманска до Сахалина
                    </h3>
                    <div class="about__img">
                        <img src="../img/1.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="gallery-main">
            <div class="gallery-main__container container">
                <div class="gallery-main__content">
                    <div class="gallery-main__body">
                        <h2 class="gallery-main__title title">
                            300+ созданных в нашей мастерской образов
                        </h2>
                        <div class="gallery-main__link about__link">смотреть еще</div>
                    </div>
                    <div class="gallery-main__slider slider">
                        <div class="slider__block">
                            <div class="slider__image-main">
                                <img src="../img/01.jpg" alt="">
                            </div>
                            <div class="slider__track">
                                <div class="slider__image">
                                    <div class="slider__image-secondary">
                                        <img src="../img/01.jpg" alt="">
                                    </div>
                                    <div class="slider__image-track">
                                        <div class="slider__image-secondary slider__image-secondary_other">
                                            <img src="../img/03.jpg" alt="">
                                        </div>
                                        <div class="slider__image-secondary slider__image-secondary_other">
                                            <img src="../img/01.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="slider__list">
                                    <ul class="slider__dots">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>  
                                    <div class="slider__arrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
  </div>
</template>

<script>
export default {
name: 'Main',
data() {
    return {
      isActive: false,
    };
  },
  methods: {
    activeClick() {
      this.isActive = !this.isActive;
    },
  },
}
</script>

<style>

</style>