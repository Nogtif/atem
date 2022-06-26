import api from "@/services/api";
import store from "@/store";

export interface Manga {
  reference: string;
  title: string;
  thumbnail: string;
  rating: number;
}

export function getMangas() {
  return api.get("/mangas");
}
