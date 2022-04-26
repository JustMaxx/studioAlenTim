<template>
  <div class="modal close">
        <div class="modal__block">
            <div class="modal__header">
                <div class="modal__title title">Вход</div>
                <div class="modal__close">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="modal__body">
                <div class="modal__form">
                    <div class="modal__input">
                        <input class="input " v-model="email" type="email" placeholder="Почта">
                    </div>
                    <div class="modal__input">
                        <input class="input " v-model="pass" type="password" placeholder="Пароль">
                    </div>
                    <div class="modal__button">
                        <button @click="signin()" class="button button_o">войти</button>
                    </div>
                </div>
            </div>
            <div class="modal__footer">
                <div class="modal__text">
                    <p>Нет аккаунта? </p>
                    <router-link to="/registration" class="modal__link">Создать аккаунт</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
name: 'Modal',
    data(){
        return{
        email:'',
        pass:'',
        prevRoute: null
        }
    },
    computed:{
        isLogin(){
        return this.$store.getters['authModule/isLogin']
        },
    },
    methods:{
        signin(){
            this.$store.dispatch('authModule/login', {email:this.email, password:this.pass})
            .then(()=>{
                this.prevRoute.path == '/ordering'? this.$router.push('/ordering'):
                this.$router.push('/profile')
            })
        },
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prevRoute = from
        })
    },
    mounted(){
        console.log(this.prevRoute)
        if(this.isLogin){
            this.$router.push('/profile')
        }
  }
}
</script>

<style>

</style>