<template>
    <div>
      <TopNav />
        <Header />
        <Popular-products />
        <Footer />
    </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
import Header from '../components/home/Header.vue'
import PopularProducts from '../components/home/PopularProducts.vue'
import Footer from '../components/home/Footer.vue'

export default {
  components: {
    Header,
    PopularProducts,
    Footer,
    TopNav
  }

}
</script>
