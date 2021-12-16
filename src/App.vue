<template>
  <v-app>
    <!-- <TopNav />
    <Login /> -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-snackbar
      v-model="snackbar.show"
      :multi-line="true"
      :left="true"
      :bottom="true"
      :timeout="4000"
      :color="snackbar.variant"
    >
      {{ snackbar.message }}
      <v-btn
        dark
        text
        @click="updateSnackbar({show: false})"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import TopNav from './components/TopNav.vue'
// import Login from './components/auth/Login.vue'

export default {
  name: 'app',
  // components: {
  //   TopNav,
  //   Login
  // },
  computed: {
    ...mapState(['snackbar'])
  },
  methods: {
    ...mapMutations(['updateSnackbar'])
  }
}
</script>
