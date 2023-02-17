<template>
  <v-app >
    <GlobalHeader/>
    <v-main class="main">
      <router-view/>
      <CartModal/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import CartModal from '@/components/CartModal.vue'
import { ref,reactive,provide } from 'vue';

// const drawer = ref(true)
let selectIndex =  ref(0)
const cart = reactive([])
const searchResult = reactive([]);
const dialog = reactive({
  detail: false,
  cart: false
})
// provide('drawer', drawer)
provide('selectIndex', selectIndex)
provide('cart', cart)
provide('searchResult', searchResult)
provide('dialog', dialog)
</script>

<style>
.main {
  width: 980px;
  margin: 0 auto;
}
</style>