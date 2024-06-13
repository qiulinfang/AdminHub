import { createStore } from 'vuex';

export default createStore({
  state: {
    isCollapse: false,
    tabs: [
      { name: 'home', title: '首页', path: '/' }
    ],
    activeTab: 'home'
  },
  mutations: {
    setisCollapse(state, data) {
      state.isCollapse = data;
    },
    addTab(state, tab) {
      state.tabs.push(tab);
      state.activeTab = tab.name;
    },
    removeTab(state, name) {
      let index = state.tabs.findIndex(tab => tab.name === name);
      if (index !== -1) {
        state.tabs.splice(index, 1);
        if (state.activeTab === name) {
          state.activeTab = state.tabs.length > 0 ? state.tabs[0].name : 'home';
        }
      }
    },
    setActiveTab(state, name) {
      state.activeTab = name;
    }
  },
  actions: {
    updateisCollapse({ commit }, data) {
      commit('setisCollapse', data);
    },
    addTab({ commit }, tab) {
      commit('addTab', tab);
    },
    removeTab({ commit }, name) {
      commit('removeTab', name);
    },
    setActiveTab({ commit }, name) {
      commit('setActiveTab', name);
    }
  },
  getters: {
    getisCollapse: (state) => state.isCollapse,
    tabs: state => state.tabs,
    activeTab: state => state.activeTab
  },
});