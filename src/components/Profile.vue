<template>
  <div class="wrapper">
    <Header/>
      <div class="content">
        <Navprofile/>
          <div class="container">
          <div class="fillingform__block">
            <div class="fillingform__row">
              <div class="fillingform__column">
                <div class="fillingform__title">Личные данные</div>
                <div class="fillingform__items">
                  <div class="fillingform__item">
                    <input type="text" v-model="user.firstName" class="fillingform__input input" placeholder="Имя">
                  </div>
                  <div class="fillingform__item">
                    <input type="text" v-model="user.lastName" placeholder="Фамилия" class="fillingform__input input">
                  </div>
                </div>
                <div class="fillingform__items">
                  <div class="fillingform__item">
                    <input type="text" v-model="user.email" placeholder="Почта" class="fillingform__input input">                    </div>
                  <div class="fillingform__item">
                    <input type="text" v-model="user.number" placeholder="Номер телефона" class="fillingform__input input">
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

export default {
     name: 'Profile',
     components:{
        Header,
        Navprofile,
        Footer,
    },
    data(){
      return {
          user:{},
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
          }
      }
  },
  computed:{
    isLogin(){
      return this.$store.getters['authModule/isLogin']
    },
    getToken(){
      return this.$store.getters['authModule/getUser']
    },
    getUserData(){
      return this.$store.getters['userModule/getUserData']
    }
  },
  methods:{
    getUser(){
      this.$store.dispatch('userModule/setUser', this.getToken)
    }
  },
  mounted(){
    console.log(this.isLogin)
    if(!this.isLogin){
      this.$router.push('/signin')
    }
    else {
      this.$store.dispatch('userModule/setUser', this.getToken)
      .then(()=>{
        console.log(this.getUserData)
        this.user = this.getUserData
        }
      )
    }

  }
}
</script>

<style>

</style>
