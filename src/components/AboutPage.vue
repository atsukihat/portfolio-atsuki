<template>
  <v-container
    fluid
    id="about"
    class="bg-secondary"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <v-row style="height: 100%">
      <v-col>
        <v-row style="height: 15%">
          <v-col align-self="center" class="text-center">
            <PageTitle>About Me</PageTitle>
          </v-col>
        </v-row>
        <v-row style="height: 25%">
          <v-col align-self="center" class="text-center">
            <p>福岡県出身のエンジニア</p>
            <p>
              高校を卒業後、広島大学情報科学部に入学。その後、広島大学大学院先進理工系科学研究科に進学。
            </p>
            <p></p>
          </v-col>
        </v-row>
        <v-row style="height: 60%">
          <v-col align-self="center" class="text-center">
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
        </v-row>
      </v-col>
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
