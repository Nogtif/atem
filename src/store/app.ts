import { defineStore } from 'pinia';
import { type Manga, getMangas } from "../services/mangas";

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
    getMangas: state => state.mangas,
  }
})