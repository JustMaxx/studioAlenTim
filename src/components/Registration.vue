<template>
  <div class="wrapper">
      <Header/>
      <div class="content">
          <div class="registration">
              <div class="registration__container container">
                  <div class="registration__block">
                    <div class="registration__title title">
                        Регистрация
                    </div>
                    <form v-if="!isReg" @submit.prevent="register" class="registration__form"> 
                        <div class="registration__item">
                            <p class="registration__name">Имя</p>
                            <input id="firstName"   v-model="v$.firstName.$model" type="text" name="firstName" class="input" >
                            <div class="input-errors" v-for="(error, index) of v$.firstName.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
                        </div>
                        <div class="registration__item">
                            <p class="registration__name">Фамилия</p>
                            <input id="lastName" type="text"  v-model="v$.lastName.$model" name="lastName" class="input">
                        <div class="input-errors" v-for="(error, index) of v$.lastName.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
                        </div>
                        <div class="registration__item" >
                            <p class="registration__name">Почта</p>
                            <input id="email" type="email" v-model="v$.email.$model" name="email" class="input">
                        <div class="input-errors" v-for="(error, index) of v$.email.$errors" :key="index">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
                        </div>
                        <div class="registration__item">
                            <p class="registration__name">Номер телефона</p>
                            <input id="number" type="text" v-model="number" name="number" class="input">
                        </div>
                        <div class="registration__item">
                            <p class="registration__name">Придумайте пароль</p>
                            <input id="password" v-model="v$.password.$model" type="password"  name="password" class="input">
                       <div class="input-errors" v-for="(error, index) of v$.password.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
                        </div>
                        <div class="registration__item">
                            <p class="registration__name">Повторите пароль</p>
                            <input id="confirmPassword" type="password" @input="checkPassword()" v-model="v$.confirmPassword.$model" name="confirmPassword" class="input">
                        <div class="input-errors" v-for="(error, index) of v$.confirmPassword.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
                        </div>
                        <div class="registration__item">
                            <button type="submit" class="button button_o">создать аккаунт</button>
                        </div>
                    </form>
                    <div v-if="isReg == true">
                        <span>Вы успешно зарегистрировались!</span>
                        <router-link to="/signin">Авторизоваться</router-link>
                    </div>
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

import useVuelidate from '@vuelidate/core'
import { required, email, minLength,  sameAs    } from '@vuelidate/validators'

export function validName(name) {
  let validNamePattern = new RegExp("^[а-яё]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)){
    return true;
  }
  return false;
}

export default {
    name:"Registration",
    setup () {
        return {
            v$: useVuelidate()
        }
  },
    data(){
      return {
        firstName : '',
        lastName : '',
        email : '',
        number : '',
        password : '',
        confirmPassword : '',
        isReg: false,
      }
    },
    validations () {
    return {
        firstName : {required , name_validation: {
            $validator: validName,
            $message: 'Неправильное имя. Действительное имя содержит только буквы, тире (-) и пробелы'
          } },
        lastName : {required, name_validation: {
            $validator: validName,
            $message: 'Неправильное имя. Действительное имя содержит только буквы, тире (-) и пробелы'
          } },
        email : {required, email},
        number : {required,},
        password : {required, min: minLength(6)},
        confirmPassword : {
            required,
            sameAs: sameAs(this.password), 
            
            },
    }
  },
  
    components:{
        Header,
        Footer,
    },
    methods: {
      register: function () {
        let data = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          number: this.number,  
          password: this.password
        }
        axios.post('http://localhost:8080/api/auth/registration',data)
        .then((data)=>{
            if(data){
                this.isReg = true
            }
        })
      }
    }
}
</script>

<style>

</style>