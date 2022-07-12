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
    loadAnime()

    return () => (anime.value != null && 
      <> 
        <div class="container">
          <div class="head-summary">
            <img src={ loadThumbnail(anime.value.thumbnail) }  />

            <aside>
              <h1>{ anime.value.title }</h1>
            </aside>
          </div>
        </div>
      </>
    );
  }
});
