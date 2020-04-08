import Vuex from "vuex";
import Vue from "vue";
import listaDiario from "./modules/listaDiario";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
      listaDiario
  }
});
