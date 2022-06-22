<template>
  <div class="home">
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
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Swiper from "@/components/Swiper.vue";

export default {
  name: 'Home',
  components: { 
    Header,
    Swiper
  }
}
</script>

<style scoped>
.page_content {
  margin: 5% 0;
}
</style>