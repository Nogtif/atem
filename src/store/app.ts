import { defineStore } from 'pinia';
import { type Anime } from "/@/services/animes";

interface AppStoreState {
  animes: Anime[];
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