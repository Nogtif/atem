import api from "@/services/api";
import store from "@/store";

export interface Manga {
  _id: string;
  title: string;
  thumbnails: string;
}

export function getMangas() {
  return api.get("/mangas");
}
