import { defineStore } from 'pinia';
import { type Anime } from '../services/animes';

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
    getBest10: (state: any) => state.animes.sort((a, b) => b.rating - a.rating).slice(0, 9)
  }
});
