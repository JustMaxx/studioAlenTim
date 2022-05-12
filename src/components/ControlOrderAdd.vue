<template>
  <div class="wrapper">
    <HeadControl/>
    <div class="control">
          <div class="control__container container">
              <div class="control__menu">
                  <div class="control__list">
                      <div class="control__click" >
                          <router-link to="/control1">Новые заказы</router-link>
                      </div>
                      <div class="control__click">
                          <router-link to="/control2">В ожидании</router-link>
                      </div>
                      <div class="control__click">
                          <router-link to="/control3">В процессе</router-link>
                      </div>
                      <div class="control__click">
                          <router-link to="/control4">Завершенные</router-link>
                      </div>
                  </div>
              </div>
          </div>
    </div>
    <div class="order-details">
      <div class="order-details__container container">
        <div class="title">Информация о заказе</div>
        <div class="order-details__row">
          <div class="order-details__column">
          <div class="order-details__title">Личные данные</div>
          <div class="order-details__body">
            <div class="order-details__info">
              <div class="order-details__items">
                <div class="order-details__item">
                  <p class="order-details__text">Имя:</p>
                  <div class="order-details__data"><input v-model="order.firstName" type="text"></div>
                </div>
                 <div class="order-details__item">
                  <p class="order-details__text">Фамилия:</p>
                  <div class="order-details__data"><input v-model="order.lastName" type="text"></div>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item">
                  <p class="order-details__text">Номер телефона:</p>
                  <div class="order-details__data"><input v-model="order.number" type="text"></div>
                </div>
                 <div class="order-details__item">
                  <p class="order-details__text">Дата пошива:</p>
                  <div class="order-details__data">
                    <select v-model="order.dateId" class="fillingform__select input">
                      <option hidden disabled selected>Выбрать</option>
                      <option v-for="(el,key) in getDates" :key="key" class="fillingform__options" :value="el.id">{{el.date}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Удобный способ связи:</p>
                  <div class="order-details__data"><input type="text"></div>
                </div>
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Адрес:</p>
                  <div class="order-details__data"><input v-model="order.adress" type="text"></div>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Описание:</p>
                  <div class="order-details__data">
                      <textarea v-model="order.comment" type="text" ></textarea>
                  </div>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Эскизы от заказчика:</p>
                  <div class="order-details__block">
                       <input type="file" name="userFiles" ref="userFilesImg" multiple v-on:change="handleFilesUpload('userFilesImg')" accept="image/*">
                       <button class="button button_o" @click="addFiles('userFilesImg')">добавить фото</button>
                       <div class="order-details__image">
                            <div class="order-details__item-image" v-for="(file, key) in userFiles" :key="key" >                                        
                                <img  v-bind:src="userFiles[key]"/>
                                <span @click="removeFile('userFilesImg','userFiles',key)">X</span>
                            </div>
                       </div>
                  </div>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Мои эскизы:</p>
                  <div class="order-details__block">
                       <input type="file" name="adminFiles" ref="adminFilesImg" multiple v-on:change="handleFilesUpload('adminFilesImg')" accept="image/*">
                       <button class="button button_o" @click="addFiles('adminFilesImg')">добавить фото</button>
                       <div class="order-details__image">
                            <div class="order-details__item-image" v-for="(file, key) in adminFiles" :key="key" >                                        
                                <img  v-bind:src="adminFiles[key]"/>
                                <span @click="removeFile('adminFilesImg','adminFiles',key)">X</span>
                            </div>
                       </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="order-details__column order-details__column_s">
            <div class="order-details__title">Мерки</div>
            <div class="order-details__body">
              <div class="order-details__sizes sizes">
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
                   </div>
                  <MeasurementAdd v-for="(el,key) in titleMeasurement" :key="key" :title='this.titleMeasurement[key]' :id="key" v-on:addMeasurement="addMeasurement"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="order-details__button">
          <button class="button button_o" @click="addNewOrder()">
            сохранить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MeasurementAdd from './MeasurementAdd.vue';
import HeadControl from './HeadControl.vue';
export default {
  components: {MeasurementAdd,HeadControl },
  name: "ControlOrderAdd",
  data(){
      return {
          userFiles:[],
          adminFiles:[],
          userFilesImg:[],
          adminFilesImg:[],
          filesimg:[],
          order:{
            firstName:'',
            lastName:'',
            email:'',
            number:'',
            city:'',
            streetTitle:'',
            streetNumber:'',
            houseNumber:'',
            adress:'',
            comment:'',
            id:'',
            dateId:null,
            sewindDate: null,
            measurements:[],
          },
          measurements:[],
          titleMeasurement:['Высота спины до талии','Высота плеча косая','Высота бока','Ширина проймы',
        'Ширина плеча','Обхват груди','Обхват талии',
        'Обхват бедер','Высота яремной впадины','Длина полочки от талии',
        'Обхват шеи','Длина рукава','Обхват бицепса','Обхват локтя',
        'Обхват запястья','Высота сиденья','Высота колена',
        'Обхват колена','Длина от талии до пола','Обхват щиклотки'],
          
      }
  },
  watch:{
    orderCreated:{
      handler(newValue,oldValue){
        if(newValue !== oldValue){
          this.submitFiles(newValue)
        }
      }
    }
  },
  computed:{
    orderCreated(){
      return this.$store.getters['orderModule/getOrderId']
    },
    getDates(){
        return this.$store.getters['sewindModule/getDates']
    },  
  },
   methods:{
    addFiles(title){
        this.$refs[title].click();
    },
    handleFilesUpload(title){
        let uploadedFiles = this.$refs[title].files;
        let resultTitle = this.$refs[title].name

        for( var i = 0; i < uploadedFiles.length; i++ ){
          console.log(this[title])
            if(!this[title].filter(file=>file.name == uploadedFiles[i].name).length){
                this[title].push( uploadedFiles[i] );
            }
        }
        this.getImagePreviews(title,resultTitle);
    },
    getImagePreviews(title,resultTitle){
        for( let i = 0; i < this[title].length; i++ ){    
            if ( /\.(jpe?g|png|gif)$/i.test( this[title][i].name ) ) {  
                
                let reader = new FileReader();
                reader.addEventListener("load", function(){
                    this[resultTitle][i] = reader.result;
                }.bind(this), false);
                reader.readAsDataURL( this[title][i] );
            }
        }
    },
    
    removeFile(title, resultTitle ,key ){
        this[resultTitle].splice( key, 1 );
        this[title].splice( key, 1 );
    },
    check(){
      console.log(this.order.measurements)
    },
    addMeasurement(data){
      console.log(data)
      this.order.measurements[data.id] = data.value
    },
    addNewOrder(){
        this.$store.dispatch('orderModule/addNewOrderByAdmin',this.order)
    },
    submitFiles(orderId){
        let formData = new FormData();
        formData.append('orderId', orderId)        
        for( var i = 0; i < this.userFilesImg.length; i++ ){
            let file = this.userFilesImg[i];
            formData.append('listUserTitle', file.name)   
            formData.append('images', file);
        }
        for( var j = 0; j < this.adminFilesImg.length; j++ ){
            let file = this.adminFilesImg[j];
            formData.append('listAdminTitle', `admin${file.name}`)   
            formData.append('images', file, `admin${file.name}`);
        }
        console.log(formData)
        axios.post('http://localhost:8080/api/order/uploadImageByAdmin',formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        ).then(function(){
            console.log('SUCCESS!!');
        })
        .catch(function(){
            console.log('FAILURE!!');
        });
    },
    async getAvlDates(){
        this.$store.dispatch('sewindModule/getAvlDates')
    },
    setDate(){
        this.order.sewindDate = this.getDates.filter(el=>el.id == this.order.dateId? el.date:'')[0].date
    },
  },
  mounted(){
    this.getAvlDates()
  }
};
</script>

<style>
input[type="file"]{
    display: none;
  }
  </style>
