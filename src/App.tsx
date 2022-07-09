import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import { fetchAnimes } from './services/animes';

// styles
import './styles/global.scss';
import './assets/fonts/MaterialDesign-Webfont-master/scss/materialdesignicons.scss';

export default defineComponent({
  setup() {
    const isLoading = ref(true); 
    fetchAnimes().then(() => isLoading.value = false);

    return () => (
      <>
        { isLoading.value ? <h1>Loading...</h1> : <RouterView /> }
      </>
    );
  }
});
