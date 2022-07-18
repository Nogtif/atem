import { defineComponent, ref } from 'vue';
import { fetchAnime } from '/@/services/animes';
import { loadThumbnail } from '/@/utils/image';
import './Anime.scss';

export default defineComponent({
  setup() {
    const anime = ref()
    const loadAnime = async () => {
      anime.value = await fetchAnime(`one-piece`).then((res) => res)
    }

    const nbOfStars = (rating: number) => Math.floor(rating / 20);

    loadAnime()

    return () => (anime.value != null && 
      <> 
        <div class="container">
          <div class="head-summary">
            <img src={ loadThumbnail(anime.value.thumbnail) }  />

            <aside>
              <h1>{ anime.value.title }</h1>
              <div class="rating">
                { 
                  [...Array(5).keys()].map((star) => <i class={
                    ['mdi', nbOfStars(anime.value.rating) < star ? 'mdi-star-outline' : 'mdi-star']
                  } />) 
                }
                <span>{ Math.round((anime.value.rating / 20) * 10) / 10 }</span>
              </div>
              <p><b>Native:</b> { anime.value.native }</p>
              <p><b>Status:</b> { anime.value.native }</p>
              <p><b>Studios:</b> { anime.value.native }</p>
              <p><b>Première diffusion:</b> { anime.value.native }</p>
              <p><b>Genre(s):</b> { anime.value.native }</p>
            </aside>
          </div>
          <main>
          <div class="heading_title">
              <h1><i class="mdi mdi-comment-text-outline"></i> Synopsis</h1>
            </div>
          </main>
        </div>
      </>
    );
  }
});
