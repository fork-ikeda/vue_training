<template>
  <v-container v-if="!done">
    <v-row>
      <v-col>
        <h1>カートに入っているアイテム</h1>
      </v-col>
      <v-divider></v-divider>
    </v-row>
    <v-row v-if="props.cart.length === 0">
      <v-col>
        <p>カートにアイテムが入っていません</p>
      </v-col>
    </v-row>
    <v-row v-else v-for="(book, index) in props.cart" :key="index">
      <v-col cols="2">
        <img :src="book.image" alt="" />
      </v-col>
      <v-col>
        {{ book.title }}
      </v-col>
      <v-col>
        <v-btn @click="deleteItem(index)">削除</v-btn>
      </v-col>
      <v-divider></v-divider>
    </v-row>
    <form @submit.prevent="handleSubmit" class="mt-5">
      <h2>購入者情報</h2>
      <v-divider></v-divider>
      <v-row class="py-5">
        <v-col cols="3">
          <div class="mt-4 ml-5">お名前</div>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="firstName" :error-messages="firstNameError" variant="outlined" placeholder="姓"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="lastName" :error-messages="lastNameError" variant="outlined" placeholder="名"></v-text-field>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="py-5">
        <v-col cols="3">
          <div class="mt-4 ml-5">郵便番号</div>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="postalCode" :error-messages="postalCodeError" variant="outlined" placeholder="0000000"></v-text-field>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="py-5">
        <v-col cols="3">
          <div class="mt-4 ml-5">都道府県</div>
        </v-col>
        <v-col cols="3">
          <v-select v-model="prefecture" :error-messages="prefectureError" :items="selectPrefecture" variant="outlined"></v-select>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="py-5">
        <v-col cols="3">
          <div class="mt-4 ml-5">市区町村</div>
        </v-col>
        <v-col>
          <v-text-field v-model="city" :error-messages="cityError" variant="outlined" placeholder="市区町村"></v-text-field>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="py-5">
        <v-col cols="3">
          <div class="mt-4 ml-5">番地以降</div>
        </v-col>
        <v-col>
          <v-text-field v-model="address" :error-messages="addressError" variant="outlined" placeholder="番地以降"></v-text-field>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="py-5">
        <v-col cols="3">
          <div class="mt-4 ml-5">電話番号</div>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="tel" :error-messages="telError" variant="outlined" placeholder="0000000000"></v-text-field>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="py-5">
        <v-col cols="3">
          <div class="mt-4 ml-5">メールアドレス</div>
        </v-col>
        <v-col>
          <v-text-field v-model="email" :error-messages="emailError" variant="outlined" placeholder="sample@sample.com"></v-text-field>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </form>
    <div class="text-center mt-5 pb-10">
      <v-btn type="submit" @click="handleSubmit"> 購入する </v-btn>
    </div>
  </v-container>
  <div v-else>
    <v-container>
      <h1>購入しました</h1>
      <v-row v-for="book, in purchasedItem" :key="book.title" class="my-5">
        <v-col cols="2">
          <img :src="book.image" alt="" />
        </v-col>
        <v-col>
          {{ book.title }}
        </v-col>
        <v-divider></v-divider>
      </v-row>
      <div class="text-center">
      <router-link to="/"><v-btn>トップに戻る</v-btn></router-link>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref, reactive } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

// props
interface Props {
  cart: [
    {
      title: string;
      image: string;
      description: string;
    }
  ];
}

const props = defineProps<Props>();

// emit
const emit = defineEmits(["emitDeleteItem"]);

const cart = computed({
  get: () => props.cart,
  set: (cart) => {
    emit("emitDeleteItem", cart);
  },
});

// method

const deleteItem = (index: number) => {
  cart.value.splice(index, 1);
};

// data
const purchasedItem:any = reactive([])
const done = ref(false);
const selectPrefecture = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];

// validation
const schema = yup.object({
  firstName: yup.string().required("姓を入力してください").label("firstName"),
  lastName: yup.string().required("名を入力してください").label("lastName"),
  postalCode: yup.string().required("郵便番号を入力してください").label("postalCode"),
  prefecture: yup.string().required("都道府県を選択してください").label("prefecture"),
  city: yup.string().required("市区町村を入力してください").label("city"),
  address: yup.string().required("番地以降を入力してください").label("address"),
  tel: yup.string().required("電話番号を入力してください").label("tel"),
  email: yup.string().required("メールアドレスを入力してください").label("Email"),
});

const { validate } = useForm({ validationSchema: schema });
const { value: firstName, errorMessage: firstNameError } = useField<string>("firstName");
const { value: lastName, errorMessage: lastNameError } = useField<string>("lastName");
const { value: postalCode, errorMessage: postalCodeError } = useField<string>("postalCode");
const { value: prefecture, errorMessage: prefectureError } = useField<string>("prefecture");
const { value: city, errorMessage: cityError } = useField<string>("city");
const { value: address, errorMessage: addressError } = useField<string>("address");
const { value: tel, errorMessage: telError } = useField<string>("tel");
const { value: email, errorMessage: emailError } = useField<string>("email");

const handleSubmit = async () => {
  const result = await validate();
  if (result.valid) {
    done.value = true;
    for(let index in cart.value) {
      purchasedItem.push(cart.value[index])
    }
    cart.value.splice(0, cart.value.length)
  } else {
    return false;
  }
};

// ダミー
// firstName.value = "test"
// lastName.value = "test"
// postalCode.value = "test"
// prefecture.value = "test"
// city.value = "test"
// address.value = "test"
// tel.value = "test"
// email.value = "test"
</script>
