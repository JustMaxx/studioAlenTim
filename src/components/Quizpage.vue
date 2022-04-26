<template>
    <div class="wrapper">
      <Header/>
      <div class="content">
          <div class="quiz">
                <div class="quiz__container container">
                    <Quiz/>
                </div>
          </div>
      </div>
      <Footer/>
    </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'
import Quiz from './Quiz.vue'
export default {
    name: 'Quizpage',
    components:{
        Header,
        Quiz,
        Footer
    }
}
</script>