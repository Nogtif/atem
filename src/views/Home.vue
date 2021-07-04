<template>
  <div class="container">
    <Header />
    <section>
      <div class="heading-title">
        <h1>Les plus populaires</h1>
      </div>
      <SwiperCarousel />
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