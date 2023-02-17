<template>
  <div>
    <div class="w-50 ma-4">
      <v-text-field label="本のタイトルを検索" v-model="data.keyword"></v-text-field>
      <v-btn @click="search(data.keyword)">検索する</v-btn>
    </div>
    <v-container class="d-flex flex-wrap justify-start">
      <div v-for='(book, index) in searchResult' :key="index" class="mr-6 mb-6">
        <v-card @click="openModal(index)" width="120">
          <v-img :src="book.image" v-if="book.image !== '/assets/noImage.png'"></v-img>
          <v-img :src="book.image" v-else></v-img>
          <p>{{ book.title }}</p>
        </v-card>
      </div>
    </v-container>
    <v-dialog v-model="dialog.detail" width="800">
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="4">
              <v-img :src="searchResult[selectIndex].image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>
                {{ searchResult[selectIndex].title }}
              </v-card-title>
              <v-card-text>
                {{ searchResult[selectIndex].description }}
              </v-card-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-btn class="mr-10" @click="addToCart()">カートに入れる</v-btn>
              <v-btn class="mr-10" @click="goToDetailPage()">詳細を見る</v-btn>
              <v-btn @click="dialog.detail = false">閉じる</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, inject} from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const cart = inject('cart') as Array<object>
const searchResult:any = inject('searchResult')
let selectIndex: any = inject('selectIndex')
const dialog: any = inject('dialog')
const data = reactive({
  keyword: "",
});

const search = async (keyword: string) => {
  const baseURL = "https://www.googleapis.com/books/v1/volumes?";
  const params: any = {
    q: `intitle:${keyword}`,
    maxResults: 40,
  };
  const queryParams = new URLSearchParams(params);
  const response = await fetch(baseURL + queryParams).then((response) => response.json());
  searchResult.length = 0;
  for (let book of response.items) {
    let title = book.volumeInfo.title;
    let img = book.volumeInfo.imageLinks;
    let description = book.volumeInfo.description;
    let authors = book.volumeInfo.authors
    let publishDate = book.volumeInfo.publishDate
    searchResult.push({
      title: title ? title : "情報なし",
      image: img ? img.thumbnail : require("@/assets/noImage.png"),
      description: description ? description : "情報なし",
      authors: authors ? authors : "情報なし",
      publishDate: publishDate ? publishDate : "情報なし"
    });
  }
};


const openModal = (index: any) => {
  selectIndex.value = index
  dialog.detail = true
}

const addToCart = () => {
  cart.push(searchResult[selectIndex.value])
  dialog.cart = true
}

const goToDetailPage = () => {
  router.push('/detail')
  dialog.detail = false
}
</script>
