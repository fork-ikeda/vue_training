<template>
  <h1 class="mt-4">Book Detail</h1>
  <h2 class="mt-8">{{ book.title }}</h2>
  <v-divider></v-divider>
  <div class="d-flex align-start mt-10">
    <v-img :src="book.image" width="300" class="mr-10 w-25"></v-img>
    <div>
      <h3>Description</h3>
      <p>{{ book.description }}</p>
      <v-divider></v-divider>
      <h3>Author</h3>
      <p>{{ book.authors }}</p>
      <v-divider></v-divider>
      <h3>Publish Date</h3>
      <p>{{ book.publishDate }}</p>
    </div>
  </div>
  <div class="text-center mt-16">
    <v-btn @click="addToCart" class="mr-4">カートに入れる</v-btn>
    <router-link to="/"><v-btn>一覧に戻る</v-btn></router-link>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

const selectIndex = inject("selectIndex");
const searchResult = inject("searchResult");
const cart = inject('cart')
const dialog = inject('dialog')
const book = searchResult[selectIndex.value];

const addToCart = () => {
  cart.push(searchResult[selectIndex.value])
  dialog.cart = true
}
</script>
