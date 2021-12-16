<template>
    <div>
      <TopNav />
      <Login />
      <Footer />
    </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
import Login from '../components/home/PopularProducts.vue'
import Footer from '../components/home/Footer.vue'

export default {
  components: {
    Footer,
    TopNav,
    Login
  }
}
</script>
