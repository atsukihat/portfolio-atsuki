<template>
  <v-container
    id="home"
    fluid
    class="bg-primary"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <v-row style="height: 100%">
      <v-col class="text-center" align-self="center">
        <v-row class="fill-height" align="center" justify="center">
          <v-col class="d-flex justify-center align-center">
            <!-- "A" を画像で置き換え -->
            <v-img
              :src="nameImg"
              class="mt-14"
              max-height="45"
              max-width="45"
            ></v-img>
            <!-- 残りのテキスト -->
            <span class="animated-text name-size cormorant-font mt-16"
              >TSUKI&numsp;H
            </span>
            <v-img
              :src="nameImg"
              class="mt-14"
              max-height="45"
              max-width="45"
            ></v-img>
            <span class="animated-text name-size cormorant-font mt-16">
              TTORI</span
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="animated-text cormorant-font text-grey-darken-1 mb-8">
              ENGINEER
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col align-self="end">
            <v-btn
              href="#about"
              v-smooth-scroll="{ duration: 1500 }"
              class="animated-btn"
              color="white"
              icon="mdi mdi-arrow-down"
              size="x-large"
              elevation="2"
            ></v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useWindowSize } from "@/composables/useWindowSize";
import nameImg from "@/assets/favicon_ver2_transparent.png";

const { width, height } = useWindowSize();
</script>

<style scoped>
@keyframes floatUp {
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes popUp {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animated-text {
  animation: floatUp 3s ease-in-out;
}

.animated-img {
  animation: floatUp 0.1s ease-in;
}

.animated-btn {
  opacity: 0;
  animation: popUp 2.7s ease-in-out 1s forwards;
}
</style>
