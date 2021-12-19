<template>
  <v-container class="fill-height mb-12">
    <v-row>
      <v-col>
        <h2>Popular Books <v-btn to="store" text small color="primary">View All</v-btn></h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col >
        <v-row>
          <v-col lg="3"
            v-for="(product, i) in products.slice(0, 6)"
            :key="product.name"
          >
            <VerticalProduct :product="product" :i="i" :addToCart="addToCart" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VerticalProduct from '../cards/VerticalProduct.vue'

export default {
  components: {
    VerticalProduct
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['products', 'cart'])
  },
  methods: {
    ...mapMutations(['updateSnackbar', 'addItemToCart']),
    addToCart(index, quantity = 1) {
      this.addItemToCart({ itemId: index, quantity })
      this.updateSnackbar({ show: true })
    }
  }
}
</script>
