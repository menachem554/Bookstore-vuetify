<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="product.image"
      height="200px"
    />

    <v-card-title>
       {{ product.bookName }}
    </v-card-title>

    <v-card-text>
     ID: {{ product.bookID }}
    </v-card-text>

     <v-card-text>
      Category: {{ product.category }}
    </v-card-text>

     <v-card-text>
      author: {{ product.author }}
    </v-card-text>

     <v-card-actions>
      <v-btn
        color="success"
        outlined
        @click="addToCart(i)"
      >
        <v-icon>mdi-plus</v-icon>
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  props: {
    product: VueTypes.shape({
      image: VueTypes.string.isRequired,
      bookID: VueTypes.string.isRequired,
      bookName: VueTypes.string.isRequired,
      category: VueTypes.string.isRequired,
      author: VueTypes.string.isRequired
    }),
    addToCart: VueTypes.func.isRequired,
    i: VueTypes.integer.isRequired
  }
}
</script>