<template>
  <h1 class="mt-4">本の詳細</h1>
  <h2 class="mt-8">{{ props.searchResult[props.selectIndex].title }}</h2>
  <v-divider></v-divider>
  <div class="d-flex align-start mt-10">
    <v-img :src="props.searchResult[props.selectIndex].image" width="300" class="mr-10 w-25"></v-img>
    <div>
      <h3>Description</h3>
      <p>{{ props.searchResult[props.selectIndex].description }}</p>
      <v-divider></v-divider>
      <h3>Author</h3>
      <p v-for="author in props.searchResult[props.selectIndex].authors" :key="author">{{ author }}</p>
      <v-divider></v-divider>
      <h3>Publish Date</h3>
      <p>{{ props.searchResult[props.selectIndex].publishDate }}</p>
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

interface Props {
  searchResult: [{
    title: string
    image: string
    description: string
    authors: string
    publishDate: string
  }]
  selectIndex: number
  cartModal: boolean
}


const props = defineProps<Props>()

const cartModal = computed({
  get: () => props.cartModal,
  set: (bool) => {
    emit('emitCartModal', bool)
  }
})

const addToCart = () => {
  cartModal.value = true
  emit('emitAddToCart')
}

</script>
s