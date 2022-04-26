<template>
      <div class="content">
          <div class="fillingform">
            <div class="fillingform__container container">
              <div class="title fillingform__title-t">Оформление заказа</div>
              <div class="fillingform__title title">
                              Мерки
                </div>
                <div class="fillingform__text">
                    Как правильно снять мерк можете посмотреть <span><router-link to="/" class="fillingform__link ">здесь</router-link></span> 
                </div>
              <div class="size__row">
                  <div class="size__column" v-for='(el,index) in getCountColumn' :key="index">
                      <div class="size__items" v-for='(el,i) in getItems(index)' :key="index+i">
                            <div class="size__name">{{titleMeasurement[index*5+i]}}</div>
                            <div class="size__item">
                                <input v-model="measurement[index*5+i]" type="text" class="size__input input">
                            </div>
                      </div>                      
                  </div>                 
              </div>
              <div class="fillingform__button">
                  <button class="button button_o" @click="this.$emit('changeNumPage',1);addMeasurement()">назад</button>
              </div>  
              <div class="fillingform__button">
                  <button class="button button_o" @click="this.$emit('changeNumPage',3);addMeasurement()">дальше</button>
              </div>  
            </div>
          </div>
      </div>
</template>

<script>

export default {
    name: 'Ordering2',
    data(){
        return{
            titleMeasurement:['Высота спины до талии','Высота плеча косая','Высота бока','Ширина проймы',
        'Ширина плеча','Обхват груди','Обхват талии',
        'Обхват бедер','Высота яремной впадины','Длина полочки от талии',
        'Обхват шеи','Длина рукава','Обхват бицепса','Обхват локтя',
        'Обхват запястья','Высота сиденья','Высота колена',
        'Обхват колена','Длина от талии до пола','Обхват щиклотки'],
            measurement:[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        }
    },
    computed:{
        getCountColumn(){
            return Math.ceil(this.measurement.length / 5)
        },
    },
    methods:{
        addMeasurement(){
            this.$store.dispatch('orderModule/setMeasurement',this.measurement)
        },
        getItems(index){
            return this.measurement.slice(index*5,index*5+5)
        }
    }

}
</script>

<style>

</style>