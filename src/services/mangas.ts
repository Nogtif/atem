import api from './api';
import { useApp } from '/@/store/app';

export interface Manga {
  reference: string;
  title: string;
  originalTitle: string;
  synopsis: string;
  type: string;
  status: string;
  author: string;
  thumbnail: string;
  wallpaper: string;
  kind: string[];
  studios: string;
  rating: number;
  views: string;
  seasons: string[];
}

export function fetchMangas(): Promise<Manga[]> {
  return api.get("/mangas").then((mangas: any) => {
    const app = useApp();
    app.mangas = mangas.data;
    return app.mangas;
  });
}
