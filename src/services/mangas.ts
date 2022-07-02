import api from './api';
import { useApp } from '/@/store/app';

export interface Manga {
  reference: string;
  title: string;
  thumbnail: string;
  rating: number;
}

export function fetchMangas(): Promise<Manga[]> {
  return api.get("/mangas").then((mangas: any) => {
    const app = useApp();
    app.mangas = mangas.data;
    return app.mangas;
  });
}
