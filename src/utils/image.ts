export function loadThumbnail(src) {
  try  {
    return require(`@/assets/img/animes/thumbnails/${src}`)
  } catch (err) {
    return require('@/assets/img/animes/thumbnails/default.png')
  }
}