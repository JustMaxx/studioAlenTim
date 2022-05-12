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
                  <p class="sizes__title">Прибавка</p>
              </div>
          </div>
      </div>
      <MeasurementAdd v-for="(el,key) in titleMeasurement" :key="key" :title='this.titleMeasurement[key]' :id="key" :size="56" :sizeVary="50"/>

  </div>
</template>

<script>
import MeasurementAdd from './MeasurementAdd.vue'
export default {
  components: { MeasurementAdd },
    name: 'SizesAdd',
    data(){
        return {
            titleMeasurement:['Высота спины до талии','Высота плеча косая','Высота бока','Ширина проймы',
        'Ширина плеча','Обхват груди','Обхват талии',
        'Обхват бедер','Высота яремной впадины','Длина полочки от талии',
        'Обхват шеи','Длина рукава','Обхват бицепса','Обхват локтя',
        'Обхват запястья','Высота сиденья','Высота колена',
        'Обхват колена','Длина от талии до пола','Обхват щиклотки'],
        }
    }

}
</script>

<style>

</style>