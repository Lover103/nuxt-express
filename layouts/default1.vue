<template>
  <div>
    <navbar></navbar>
    <div :class="{'App--hidden': visible}">
      <nuxt/>
    </div>
    <footer></footer>
  </div>
</template>

<script>
// import { Background, Footer } from '~/components/layout'
import Footer from '~/components/layout1/Footer.vue'
import Navbar from '~/components/layout1/Header.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  watch: {
    $route: 'setStore'
  },
  computed: {
    visible() {
      return this.$store.state.visibleHeader
    }
  },
  methods: {
    setStore() {
      if (this.$store.state.visibleHeader) {
        this.$store.commit('toggle', 'visibleHeader')
      }

      if (this.$store.state.visibleAffix) {
        this.$store.commit('toggle', 'visibleAffix')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.App {
  &--hidden {
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
  }
}
</style>