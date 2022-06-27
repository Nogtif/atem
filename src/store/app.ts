import { defineStore } from 'pinia';
import { type Anime, getAnimes } from "../services/animes";

interface AppStoreState {
  mangas: Anime[];
}

export const useApp = defineStore('app', {
  // other options...
  state: (): AppStoreState => {
    return {
      animes: []
    }
  },
  actions: {},
  getters: {
    getAnimes: state => state.animes,
  }
})