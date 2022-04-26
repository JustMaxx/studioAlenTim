<template>
  <div class="wrapper">
      <Header/>
      <div class="content">
          <div class="gallery">
              <div class="gallery__container container">
                  <div class="gallery__row">
                      <div class="gallery__column">
                          <div class="gallery__items">
                              <img src="../img/01.jpg" alt="">
                          </div>
                      </div>
                      <div class="gallery__column">
                          <div class="gallery__items">
                              <img src="../img/02.jpg" alt="">
                          </div>
                      </div>
                      <div class="gallery__column">
                          <div class="gallery__items">
                              <img src="../img/03.jpg" alt="">
                          </div>
                      </div>
                      <div class="gallery__column">
                          <div class="gallery__items">
                              <img src="../img/04.jpg" alt="">
                          </div>
                      </div>  
                  </div>
                  <div class="gallery__row">
                      <div class="gallery__column">
                          <div class="gallery__items">
                              <img src="../img/05.jpg" alt="">
                          </div>
                      </div>
                      <div class="gallery__column">
                          <div class="gallery__items">
                              <img src="../img/05.jpg" alt="">
                          </div>
                      </div>
                      <div class="gallery__column">
                          <div class="gallery__items">
                              <img src="../img/05.jpg" alt="">
                          </div>
                      </div>
                      <div class="gallery__column">
                          <div class="gallery__items">
                              <img src="../img/05.jpg" alt="">
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
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    name: 'Gallery',
    components: {
        Header,
        Footer,
  }
}
</script>

<style>

</style>