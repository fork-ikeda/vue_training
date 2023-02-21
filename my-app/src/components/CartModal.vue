<template>
  <v-dialog v-model="cartModal" width="auto">
    <v-card>
      <v-card-title> カートに入っているアイテム </v-card-title>
      <v-card-text>
        <li v-for="book in props.cart" :key="book.index">{{ book.title }}</li>
      </v-card-text>
      <div class="pa-4">
        <router-link to="/checkout"><v-btn block @click="closeModal" color="primary">check out</v-btn></router-link>
        <v-btn block @click="closeModal" class="mt-4"> Close </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, computed } from "vue";

const emit = defineEmits([
  'emitDetailModal',
  'emitCartModal' 
])

const props = defineProps({
  cart: {
    type: Array
  },
  detailModal: {
    type: Boolean
  },
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
const detailModal = computed({
  get: () => props.detailModal,
  set: (bool) => {
    emit('emitDetailModal', bool)
  }
})

const closeModal = () => {
  detailModal.value = false
  cartModal.value = false
}

</script>
