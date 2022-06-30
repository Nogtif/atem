import api from './api';
import { useApp } from '../store/app';


export interface Anime {
  reference: string;
  title: string;
  thumbnail: string;
  rating: number;
}

export function fetchAnimes(): Promise<Anime[]> {
  return api.get("/animes").then((animes: any) => {
    const app = useApp();
    app.animes = animes.data;
    return app.animes;
  });
}
