import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import { fetchAnimes } from './services/animes';
import Header from '/@/components/Header/Header';

// styles
import './styles/global.scss';
import './assets/fonts/MaterialDesign-Webfont-master/scss/materialdesignicons.scss';

export default defineComponent({
  components: { Header },
  setup() {
    const isLoading = ref(true); 
    fetchAnimes().then(() => isLoading.value = false);

    return () => (
      <>
        <Header />
        { isLoading.value ? <h1>Loading...</h1> : <RouterView /> }
      </>
    );
  }
});
