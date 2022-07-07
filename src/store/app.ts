import { defineStore } from 'pinia';
import { type Manga } from "/@/services/mangas";

interface AppStoreState {
  mangas: Manga[];
}

export const useApp = defineStore('app', {
  // other options...
  state: (): AppStoreState => {
    return {
      mangas: []
    }
  },
  actions: {},
  getters: {
    getBest10: (state: any) => state.mangas.sort((a, b) => b.rating - a.rating).slice(0, 9)
  }
});
