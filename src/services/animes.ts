import api from './api';

export interface Anime {
  reference: string;
  title: string;
  thumbnail: string;
  rating: number;
}

export function getAnimes() {
  return api.get("/animes");
}
