<template>
  <v-card
    class="elevation-10
    grey lighten-5"
    max-width="400"
  >
    <v-card-title>
         <h1 class="display-1">Login</h1>
    </v-card-title> 
        <v-card-text>
            <v-form>
                <v-text-field
                    label="Username"
                    prepend-icon="mdi-account-circle"
                    />
                    <v-text-field
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' :
                    'mdi-eye-off'"
                    @click:append="showPassword =
                    !showPassword"
                    />
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn rounded class="green lighten-1 white--text">Register</v-btn>
                <v-spacer></v-spacer>
                <v-btn rounded class="light-blue lighten-1 white--text">Login</v-btn>
            </v-card-actions>
        </v-card>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false
    }
  }
}
</script>
