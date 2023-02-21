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
import { defineProps, defineEmits, computed } from "vue";

const emit = defineEmits([
  'emitAddToCart',
  'emitCartModal' 
])


const props = defineProps({
  searchResult: {
    type: Array,
    required: true
  },
  cart: {
    type: Array
  },
  selectIndex: {
    type: Number,
    required: true
  },
  cartModal: {
    type: Boolean
  }
})

const book: object = computed(() => props.searchResult[props.selectIndex])
const cartModal = computed({
  get: () => props.cartModal,
  set: (bool) => {
    emit('emitCartModal', bool)
  }
})
const cart: object[] = computed({
  get: () => props.cart,
  set: (cart) => {
    emit('emitAddToCart', cart)
  }
})


const addToCart = () => {
  cart.value.push(props.searchResult[props.selectIndex])
  cartModal.value = true
}
</script>
s