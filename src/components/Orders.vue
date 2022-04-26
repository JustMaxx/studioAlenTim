<template>
  <div class="wrapper">
      <Header/>
      <div class="content">
          <Navprofile/>
          <div class="orders">
              <div class="orders__container container">
                  <div v-for="(item,key) in getUserOrder" :key="key" class="orders__block">
                        <div class="orders__row">
                            <div class="orders__column">
                                <div class="orders__title">
                                    Заказа № {{item.id}}
                                </div>
                                <div class="orders__status orders__status_2">
                                    {{this.getStatus(item.status)}}
                                </div>
                            </div>
                            <div class="orders__column">
                                <div class="orders__title">
                                    Срок изготовления
                                </div>
                                <div class="orders__date">
                                    пока без этого
                                </div>
                            </div>
                            <div class="orders__column">
                                <div class="orders__title">
                                    Предоплата
                                </div>
                                <div class="orders__prepayment">
                                    {{item.prepayment}} Р
                                </div>
                            </div>
                        </div>
                        <div class="orders__row">
                            <div class="orders__items">
                                <div class="orders__title">Детали заказа</div>
                                <div class="orders__details">
                                    
                                    <div class="orders__accordion accordion">
                                        <button class="accordion__button" @click="activeClick(key+'1')" :class="isActive == key+'1' ? '_active' : ''">Мерки</button>
                                        <div class="accordion__panel" @click="activeClick(key+'1')" :class="isActive == key+'1' ? '_active' : ''">
                                            <div class="accordion__size size-accordion">
                                                <Accordionsize title1='Высота спины до талии' size1="145" title2='Высота плеча косая' size2="22"/>
                                                <Accordionsize title1='Высота бока' size1="45" title2='Ширина проймы' size2="45"/>
                                                <Accordionsize title1='Ширина плеча' size1="45" title2='Обхват груди' size2="145"/>
                                                <Accordionsize title1='Обхват талии' size1="45" title2='Обхват бедер' size2="45"/>
                                                <Accordionsize title1='Высота яремной впадины' size1="45" title2='Длина полочки от талии' size2="45"/>
                                                <Accordionsize title1='Обхват шеи' size1="45" title2='Высота сиденья' size2="45"/>
                                                <Accordionsize title1='Длина рукава' size1="45" title2='Ширина проймы' size2="45"/>
                                                <Accordionsize title1='Обхват бицепса' size1="45" title2='Обхват колена' size2="45"/>
                                                <Accordionsize title1='Обхват локтя' size1="45" title2='Длина от талии до пола' size2="45"/>
                                                <Accordionsize title1='Обхват запястья' size1="45" title2='Обхват щиклотки' size2="45"/>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div class="orders__accordion accordion">
                                        <button class="accordion__button" @click="activeClick(key+'2')" :class="isActive == key+'2' ? '_active' : ''">Эскиз</button>
                                        <div class="accordion__panel " @click="activeClick(key+'2')" :class="isActive == key+'2'? '_active' : ''">
                                            <p>Lorem ipsum...</p>
                                        </div>
                                    </div>
                                    <div class="orders__accordion accordion">
                                        <button class="accordion__button" @click="activeClick(key+'3')" :class="isActive == key+'3' ? '_active' : ''">Пожелания к костюму</button>
                                        <div class="accordion__panel" @click="activeClick(key+'3')" :class="isActive == key+'3' ? '_active' : ''">
                                            <p>{{item.comment}}</p>
                                        </div>
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
import Header from './Header.vue'
import Navprofile from './Navprofile.vue'
import Footer from './Footer.vue'
import Accordionsize from './Accordionsize.vue'

export default {
    name: 'Orders',
    components:{
        Header,
        Navprofile,
        Footer,
        Accordionsize,
    },
    data() {
    return {
      isActive: 0,
    };
  },
  computed:{
    getUserId(){
        return this.$store.getters['userModule/getUserData']
    },
    getUserOrder(){
        return this.$store.getters['orderModule/getUserOrder']
    }
  },
  methods: {
    activeClick(id) {
        console.log(id)
        if(this.isActive == id ){
            this.isActive = 0
        }
        else this.isActive = id;
    },
    async getOrder(){
        this.$store.dispatch('orderModule/setUserOrder', this.getUserId.id)
    },
    getStatus(id){
        if(id==0){
            return "В ожидании"
        }
        if(id==1){
            return "В работе"
        }
        else{
            return "Что-то другое"
        }        
    },
  },
  mounted(){
      this.getOrder()
  }
}
</script>

<style>

</style>