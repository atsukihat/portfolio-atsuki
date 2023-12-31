<template>
  <v-app-bar color="white" elevation="0">
    <v-spacer></v-spacer>
    <v-btn href="#home" v-smooth-scroll="{ duration: 2000}" class="mx-5" >Home</v-btn>
    <v-btn href="#about"  v-smooth-scroll="{ duration: 2000}" class="mx-5">About</v-btn>
    <v-btn href="#work" v-smooth-scroll="{ duration: 2000}" class="mx-5">Work</v-btn>
    <v-btn href="#contact" v-smooth-scroll="{ duration: 2000}" class="mx-5">Contact</v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>


<script setup>
import { inject, ref } from 'vue'
  const myEl = ref(null)
  const smoothScroll = inject('smoothScroll')
  const scrollToMyEl = () => {
    smoothScroll({
      scrollTo: myEl.value,
      hash: '#sampleHash'
    })
  }
</script>
