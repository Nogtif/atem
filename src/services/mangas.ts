import api from '../services/api';

export interface Manga {
  reference: string;
  title: string;
  thumbnail: string;
  rating: number;
}

export function getMangas() {
  return api.get("/mangas");
}
