<template>
  <div class="app">
    <Loading ref="loading" v-if="showLoading" @endAnim="showLoading = false"/>
    <router-view v-else/>
  </div>
</template>


<script>
import { mapActions } from 'vuex'
import Loading from '@/components/Loading.vue';

export default {
  components: { Loading },
  data() {
    return {
      showLoading: true,
    }
  },
  computed: {
    ...mapActions({
      fetchMangas: 'mangas/fetchMangas',
    })
  },
  created() {
    this.fetchMangas;
    setTimeout(() => {
      this.$refs.loading.fadeOut();
    }, 0);
  },
}
</script>
<style lang="scss" src="./assets/fonts/MaterialDesign-Webfont-master/scss/materialdesignicons.scss"></style>
<style lang="scss" src="./styles/global.scss"></style>
