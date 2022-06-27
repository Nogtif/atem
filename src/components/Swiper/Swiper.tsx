import { defineComponent } from 'vue';
import { Anime } from '../../services/animes';
import { loadThumbnail } from '/@/utils/image';

// Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import './Swiper.scss';

// images
import playIcon from '/@/assets/img/svg/play.svg';

SwiperCore.use([Navigation]);

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    const swiperOptions = {
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 10 },
        600: { slidesPerView: 3, spaceBetween: 30 },
        771: { slidesPerView: 4, spaceBetween: 30 },
        900: { slidesPerView: 5, spaceBetween: 30 },
        1500: { slidesPerView: 6, spaceBetween: 30 }
      }
    };

    const mangas: Anime[] = [
      {
        "reference":"one-piece",
        "title": "One Piece",
        "thumbnail":"one-piece.jpg",
        "rating":100
      },
      {
        "reference":"solo-leveling",
        "title": "Solo Leveling",
        "thumbnail":"one-piece.jpg",
        "rating":100
      }
    ];

    function nbOfStars(rating) {
      return Math.floor(rating / 20)
    }

    return () => (
      <div class="swiper-father">
        <swiper
          slides-per-view={1}
          space-between={30}
          navigation={swiperOptions.navigation}
          auto-resize={true}
          breakpoints={swiperOptions.breakpoints}
          options={swiperOptions}
        >
          {
            mangas.map((manga: Anime) => 
              <swiper-slide>
                <div class="swiper_slide">
                  <div class="card">
                    <div class="card_img">
                      <img src={ loadThumbnail(manga.thumbnail) } alt={ manga.reference } />
                      <div class="overlay">
                        <div class="ms_box_overlay" />
                        <div class="play_icon">
                          <img src={playIcon} />
                        </div>
                      </div>
                    </div>
                    <div class="card_text">
                      <h3>{ manga.title }</h3>
                      <div class="rating">
                        <span>{ Math.round((manga.rating / 20) * 10) / 10 }</span>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            )
          }
        </swiper>
        <div class="swiper-button-prev slider_nav_prev" /> 
        <div class="swiper-button-next slider_nav_next" />
      </div>
    )
  }
})