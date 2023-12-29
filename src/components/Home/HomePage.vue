<template>
  <v-container id="home" class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-col name="fade" appear>
        <h2 class="text-h2 mb-4 animated-text">ATSUKI&numsp;HATTORI</h2>
        <p class="animated-text text-grey">ENGINNER</p>
      </v-col>
    </v-responsive>
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

.animated-text {
  animation: floatUp 2.0s ease-in-out;
}

.fade-enter-active {
  transition: opacity 0.2s;
}
.fade-enter {
  opacity: 0;
}
</style>
