import api from './api';
import { useApp } from '/@/store/app';

export interface Anime {
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

export function fetchAnimes(): Promise<Anime[]> {
  return api.get("/animes").then((animes: any) => {
    const app = useApp();
    app.animes = animes.data;
    return app.animes;
  });
}
