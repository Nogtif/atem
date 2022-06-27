export function loadThumbnail(src: string) {
  try  {
    return new URL(`../assets/img/animes/thumbnails/${src}`, import.meta.url).href;
  } catch (err) {
    return new URL('../assets/img/animes/thumbnails/default.png', import.meta.url).href;
  }
}