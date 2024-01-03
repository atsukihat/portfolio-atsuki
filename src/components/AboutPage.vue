<template>
  <v-container fluid  id=about class="bg-grey-lighten-5">
    <v-row class="mt-12">
      <v-col cols="12" class="text-center">
        <p class="vibes-font title-size">About me</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <!-- <v-col cols="3">
        <v-img src="/Users/atsuki/Documents/dev/portfolio-atsuki/src/assets/profile-image.png" max-height="400"></v-img>
      </v-col> -->
      <v-col cols="8" class="text-center">
        <p>福岡県出身のエンジニア。</p>
        <p>東福岡高校を卒業後、1年の浪人期間を経て2019年に広島大学情報科学部に入学。大学生時代は、</p>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-carousel show-arrows="hover" cycle hide-delimiters>
          <!-- <v-carousel-item
            :src="image_paris"
          ></v-carousel-item> -->

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          ></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { ref } from 'vue'

// const image_paris = ref(require("../assets/paris.jpg"))
</script>
