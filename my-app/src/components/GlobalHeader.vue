<template>
  <v-app-bar>
    <template v-slot:append>
        <v-icon @click="cartModal = true">mdi-cart-outline</v-icon>
    </template>
    <v-app-bar-title><router-link to="/">Book Shop</router-link></v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, computed } from "vue";

const emit = defineEmits([
  'emitDetailModal',
  'emitCartModal' 
])

const props = defineProps({
  cartModal: {
    type: Boolean
  }
})

const cartModal = computed({
  get: () => props.cartModal,
  set: (bool) => {
    emit('emitCartModal', bool)
  }
})
</script>
