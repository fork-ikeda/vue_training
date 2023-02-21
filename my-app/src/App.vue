<template>
  <v-app>
    <GlobalHeader 
    :cartModal="props.cartModal"
    @emitCartModal="isCartModalOpen"
    />
    <v-main class="main">
      <router-view 
      :searchResult="props.searchResult"
      :selectIndex="props.selectIndex"
      :cart="props.cart"
      :detailModal="props.detailModal"
      :cartModal="props.cartModal"
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

const props: {
  searchResult: object[]
  cart: object[]
  selectIndex: number
  detailModal: boolean
  cartModal: boolean
} = reactive({
  searchResult: [],
  cart: [],
  selectIndex: 0,
  detailModal: false,
  cartModal: false,
})


const getResult = (searchResult: object[]) => {
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
</style>
