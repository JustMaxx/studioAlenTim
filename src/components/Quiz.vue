<template>
  <div
    v-if="countQuestion >= getCurrentPage + 1"
    class="quiz__block block-quiz"
  >
    <div class="block-quiz__title">
      {{ getCurrentPage + 1 }} вопрос из {{ countQuestion }}
    </div>
    <div class="block-quiz__form">
      <div class="block-quiz__question">
        {{ getQuestions[getCurrentPage].questionTitle }}
      </div>
      <div class="block-quiz__options">
        <div
          class="block-quiz__option checkbox"
          v-for="(question, index) of getQuestions[getCurrentPage]
            .questionValues"
          :key="index"
        >
          <input
            type="radio"
            name="quiz"
            :value="index + 1"
            v-model="quizresult"
            :id="index + 1"
            class="checkbox-input"
          />
          <label :for="index + 1"  class="checkbox-label checkbox-label_r"></label>
          <label :for="index + 1"  class="block-quiz__label">{{ question }}</label>
        </div>
      </div>
      <div class="block-quiz__onwards">
        <button class="block-quiz__btn" @click="getResult">дальше</button>
      </div>
    </div>
  </div>
  <div v-else class="block-quiz__result">
    <div class="block-quiz__text">
    <p>Вы ответили на все вопросы!</p>
    <p>Примерная стоимость костюма будет составлять:</p>
    <p>{{ getAmmountPrice }} ₽</p>
    </div>
      <router-link to="/enroll" class="block-quiz__link">заказать</router-link>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  data() {
    return {
      quizresult: "",
    };
  },
  computed: {
    countQuestion() {
      return this.$store.getters.getQuestions.length;
    },
    getQuestions() {
      return this.$store.getters.getQuestions;
    },
    getCurrentPage() {
      return this.$store.getters.getCurrentPage;
    },
    getAmmountPrice() {
      return this.$store.getters.getAmmountPrice;
    },
  },
  methods: {
    getResult() {
      if (this.getCurrentPage != 0) {
        this.$store.commit("putquiz", {
          value: this.quizresult,
          currentPage: this.getCurrentPage - 1,
        });
      } else this.$store.commit("selectHeight", { value: this.quizresult });
      this.$store.commit("nextQuest");
    },
  },
};
</script>
