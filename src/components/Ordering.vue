<template>
  <div class="wrapper">
      <Header/>
      <ordering-2 v-if="page==2" v-on:changeNumPage="changePage" />
      <ordering-3 v-if="page==3" :order="order" :submitFiles="submitFiles" />
        <div v-if="page == 1" class="content">
            <div class="fillingform">
                <div class="fillingform__container container">
                    <div class="fillingform__title-t title">Оформление заказа</div>
                        <div class="fillingform__block">
                            <div class="fillingform__row">
                                <div class="fillingform__column">
                                    <div class="fillingform__title">Личные данные</div>
                                    <div class="fillingform__items">
                                        <div class="fillingform__item">
                                            <input type="text" v-model="order.name" class="fillingform__input input" placeholder="Имя">
                                        </div>
                                        <div class="fillingform__item">
                                            <input type="text" v-model="order.secondName" placeholder="Фамилия" class="fillingform__input input">
                                        </div>
                                    </div>
                                    <div class="fillingform__items">
                                        <div class="fillingform__item">
                                            <input type="text" v-model="order.email" placeholder="Почта" class="fillingform__input input">
                                        </div>
                                        <div class="fillingform__item">
                                            <input type="text" v-model="order.phone" placeholder="Номер телефона" class="fillingform__input input">
                                        </div>
                                    </div>
                                </div>
                                <div class="fillingform__column">
                                    <div class="fillingform__title">Адрес</div>
                                    <div class="fillingform__items">
                                        <div class="fillingform__item">
                                            <input type="text" v-model="order.city" class="fillingform__input input" placeholder="Город">
                                        </div>
                                        <div class="fillingform__item">
                                            <input type="text" v-model="order.streetTitle" placeholder="Улица" class="fillingform__input input">
                                        </div>
                                    </div>
                                    <div class="fillingform__items">
                                        <div class="fillingform__item">
                                            <input type="text" v-model="order.streetNumber" placeholder="Дом" class="fillingform__input input">
                                        </div>
                                        <div class="fillingform__item">
                                            <input type="text" v-model="order.houseNumber" placeholder="Квартира" class="fillingform__input input">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fillingform__row">
                                <div class="fillingform__column">
                                    <div class="fillingform__title">Удобный способ связи</div>
                                    <div class="fillingform__items">
                                        <div class="fillingform__item">
                                            <input type="text" class="fillingform__input input" placeholder="Вконтакте">
                                        </div>
                                        <div class="fillingform__item">
                                            <input type="text" placeholder="Viber, WhatsApp" class="fillingform__input input">
                                        </div>
                                    </div>
                                </div>
                                <div class="fillingform__column">
                                    <div class="fillingform__title">Выберите дату на пошив</div>
                                    <div class="fillingform__items">
                                        <select v-model="order.dateId" @change="setDate()" class="fillingform__select input">
                                            <option hidden disabled selected>Выбрать</option>
                                            <option v-for="(el,key) in getDates" :key="key" class="fillingform__options" :value="el.id">{{el.date}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="fillingform__row">
                                <div class="fillingform__column">
                                    <div class="fillingform__title">Пожелание к костюму</div>
                                    <div class="fillingform__items">
                                        <textarea type="text" v-model="order.comment" class="fillingform__textarea input" > </textarea>
                                    </div>
                                </div>
                                <div class="fillingform__column">
                                    <div class="fillingform__title">Добавить примеры</div>
                                    <div class="fillingform__items">
                                       <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()" accept="image/*">
                                    </div>
                                    <div v-for="(file, key) in files" :key="key" >                                        
                                        <img width="250" class="preview" v-bind:src="filesimg[key]"/>
                                        <span @click="removeFile()">X</span>
                                    </div>
                                    <button class="button button_o" @click="addFiles()">добавить фото</button>
                                </div>
                            </div>
                        </div>
              <div class="fillingform__button">
                  <button class="button button_o" @click="changePage(2);addData()">дальше</button>
              </div>
              
                </div> 
            </div>
        </div>
      <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Ordering2 from './Ordering2.vue'
import Ordering3 from './Ordering3.vue'
export default {
name: 'Ordering',
  components: { Header, Footer,Ordering2, Ordering3},
  data(){
      return {
          files:[],
          filesimg:[],
          page: 1,
          order:{
              name:'',
              secondName:'',
              email:'',
              phone:'',
              city:'',
              streetTitle:'',
              streetNumber:'',
              houseNumber:'',
              adressContact:'',
              comment:'',
              id:'',
              dateId:null,
              sewindDate: null,
          },
      }
  },
  computed:{
    isLogin(){
        return this.$store.getters['authModule/isLogin']
    },
    getUserData(){
        return this.$store.getters['userModule/getUserData']
    },
    getToken(){
        return this.$store.getters['authModule/getUser']
    },
    getDates(){
        return this.$store.getters['sewindModule/getDates']
    },    
  },
  methods:{
    addFiles(){
        this.$refs.files.click();
    },
    setDate(){
        this.order.sewindDate = this.getDates.filter(el=>el.id == this.order.dateId? el.date:'')[0].date
        console.log(this.order.sewindDate)
    },
    handleFilesUpload(){
        let uploadedFiles = this.$refs.files.files;
        for( var i = 0; i < uploadedFiles.length; i++ ){
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
    async getAvlDates(){
        this.$store.dispatch('sewindModule/getAvlDates')
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
  mounted(){
    console.log(this.isLogin)
    if(!this.isLogin){
      this.$router.push('/signin')
    }
    else{
    this.$store.dispatch('userModule/setUser', this.getToken)
    .then(()=>{    
        let user = this.getUserData    
        this.order.name = user.firstName
        this.order.secondName = user.lastName
        this.order.email = user.email
        this.order.phone = user.number
        this.order.id = user.id
    })
    this.getAvlDates()
    window.scrollTo(0, 0);
    }
  },
  updated(){
    if(!this.isLogin){
      this.$router.push('/signin')
    }

  }

}
</script>

<style>
input[type="file"]{
    position: absolute;
    top: -500px;
  }
</style>