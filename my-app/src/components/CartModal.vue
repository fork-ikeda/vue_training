<template>
  <v-dialog v-model="dialog.cart" width="auto">
    <v-card>
      <v-card-title> カートに入っているアイテム </v-card-title>
      <v-card-text>
        <li v-for="book in cart" :key="book.index">{{ book.title }}</li>
      </v-card-text>
      <div class="pa-4">
        <router-link to="/checkout"><v-btn block color="primary" @click="(dialog.detail = false), (dialog.cart = false)">check out</v-btn></router-link>
        <v-btn block @click="(dialog.detail = false), (dialog.cart = false)" class="mt-4"> Close </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { inject } from "vue";
const dialog = inject("dialog");
const cart: any = inject("cart");
</script>
