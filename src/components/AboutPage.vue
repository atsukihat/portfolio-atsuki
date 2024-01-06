<template>
  <v-container fluid  id=about class="bg-grey-lighten-5">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <p class="cormorant-font title-size">About me</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <p>福岡県出身のエンジニア。</p>
          <p>東福岡高校を卒業後、1年の浪人期間を経て広島大学情報科学部に入学。コンピューターサイエンスについて学んだのち、広島大学大学院に進学。</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="6">
          <v-carousel show-arrows="hover" cycle hide-delimiter-background height="auto">
            <v-carousel-item v-for="(image, index) in images" :key="index">
              <v-img :src="image" max-height="400"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import parisImage from '../assets/paris.jpg'
import presentationImage from '../assets/presentation.png'
import higashiImage from '../assets/Higashi.jpg'

const images = [parisImage, presentationImage, higashiImage]
</script>
