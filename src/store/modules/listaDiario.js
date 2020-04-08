import axios from "axios";

const state = {
  lista: []
};
const getters = {
  allLista: state => state.lista,
  listarById: (state) => (id) => (state.lista.filter(t => t.id == id))[0],
};
const actions = {
  fetchLista({ commit }) {
    commit("setLista");
  },
  getLista({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/lista").then((response) => {
        commit('getLista', response.data)
      })
  },
  AddLista({ commit }, lista_add) {
    const new_index = state.lista.length + 1
    const response = {
      "userId": 1,
      "id": new_index,
      "title": lista_add.title,
      "data": lista_add.data
    }
    commit("newLista", response);
  },
  deleteLista({ commit }, id) {
    commit("removeLista", id);
  },
  updateLista({ commit }, updLista) {
    commit("updateLista", updLista);
  },

};
const mutations = {
  setLista: (state) => state.lista,
  getLista: (state, lista) => (state.lista = lista),
  newLista: (state, lista) => state.lista.push(lista),
  removeLista: (state, id) =>
    (state.lista = state.lista.filter(t => t.id !== id)),
  updateLista: (state, updLista) => {
    const index = state.lista.findIndex(t => t.id === updLista.id)
    if (index !== -1) {
      state.lista.splice(index, 1, updLista);
    }
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
