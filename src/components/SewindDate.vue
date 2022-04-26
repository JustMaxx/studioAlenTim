<template>
  <div class="wrapper">
      <HeadControl/>
      <div class="sewinddate">
          <div class="sewinddate__container container">
              <div class="sewinddate__title title">
                  Даты на пошив
              </div>
                <div class="sewinddate__row">
                    <div class="sewinddate__column">
                        <div class="sewinddate__list list-sewinddate">
                            <div class="list-sewinddate__row">
                                <div class="list-sewinddate__column">
                                    <div class="list-sewinddate__items">
                                        <div class="list-sewinddate__title">Дата</div>
                                    </div>
                                </div>
                                <div class="list-sewinddate__column">
                                    <div class="list-sewinddate__items">
                                        <div class="list-sewinddate__title">Лимит</div>
                                    </div>
                                </div>
                                <div class="list-sewinddate__column">
                                    <div class="list-sewinddate__items">
                                        <div class="list-sewinddate__title">Удалить</div>
                                    </div>
                                </div>
                            </div>                            
                            <ListSewindDate v-for="(el,key) in getAllDates" :key="key" :item="el" :removeDate="this.removeDate" :getDates="this.getDates"/>
                        </div>
                    </div>
                    <div class="sewinddate__column">
                        <div class="sewinddate__newdate newdate-sewinddate">
                            <div class="newdate-sewinddate__items">
                                <div class="newdate-sewinddate__text">Добавить дату</div>
                                <input type="date" placeholder="Введите дату" v-model="date" >
                            </div>
                            <div class="newdate-sewinddate__items">
                                <div class="newdate-sewinddate__text">Лимит костюмов на дату</div>
                                <input type="number" placeholder="Введите лимит" v-model="limit">
                            </div>
                            <div class="sewinddate__button">
                                <button class="button button_o" @click="addDate({date,limit}).then(()=>this.getDates())">добавить</button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import HeadControl from './HeadControl.vue';
import ListSewindDate from './ListSewindDate.vue';
// import axios from 'axios'
import {mapActions} from 'vuex'
export default {
name: 'SewindDate',
components:{

HeadControl,
ListSewindDate,

},
data(){
    return {
        date: null,
        limit: null,
        dates:[]
    }
},

computed:{
    getAllDates(){
        return this.$store.getters['sewindModule/getDates']
    }
},
methods:{
    ...mapActions(
        {addDate: 'sewindModule/addDate',
        removeDate: 'sewindModule/removeDate',
        getDates:'sewindModule/getDates'}

    )
    // showDate(){
    //     axios.post('http://localhost:8080/api/sewind/addDate', {
    //         date: this.date,
    //         limit: this.limit
    //     })
    //     .then(()=>this.getDates())      
    // },
    // removeDate(id){
    //     axios.post('http://localhost:8080/api/sewind/removeDate', {id})
    //     .then(()=>this.getDates())
    // },
    // getDates(){
    //     axios.post('http://localhost:8080/api/sewind/getDates')
    //     .then((res)=>{
    //         this.dates = res.data
    //     })
    // }
},
mounted(){
    this.getDates()
    .then((data)=>this.dates=data)
}
}
</script>

<style>

</style>