<template>
  <div class="swiper-father">
    <swiper
      :slides-per-view="1"
      :space-between="30"
      :navigation="swiperOptions.navigation"
      :auto-resize="true"
      :breakpoints="swiperOptions.breakpoints"
      :options="swiperOptions"
    >
      <swiper-slide v-for="manga in mangas" :key="manga.title">
        <div class="swiper_slide">
          <div class="card">
            <div class="card_img">
              <img :src="loadThumbnail(manga.thumbnail)" :alt="manga.title">
              <div class="overlay">
                <div class="ms_box_overlay"></div>
                <div class="play_icon">
                  <img src="@/assets/img/svg/play.svg" alt="">
                </div>
              </div>
            </div>
            <div class="card_text">
              <h3><router-link :to="{ name: `Manga`, params: { id: manga._id } }">{{ manga.title }}</router-link></h3>
              <div class="rating">
                <i v-for="star in 5" :key="star" :class="['mdi', nbOfStars(manga.rating) < star ? 'mdi-star-outline' : 'mdi-star']"></i>
                <span>{{ Math.round((manga.rating / 20) * 10) / 10 }}</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev slider_nav_prev"></div> 
    <div class="swiper-button-next slider_nav_next"></div>
  </div>
</template>
<script>
// import Swiper core and required components
import { mapGetters } from 'vuex'
import { loadThumbnail } from "@/utils/image";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
SwiperCore.use([Navigation]);

export default {
  name: 'SwiperAnimes',
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return {
      swiperOptions: {
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
        breakpoints: {
          320: { slidesPerView: 2, spaceBetween: 10 },
          600: { slidesPerView: 3, spaceBetween: 30 },
          771: { slidesPerView: 4, spaceBetween: 30 },
          900: { slidesPerView: 5, spaceBetween: 30 },
          1500: { slidesPerView: 6, spaceBetween: 30 }
        }
      },
    }
  },  
  computed: {
    ...mapGetters('mangas', {
      mangas: 'listOfMangas'
    })
  },
  methods: {
    loadThumbnail,
    nbOfStars(rating) {
      return Math.floor(rating / 20)
    }
  }
}
</script>
<style lang="scss" src="../style/swiper.scss"></style>