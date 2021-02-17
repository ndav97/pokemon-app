import { createStore } from "vuex";

export default createStore({
  state: {
    loading: false
  },
  mutations: {
    loading_update(state, payload) {
      state.loading = payload;
    }
  },
  actions: {},
  modules: {}
});
