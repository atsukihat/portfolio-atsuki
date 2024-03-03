<template>
  <v-card class="mx-auto" max-width="270" max-height="270">
    <v-img
      :src="skill.image"
      contain
      class="grey lighten-2 mt-2"
      aspect-ratio="1.8"
    ></v-img>
    <v-card-title class="cormorant-font text-center">{{
      skill.name
    }}</v-card-title>
    <v-card-text class="mt-2">
      <p>期間：{{ skill.years }}</p>
      <!-- <p>{{ skill.purpose }}</p> -->
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.cormorant-font {
  font-family: "Cormorant", serif;
}
</style>
