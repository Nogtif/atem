import { defineComponent } from 'vue';
import Swiper from '/@/components/Swiper/Swiper';

export default defineComponent({
  components: { Swiper },
  setup() {
    return () => (
      <>
        <div class="container">
          <section class="swiperTop">
            <Swiper />
          </section>

          <section class="page_content">
            <div class="heading_title">
              <h1><i class="mdi mdi-diamond-stone"></i>Nos Exclusivités</h1>
            </div>
          </section>
        </div>
      </>
    );
  }
});
