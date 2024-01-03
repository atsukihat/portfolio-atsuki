<template>
  <v-app-bar app dense color="transparent" elevation="0"  scroll-behavior="inverted hide" scroll-threshold="850">
    <v-spacer></v-spacer>
        <v-hover v-slot:default="{ isHovering, props }">
          <v-btn href="#about" v-bind="props" :class="{ 'on-hover': isHovering }" v-smooth-scroll="{ duration: 1500}" class="cormorant-font mr-5" variant="text" size="small">About</v-btn>
        </v-hover>
        <v-hover v-slot:default="{ isHovering, props }">
          <v-btn href="#work" v-bind="props" :class="{ 'on-hover': isHovering }" v-smooth-scroll="{ duration: 1500}" class="cormorant-font mr-5" variant="text" size="small">Works</v-btn>
        </v-hover>
        <v-hover v-slot:default="{ isHovering, props }">
          <v-btn href="#skill" v-bind="props" :class="{ 'on-hover': isHovering }" v-smooth-scroll="{ duration: 1500}" class="cormorant-font mr-5" variant="text" size="small">Skills</v-btn>
        </v-hover>
        <v-hover v-slot:default="{ isHovering, props }">
          <v-btn href="#contact" v-bind="props" :class="{ 'on-hover': isHovering }" v-smooth-scroll="{ duration: 1500}" class="cormorant-font" variant="text" size="small">Contact</v-btn>
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
