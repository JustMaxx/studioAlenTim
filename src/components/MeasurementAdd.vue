<template>
  <div class="sizes__row">
        <div class="sizes__column">
            <div class="sizes__items">
                <p class="sizes__item">{{title}}</p>
            </div>
        </div>
        <div class="sizes__column">
            <div class="sizes__items">
                <input v-model="value" @change="this.$emit('addMeasurement', {id,value})" type="text" placeholder="Ввод">
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'MeasurementAdd',
    props:{
        title: String,
        id:Number,
    },
    data(){
        return{
            value:'',
        }
    }
}
</script>

<style>

</style>