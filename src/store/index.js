import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Tabswitch: false,
  },
  getters: {},
  mutations: {
    
    TabswitchTrue(state, x) {
      state.Tabswitch = x;
    },
  },
  actions: {},
  modules: {},
});
