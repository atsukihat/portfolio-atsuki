<template>
  <v-container
    fluid
    id="about"
    class="bg-forth"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <v-row style="height: 100%">
      <v-col>
        <v-row style="height: 15%">
          <v-col align-self="center" class="text-center">
            <PageTitle>Skills</PageTitle>
          </v-col>
        </v-row>
        <v-row style="height: 25%">
          <v-col align-self="center" class="text-center"> </v-col>
        </v-row>
        <v-row style="height: 60%">
          <v-col align-self="center" class="text-center"> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useWindowSize } from "@/composables/useWindowSize";
import PageTitle from "@/components/shared/PageTitle";

const { width, height } = useWindowSize();
</script>
