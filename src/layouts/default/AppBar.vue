<template>
  <v-app-bar color="white" elevation="0" scroll-behavior="inverted hide" scroll-threshold="10">
    <v-spacer></v-spacer>
      <v-hover v-slot:default="{ isHovering, props }">
        <v-btn href="#home" v-bind="props" :class="{ 'on-hover': isHovering }" v-smooth-scroll="{ duration: 1500}" class="mx-3" variant="plain" size="small">Home</v-btn>
        <v-btn href="#about"  v-smooth-scroll="{ duration: 1500}" class="mx-3" variant="text" size="small">About</v-btn>
        <v-btn href="#work" v-smooth-scroll="{ duration: 1500}" class="mx-3" variant="text" size="small">Work</v-btn>
        <v-btn href="#contact" v-smooth-scroll="{ duration: 1500}" class="mx-3" variant="text" size="small">Contact</v-btn>
      </v-hover>
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

<style lang="sass" scoped>
.v-btn.on-hover
  background-color: black
  color: white
</style>
