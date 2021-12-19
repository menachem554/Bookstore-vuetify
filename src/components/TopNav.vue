<template>
 <div>
  <v-toolbar
   elevation="4"
   color="blue-grey lighten-5"
   
  >
    <v-toolbar-title>Bookstore</v-toolbar-title>

      <v-spacer></v-spacer>

        <v-btn to="/home"
         text
         rounded
         color="blue-grey darken-1">
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn to="store"
         text
         rounded
         color="blue-grey darken-1">
          <v-icon>mdi-store</v-icon>
          Store
        </v-btn>
        <v-btn to="cart"
         text
         rounded
         color="blue-grey darken-1">
          <v-icon>mdi-cart</v-icon>
          Cart
        </v-btn>
        <v-btn to="dashboard"
         text 
         rounded
         color="blue-grey darken-1">
          <v-icon>mdi-view-dashboard-edit</v-icon>
          dashboard
        </v-btn>
       </v-toolbar>
      </div>
</template>
