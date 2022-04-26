<template>
  <div class="wrapper">
    <HeadControl />
    <div class="control">
      <div class="control__container container">
        <div class="control__menu">
          <div class="control__list">
            <div class="control__click">
              <router-link to="/control1">Новые заказы</router-link>
            </div>
            <div class="control__click">
              <router-link to="/control2">В ожидании</router-link>
            </div>
            <div class="control__click _active">
              <router-link to="/control3">В процессе</router-link>
            </div>
            <div class="control__click">
              <router-link to="/control4">Завершенные</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="during">
      <div class="during__container container">
        <div class="during__block">
          <div class="during__row">
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Заказчик</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Дата пошива</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Описание</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Предоплата</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Эскиз</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Мерки</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Материалы</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Выкройка</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Раскрой</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Роспись</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Аппликации</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Стразы</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Пошив</div>
              </div>
            </div>
            <div class="during__column">
              <div class="during__items">
                <div class="during__title">Оплата</div>
              </div>
            </div>
          </div>
          <DuringRow/>
          <DuringRow/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DuringRow from './DuringRow.vue';
import HeadControl from "./HeadControl.vue";

export default {
  name: "Control3",
  components: {
    HeadControl,
    DuringRow,
  },
};
</script>

<style></style>
