<template>
  <v-container
    fluid
    id="about"
    class="bg-secondary"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <v-row justify="start">
      <v-col align-self="start">
        <PageTitle>About Me</PageTitle>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <p>福岡県出身のエンジニア</p>
        <p>
          東福岡高校を卒業後、1年の浪人期間を経て広島大学情報科学部に入学。広島大学大学院先進理工系科学研究科に進学。
        </p>
        <p>
          現在は、学習工学研究室において論理的思考力を促進させる「三角ロジック組立演習システム」に関する研究を行っている。
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-carousel
          show-arrows="hover"
          cycle
          hide-delimiter-background
          height="auto"
        >
          <v-carousel-item v-for="(image, index) in images" :key="index">
            <v-img :src="image" max-height="400"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import parisImage from "@/assets/paris.jpg";
import presentationImage from "@//assets/presentation.png";
import higashiImage from "@//assets/Higashi.jpg";
import { useWindowSize } from "@/composables/useWindowSize";
import PageTitle from "@/components/shared/PageTitle";

const images = [parisImage, presentationImage, higashiImage];

const { width, height } = useWindowSize();
</script>
