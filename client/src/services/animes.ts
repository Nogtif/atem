import api from "@/services/api";
import store from "@/store";

export interface Anime {
  _id: string;
  title: string;
  thumbnails: string;
}

export function getAnimes() {
  return api.get("/animes");
}