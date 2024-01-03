<template>
  <v-container id="home" class="fill-height">
    <v-row justify="center" align="center">
      <v-col class="text-center">
        <p class="name-font text-white">Hello world</p>
        <p class="animated-text name-size cormorant-font">ATSUKI&numsp;HATTORI</p>
        <p class="animated-text occupation-size cormorant-font text-grey-darken-1 mb-16">ENGINEER</p>
        <v-btn href="#about" v-smooth-scroll="{ duration: 1500}" class="animated-btn mt-16" color="white" icon="mdi mdi-arrow-down" size="x-large" elevation="2"></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>



<script setup>
  //
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
  animation: popUp 1.5s ease-in-out 1.0s forwards;
}
</style>
