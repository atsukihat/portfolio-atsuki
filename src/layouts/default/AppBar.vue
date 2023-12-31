<template>
  <v-app-bar color="white" elevation="0">
    <v-spacer></v-spacer>
    <a href="#home" @click.="goToSection('home')" class="mx-5">Home</a>
    <a href="#about" @click.prevent="goToSection('about')" class="mx-5">About</a>
    <a href="#work" @click.prevent="goToSection('work')" class="mx-5">Work</a>
    <a href="#contact" @click.prevent="goToSection('contact')" class="mx-5">Contact</a>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>


<script setup>
</script>

<style>
.active-link {
  /* スタイル定義 */
}
</style>
