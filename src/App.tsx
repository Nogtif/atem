import { defineComponent } from 'vue';
import { RouterView } from 'vue-router'

/** styles */
import './styles/global.scss'
import './assets/fonts/MaterialDesign-Webfont-master/scss/materialdesignicons.scss'

export default defineComponent({
  props: { },
  setup(props) {
    return () => (
      <>
        <RouterView />
      </>
    )
  }
})