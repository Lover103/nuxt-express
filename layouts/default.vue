<template>
  <div class="layout">
    <Layout>
      <keep-alive>
        <Navbar></Navbar>
      </keep-alive>
      <nuxt/>
      <Footer></Footer>
    </Layout>
  </div>
</template>
<script>
import Navbar from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>