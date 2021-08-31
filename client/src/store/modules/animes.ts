import { getAnimes } from "@/services/animes";

export default {
  namespaced: true,
  state: {
    list: [],
  },
  getters: {
    listOfAnimes(state) {
      return state.list;
    },
  },
  mutations: {
    setAnimes(state, newList) {
      state.list = newList;
    },
  },
  actions: {
    fetchAnimes({ commit }) {
      return getAnimes().then((animes) => {
        commit("setAnimes", animes.data);
        return Promise.resolve(animes.data);
      });
    },
  },
};
