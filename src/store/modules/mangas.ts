import { getMangas } from "@/services/mangas";

export default {
  namespaced: true,
  state: {
    list: [],
  },
  getters: {
    listOfMangas(state) {
      return state.list;
    },
  },
  mutations: {
    setMangas(state, newList) {
      state.list = newList;
    },
  },
  actions: {
    fetchMangas({ commit }) {
      return getMangas().then((mangas) => {
        commit("setMangas", mangas.data);
        return Promise.resolve(mangas.data);
      });
    },
  },
};
