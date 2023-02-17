<template>
  <v-app-bar>
    <template v-slot:append>
        <v-icon @click="dialog.cart = true">mdi-cart-outline</v-icon>
    </template>
    <v-app-bar-title><router-link to="/">Book Shop</router-link></v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
import { inject } from "vue";
// const drawer = inject("drawer") as boolean;
const dialog = inject('dialog')
</script>
