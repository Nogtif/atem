import { defineComponent, ref } from 'vue';
import { fetchAnime } from '/@/services/animes';

export default defineComponent({
  setup() {
    const anime = ref()
    const loadAnime = async () => {
      anime.value = await fetchAnime(`one-piece`).then((res) => res)
    }
    loadAnime()

    return () => (
      <> { anime.value != null ? 
        <h1>{ anime.value.title }</h1>
        
        : null
        }
      </>
    );
  }
});
