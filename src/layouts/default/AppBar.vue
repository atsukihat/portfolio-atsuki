<template>
  <v-app-bar app color="transparent" elevation="0"  scroll-behavior="inverted hide" scroll-threshold="700">
    <v-spacer></v-spacer>
        <v-hover v-slot:default="{ isHovering, props }">
          <v-btn href="#about" v-bind="props" :class="{ 'on-hover': isHovering }" v-smooth-scroll="{ duration: 1500}" class="cormorant-font mx-8" variant="text" size="normal">About</v-btn>
        </v-hover>
        <v-hover v-slot:default="{ isHovering, props }">
          <v-btn href="#work" v-bind="props" :class="{ 'on-hover': isHovering }" v-smooth-scroll="{ duration: 1500}" class="cormorant-font mx-8" variant="text" size="normal">Work</v-btn>
        </v-hover>
        <v-hover v-slot:default="{ isHovering, props }">
          <v-btn href="#contact" v-bind="props" :class="{ 'on-hover': isHovering }" v-smooth-scroll="{ duration: 1500}" class="cormorant-font mx-4" variant="text" size="normal">Contact</v-btn>
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
