import { createStore } from "vuex";
import orderModule from "./order.module";
import authModule from "./auth.module";
import testModule from "./test.module";
import userModule from "./user.module";
import sewindModule from "./sewind.module";

const store = new createStore({
  modules:{
    orderModule,
    authModule,
    testModule,
    userModule,
    sewindModule
  },
})

export default store;
