export function loadThumbnail(src) {
  try  {
    return require(`@/assets/img/mangas/thumbnails/${src}`)
  } catch (err) {
    return require('@/assets/img/mangas/thumbnails/default.png')
  }
}