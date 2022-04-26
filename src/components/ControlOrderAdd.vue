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
                  <div class="order-details__data"><input type="text"></div>
                </div>
                 <div class="order-details__item">
                  <p class="order-details__text">Фамилия:</p>
                  <div class="order-details__data"><input type="text"></div>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item">
                  <p class="order-details__text">Номер телефона:</p>
                  <div class="order-details__data"><input type="text"></div>
                </div>
                 <div class="order-details__item">
                  <p class="order-details__text">Дата пошива:</p>
                  <div class="order-details__data"><input type="date"></div>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Удобный способ связи:</p>
                  <div class="order-details__data"><input type="text"></div>
                </div>
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Адрес:</p>
                  <div class="order-details__data"><input type="text"></div>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Описание:</p>
                  <div class="order-details__data">
                      <textarea type="text" ></textarea>
                  </div>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Эскизы от заказчика:</p>
                  <div class="order-details__block">
                       <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()" accept="image/*">
                       <button class="button button_o" @click="addFiles()">добавить фото</button>
                       <div class="order-details__image">
                            <div class="order-details__item-image" v-for="(file, key) in files" :key="key" >                                        
                                <img  v-bind:src="filesimg[key]"/>
                                <span @click="removeFile()">X</span>
                            </div>
                       </div>
                  </div>
                </div>
              </div>
              <div class="order-details__items">
                <div class="order-details__item order-details__item_d">
                  <p class="order-details__text order-details__text_d">Мои эскизы:</p>
                  <div class="order-details__block">
                       <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()" accept="image/*">
                       <button class="button button_o" @click="addFiles()">добавить фото</button>
                       <div class="order-details__image">
                            <div class="order-details__item-image" v-for="(file, key) in files" :key="key" >                                        
                                <img  v-bind:src="filesimg[key]"/>
                                <span @click="removeFile()">X</span>
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
                <SizesAdd/>
              </div>
            </div>
          </div>
        </div>
        <div class="order-details__button">
          <button class="button button_o">
            сохранить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SizesAdd from './SizesAdd.vue';
import HeadControl from './HeadControl.vue';
export default {
  components: {SizesAdd,HeadControl },
  name: "ControlOrderAdd",
  data(){
      return {
          files:[],
          filesimg:[],
      }
  },
   methods:{
    addFiles(){
        this.$refs.files.click();
    },
    handleFilesUpload(){
        let uploadedFiles = this.$refs.files.files;
        for( var i = 0; i < uploadedFiles.length; i++ ){
            console.log(this.files)
            if(!this.files.filter(file=>file.name == uploadedFiles[i].name).length){
                this.files.push( uploadedFiles[i] );
            }
        }
        this.getImagePreviews();
    },
    getImagePreviews(){
        for( let i = 0; i < this.files.length; i++ ){    
            if ( /\.(jpe?g|png|gif)$/i.test( this.files[i].name ) ) {  
                
                let reader = new FileReader();
                reader.addEventListener("load", function(){
                    
                    this.filesimg[i] = reader.result;
                }.bind(this), false);
                reader.readAsDataURL( this.files[i] );
            }
        }
    },
    
    removeFile( key ){
        this.files.splice( key, 1 );
        this.filesimg.splice( key, 1 );
    },
    changePage(num){
        this.page = num 
    },
    addData(){
        this.$store.dispatch('orderModule/setPersonalInfo',this.order)
    },
    submitFiles(orderId){
        let formData = new FormData();
        formData.append('orderId', orderId)        
        for( var i = 0; i < this.files.length; i++ ){
            let file = this.files[i];
            formData.append('listTitle', file.name)   
            formData.append('images', file);
        }
        axios.post('http://localhost:8080/api/order/uploadImage',formData,
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
  },
};
</script>

<style>
input[type="file"]{
    display: none;
  }
  </style>
