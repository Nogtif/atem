import { defineComponent, onMounted  } from 'vue';
import { RouterView } from 'vue-router';
import { getAnimes } from './services/animes';

// styles
import './styles/global.scss'
import './assets/fonts/MaterialDesign-Webfont-master/scss/materialdesignicons.scss'

export default defineComponent({
  setup() {

    onMounted(() => {
      getAnimes();
    });

    return () => (
      <>
        <RouterView />
      </>
    );
  }
});