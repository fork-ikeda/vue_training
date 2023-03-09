<template>
  <v-app>
    <GlobalHeader 
    :cartModal="props.cartModal"
    @emitCartModal="isCartModalOpen"
    />
    <v-main class="main">
      <router-view 
      v-bind="props"
      @emitResult="getResult"
      @emitSelectIndex="getSelectIndex"
      @emitAddToCart="addToCart"
      @emitDetailModal="isDetailModalOpen"
      @emitCartModal="isCartModalOpen"
      />
      <CartModal
      :cart="props.cart"
      :detailModal="props.detailModal"
      :cartModal="props.cartModal"
      @emitDetailModal="isDetailModalOpen"
      @emitCartModal="isCartModalOpen"
      />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
import CartModal from "@/components/CartModal.vue";
import { reactive, } from "vue";

// props
interface Props {
  searchResult: [
    {
      title?: string
      image?: string
      description?: string
      authors?: string
      publishDate?: string
    }
  ]
  cart: [
    {
      title?: string
      image?: string
      description?: string
    }
  ]
  selectIndex: number
  detailModal: boolean
  cartModal: boolean
}

const props:Props = reactive({
  searchResult: [],
  cart: [],
  selectIndex: 0,
  detailModal: false,
  cartModal: false,
})

// emit
const getResult = (searchResult: [{title: string; image: string; description: string}]) => {
  props.searchResult = searchResult
}
const getSelectIndex = (selectIndex: number) => {
  props.selectIndex = selectIndex
}
const addToCart = () => {
  props.cart.push(props.searchResult[props.selectIndex])
}
const isDetailModalOpen = (detailModal: boolean) => {
  props.detailModal = detailModal
}

const isCartModalOpen = (cartModal: boolean) => {
  props.cartModal = cartModal
}

</script>

<style>
.main {
  width: 980px;
  margin: 0 auto;
}

li {
  list-style: none;
}

img {
  max-width: 100%;
}
</style>
