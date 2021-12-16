<template>
  <v-footer
      absolute
      color="#ECEFF1"
      class="font-weight-small pa-0"
    >
      <v-col
        class="text-center pa-0"
        cols="12"
      >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class=" "
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
        &copy; {{ new Date().getFullYear() }} — <strong>Bookstore</strong>
      </v-col>
    </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>
