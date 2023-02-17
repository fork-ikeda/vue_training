<template>
  <h1>checkout</h1>
</template>

<script setup lang="ts">
import {inject} from 'vue'

const selectIndex = inject('selectIndex')
const searchResult = inject('searchResult')
const book = searchResult[selectIndex.value]


</script>