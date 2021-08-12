<template>
  <div class="home">
    <Header />
    <section>
      <div class="container">
        <SwiperCarousel />
      </div>
    </section>
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