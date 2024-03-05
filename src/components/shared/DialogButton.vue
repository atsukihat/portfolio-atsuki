<template>
  <v-hover v-slot:default="{ isHovering, props }" open-delay="100">
    <v-card
      :elevation="isHovering ? 16 : 2"
      @click="openDialog"
      v-bind="props"
      class="pa-2"
      max-width="450"
      max-height="400"
    >
      <v-img :src="headingImage"></v-img>
    </v-card>
  </v-hover>

  <v-dialog v-model="dialog" max-width="1000">
    <DialogCard
      :show-dialog="dialog"
      :overview-description="overviewDescription"
      :languages-description="languagesDescription"
      :links="links"
      :images="images"
      @update:showDialog="updateDialog"
    />
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";
import DialogCard from "@/components/shared/DialogCard";

const props = defineProps({
  headingImage: String,
  overviewDescription: String,
  languagesDescription: String,
  links: Array,
  images: Array,
});

const dialog = ref(false);

const openDialog = () => {
  dialog.value = true;
};

const updateDialog = (newState) => {
  dialog.value = newState;
};
</script>
>
