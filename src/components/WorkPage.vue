<template>
  <v-container
    fluid
    id="work"
    class="bg-white"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <v-row style="height: 100%">
      <v-col>
        <v-row style="height: 15%">
          <v-col cols="12" class="text-center">
            <PageTitle>Works</PageTitle>
          </v-col>
        </v-row>
        <v-container>
          <v-row style="height: 85%">
            <v-col cols="6" class="text-center">
              <DialogButton />
              <p class="my-8">かえで</p>
            </v-col>
            <v-col cols="6" class="text-center">
              <p class="my-8">かえで</p>
            </v-col>
            <v-col cols="6" class="text-center">
              <p class="my-8">かえで</p>
            </v-col>
            <v-col cols="6" class="text-center">
              <p class="my-8">かえで</p>
            </v-col>
            <v-col cols="4" class="text-center">
              <p class="my-8">かえで</p>
            </v-col>
            <v-col cols="4" class="text-center">
              <p class="my-8">かえで</p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import DialogButton from "../components/shared/DialogButton";
import PageTitle from "@/components/shared/PageTitle";
import { useWindowSize } from "@/composables/useWindowSize";

const { width, height } = useWindowSize();
</script>
