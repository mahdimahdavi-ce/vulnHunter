import { createStore } from 'vuex';

export default createStore({
  state: {
    sharedData: null,
  },
  mutations: {
    setSharedData(state, data) {
      state.sharedData = data;
    },
  },
  actions: {
    updateSharedData({ commit }, data) {
      commit('setSharedData', data);
    },
  },
  getters: {
    getSharedData: (state) => state.sharedData,
  },
});
