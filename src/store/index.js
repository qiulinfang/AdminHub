import { createStore } from 'vuex';

export default createStore({
  state: {
    isCollapse: false,
  },
  mutations: {
    setisCollapse(state, data) {
      state.isCollapse = data;
    },
  },
  actions: {
    updateisCollapse({ commit }, data) {
      commit('setisCollapse', data);
    },
  },
  getters: {
    getisCollapse: (state) => state.isCollapse,
  },
});