<template>
  <v-dialog v-model="cartModal" width="700">
    <v-card class="pa-4">
      <v-container>
        <v-row>
          <v-col> カートに入っているアイテム </v-col>
          <v-divider></v-divider>
        </v-row>
        <div v-if="cart.length === 0" class="mt-7">
          <p>カートにアイテムが入っていません</p>
        </div>
        <div v-else class="mt-5">
          <v-row v-for="(book, index) in cart" :key="index">
            <v-col cols="2">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <p class="mt-2">{{ book.title }}</p>
            </v-col>
            <v-col>
              <v-btn @click="deleteItem(index)">削除</v-btn>
            </v-col>
            <v-divider></v-divider>
          </v-row>
        </div>
        <div class="mt-8">
          <router-link to="/checkout"><v-btn block @click="closeModal" color="primary">check out</v-btn></router-link>
          <v-btn block @click="closeModal" class="mt-4"> Close </v-btn>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";


// props
interface Props {
  cart: [
    {
      title: string;
      image: string;
      description: string;
    }
  ];
  detailModal: boolean;
  cartModal: boolean;
}

const props = defineProps<Props>();

// emit
const emit = defineEmits(["emitDetailModal", "emitCartModal", "emitDeleteItem"]);

const cartModal = computed({
  get: () => props.cartModal,
  set: (bool) => {
    emit("emitCartModal", bool);
  },
});
const detailModal = computed({
  get: () => props.detailModal,
  set: (bool) => {
    emit("emitDetailModal", bool);
  },
});

const cart = computed({
  get: () => props.cart,
  set: (cart) => {
    emit("emitDeleteItem", cart);
  },
});

// methods
const closeModal = () => {
  detailModal.value = false;
  cartModal.value = false;
};

const deleteItem = (index: number) => {
  cart.value.splice(index, 1);
};
</script>
