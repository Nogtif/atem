<template>
  <div class="app">
    <Loading v-if="showLoading"/>
    <router-view v-else/>
  </div>
</template>


<script>
import Loading from '@/components/Loading.vue';

export default {
  components: { Loading },
  data() {
    return {
      showLoading: false,
    }
  },
}
</script>
<style lang="scss" src="./assets/fonts/MaterialDesign-Webfont-master/scss/materialdesignicons.scss"></style>
<style lang="scss" src="./style/global.scss"></style>
