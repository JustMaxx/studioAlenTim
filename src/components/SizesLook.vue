<template>
  <div class="sizes__block">
      <div class="sizes__row">
          <div class="sizes__column">
              <div class="sizes__items">
                  <p class="sizes__title">Наименование</p>
              </div>
          </div>
          <div class="sizes__column">
              <div class="sizes__items">
                  <p class="sizes__title">Значение</p>
              </div>
          </div>
          <div class="sizes__column">
              <div class="sizes__items">
                  <p class="sizes__title" @click="arrayfunc[0](50)">Прибавка</p>
              </div>
          </div>
      </div>
      <MeasurementLook v-for="(el,key) in measurements" :key="key" :title='this.titleMeasurement[key]' :size="el" :sizeVary="arrayfunc[key](el)"/>
  </div>
</template>

<script>
import MeasurementLook from './MeasurementLook.vue'
export default {
  components: { MeasurementLook },
    name: 'SizesLook',
    props:{
        measurements:Object
    },
    data(){
        return{
            titleMeasurement:['Высота спины до талии','Высота плеча косая','Высота бока','Ширина проймы',
        'Ширина плеча','Обхват груди','Обхват талии',
        'Обхват бедер','Высота яремной впадины','Длина полочки от талии',
        'Обхват шеи','Длина рукава','Обхват бицепса','Обхват локтя',
        'Обхват запястья','Высота сиденья','Высота колена',
        'Обхват колена','Длина от талии до пола','Обхват щиклотки'],
        arrayfunc: [(num)=>num-num/20,(num)=>num-num/20,(num)=>num-num/20,(num)=>{num},(num)=>{num},
        (num)=>{return (num-num/20)/4 + "/" + (num-num/20)/12 }, (num)=>(num-num/100*8)/2,(num)=>num/2,(num)=>num-num/20,(num)=>num-num/20,(num)=>(num+3)/2,(num)=>(num-num/20)+1.5,
        (num)=>(num/2)+1,(num)=>num/2,(num)=>num/2,(num)=>num-num/20,(num)=>num-num/20,(num)=>(num-num/20)/2, (num)=>(num-num/20)+1.5,(num)=>(num-num/20)/2]
        }
    }
}
</script>

<style>

</style>