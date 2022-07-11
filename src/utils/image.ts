/**
 * 
 * @param src : namefile.
 * @returns :
 */
export function loadThumbnail(src: string) {
  return new URL(`../assets/img/animes/thumbnails/${src}`, import.meta.url).href;
}