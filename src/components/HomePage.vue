<template>
  <v-container
    id="home"
    fluid
    class="bg-primary"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <v-row style="height: 100%">
      <v-col class="text-center" align-self="center">
        <v-row>
          <v-col>
            <p class="animated-text name-size cormorant-font mt-16">
              ATSUKI&numsp;HATTORI
            </p>
            <p class="animated-text cormorant-font text-grey-darken-1 mb-10">
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
  animation: floatUp 1.5s ease-in-out;
}

.animated-btn {
  opacity: 0;
  animation: popUp 1.5s ease-in-out 1s forwards;
}
</style>
