import { defineComponent } from 'vue';
import Header from '../../components/Header/Header';
import Swiper from '../../components/Swiper/Swiper';

export default defineComponent({
  components: { Header, Swiper },
  setup() {
    return () => (
      <>
        <Header />
        <div class="container">
        <section class="swiperTop">
          <Swiper />
        </section>

        <section class="page_content">
          <div class="heading_title">
            <h1>Les dernières sorties</h1>
          </div>
        </section>
        </div>
      </>
    );
  }
});
