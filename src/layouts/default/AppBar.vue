<template>
  <v-app-bar scroll-behavior="elevate" style="height: 85px;">
    <v-spacer>
      <v-app-bar-title style="font-size: 30px">Title</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-heart"></v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-spacer>
  </v-app-bar>
</template>

<script setup>
  //
</script>
