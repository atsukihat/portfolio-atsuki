<template>
  <v-app>
    <default-bar />

    <default-view />
    <app-footer />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import AppFooter from "./AppFooter.vue";
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
