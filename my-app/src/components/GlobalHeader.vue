<template>
  <v-app-bar>
    <template v-slot:append>
        <v-icon @click="openModal">mdi-cart-outline</v-icon>
    </template>
    <v-app-bar-title><router-link to="/">Book Shop</router-link></v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  cartModal: {
    type: Boolean
  }
})

const emit = defineEmits([
  'emitCartModal' 
])


const cartModal = computed({
  get: () => props.cartModal,
  set: (bool) => {
    emit('emitCartModal', bool)
  }
})

const openModal = () => {
  cartModal.value = true
}
</script>
