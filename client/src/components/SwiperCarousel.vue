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
      <swiper-slide v-for="anime in popular" :key="anime.name">
        <div class="swiper-slide">
          <div class="ms_rcnt_box">
            <div class="ms_rcnt_box_img">
              <img :src="require(`../assets/img/anime/thumbnails/${anime.thumbnail}`)" alt="">
              <div class="ms_main_overlay">
                <div class="ms_box_overlay"></div>
                <div class="ms_play_icon">
                  <img src="../assets/img/svg/play.svg" alt="">
                </div>
              </div>
            </div>
            <div class="ms_rcnt_box_text">
              <h3><a href="#">{{ anime.name }}</a></h3>
              <p>0 épisodes</p>
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
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
SwiperCore.use([Navigation]);

export default {
  name: 'SwiperCarousel',
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
          571: { slidesPerView: 4, spaceBetween: 30 },
          900: { slidesPerView: 6, spaceBetween: 30 }
        }
      },
      popular: [
        {name: 'One Piece', thumbnail: 'one-piece.jpg'},
        {name: 'My Hero Academia', thumbnail: 'mha.jpg'},
        {name: 'Sword Art Online', thumbnail: 'sao.jpg'},
        {name: 'Dr.Stone', thumbnail: 'dr.stone.jpg'},
        {name: 'Black Clover', thumbnail: 'black-clover.jpg'},
        {name: 'Naruto Shippuden', thumbnail: 'naruto-shippuden.jpg'},
        {name: 'Dragon Ball Super', thumbnail: 'db-super.jpg'},
      ]
    }
  }
}
</script>
<style lang="scss" src="../style/swiper.scss"></style>