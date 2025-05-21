<template>
  <v-app>
    <default-bar :current-section="currentSection" />

    <default-view />
    <app-footer />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import AppFooter from "./AppFooter.vue";
import { useScrollPosition } from "@/composables/useScrollPosition";

const { currentSection } = useScrollPosition();
</script>

<style>
.cormorant-font {
  font-family: serif;
}
/* .japanese-font {
  font-family: 'Noto Serif Japanese';
} */
/* .vibes-font {
  font-family: 'Great Vibes';
} */
</style>
