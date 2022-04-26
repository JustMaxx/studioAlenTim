<template>
      <div class="content">
          <div class="fillingform">
            <div class="fillingform__container container">
              <div class="title fillingform__title-t">Оформление заказа</div>
              <div class="ordering">
                  <div class="orders__block">
                        <div class="orders__row">
                            <div class="orders__column">
                                <div class="orders__title">
                                    Заказа №1
                                </div>
                    
                            </div>
                            <div class="orders__column">
                                <div class="orders__title">
                                    Срок изготовления
                                </div>
                                <div class="orders__date">
                                    {{order.sewindDate}}
                                </div>
                            </div>
                        </div>
                        <div class="orders__row">
                            <div class="orders__items">
                                <div class="orders__title">Детали заказа</div>
                                <div class="orders__details">  
                                    <div class="orders__accordion accordion">
                                        <button class="accordion__button" @click="activeClick(3)" :class="isActive == 3 ? '_active' : ''">Личные данные</button>
                                        <div class="accordion__panel" @click="activeClick(3)" :class="isActive == 3 ? '_active' : ''">
                                             <div class="accordion__items">
                                                 <p>Имя: {{order.name}}</p>
                                                 <p></p>
                                             </div>
                                             <div class="accordion__items">
                                                 <p>Фамилия: {{order.secondName}}</p>
                                                 <p></p>
                                             </div>
                                             <div class="accordion__items">
                                                 <p>Адрес: {{order.city +', ' + order.streetTitle + ', ' + order.streetNumber + ', ' + order.houseNumber}}</p>
                                                 <p></p>
                                             </div>
                                             <div class="accordion__items">
                                                 <p>Номер телефона:{{order.phone}}</p>
                                                 <p></p>
                                             </div>
                                             <div class="accordion__items">
                                                 <p>Удобный способ связи:</p>
                                                 <p></p>
                                             </div>
                                        </div>
                                    </div>  
                                    <div class="orders__accordion accordion">
                                        <button class="accordion__button" @click="activeClick(1)" :class="isActive == 1 ? '_active' : ''">Мерки</button>
                                        <div class="accordion__panel" @click="activeClick(1)" :class="isActive == 1 ? '_active' : ''">
                                            <div class="accordion__size size-accordion" v-if="measurement">                                                
                                                <div class="size-accordion__row" v-for="(el,index) in 10" :key="index">
                                                    <Accordionsize :title1='this.titleMeasurement[index*2]' :size1="this.measurement[index*2]" :title2='this.titleMeasurement[index*2+1]' :size2="this.measurement[index*2+1]"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="orders__accordion accordion">
                                        <button class="accordion__button" @click="activeClick(2)" :class="isActive == 2 ? '_active' : ''">Пожелания к костюму</button>
                                        <div class="accordion__panel" @click="activeClick(2)" :class="isActive == 2 ? '_active' : ''">
                                            <p>{{order.comment}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
              <div class="fillingform__button_r">
                  <button @click="this.$store.dispatch('orderModule/addNewOrder')" class="button button_o">подвердить заказ</button>
              </div> 
          </div>
               
           
          </div>
      </div>
</template>

<script>
import Accordionsize from './Accordionsize.vue'
export default {
    name: 'Ordering3',
    components: { 
        Accordionsize,  
    },
    props:{
        order: Object,
        submitFiles: Function,
    },
    data() {
        return {
        isActive: 0,
        titleMeasurement:['Высота спины до талии','Высота плеча косая','Высота бока','Ширина проймы',
        'Ширина плеча','Обхват груди','Обхват талии',
        'Обхват бедер','Высота яремной впадины','Длина полочки от талии',
        'Обхват шеи','Высота сиденья','Длина рукава',
        'Ширина проймы','Обхват бицепса','Обхват колена',
        'Обхват локтя','Длина от талии до пола','Обхват запястья','Обхват щиклотки'],
        measurement:[],
        };
    },
    watch:{
        getOrderId:{
            handler(newValue,oldValue){
                if(newValue !== oldValue){
                    console.log(newValue)
                    this.submitFiles(newValue)
                    this.$router.push('/orders')
                }
            }
        }
    },
    methods: {
        activeClick(id) {
            if(this.isActive == id ){
                this.isActive = 0
            }
            else this.isActive = id;
        },
    },
    computed:{
        getMeasurement(){
            return this.$store.getters['orderModule/getMeasurement']
        },
        isLogin(){
            return this.$store.getters['authModule/isLogin']
        },
        getRowsOrder(){
            console.log(this.measurement)
            return this.measurement.length / 2 
        },
        getOrderId(){
            return this.$store.getters['orderModule/getOrderId']
    },  
},
    mounted(){
        this.measurement = this.getMeasurement
        console.log(this.measurement)
    }
}
</script>

<style>

</style>
