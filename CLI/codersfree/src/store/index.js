import { createStore } from "vuex";
import { moduleCounter } from "./modules/moduleCounter";
import { moduleUser } from "./modules/modulUser";

export default createStore({
  state: {
  },
  modules: {
    user: moduleUser,
    counter: moduleCounter
  },
});
