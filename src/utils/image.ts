export function loadThumbnail(src) {
  try  {
    return`../assets/img/mangas/thumbnails/${src}`
  } catch (err) {
    return '../assets/img/mangas/thumbnails/default.png'
  }
}