<template>
  <div class="home">
    <Header />
    <div class="container">
      <section class="swiperTop">
        <SwiperCarousel />
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
import SwiperCarousel from "@/components/SwiperCarousel.vue";

export default {
  name: 'Home',
  components: { 
    Header,
    SwiperCarousel
  }
}
</script>

<style scoped>
.page_content {
  margin: 5% 0;
}
</style>