<template>
  <v-card>
    <v-row class="ma-2">
      <v-col cols="12" sm="12" md="5" lg="5" xl="5">
        <v-sheet border rounded class="pa-1 mt-3">
          <v-row>
            <v-col>
              <div class="text-decoration-underline text-center">概要</div>
              <p class="mt-3">{{ overviewDescription }}</p>
            </v-col>
          </v-row>
        </v-sheet>

        <v-sheet border rounded class="pa-1 my-4">
          <v-row>
            <v-col>
              <div class="text-decoration-underline text-center">使用技術</div>
              <p class="mt-3 text-center">{{ languagesDescription }}</p>
            </v-col>
          </v-row>
        </v-sheet>

        <v-sheet border rounded class="pa-2">
          <v-row>
            <v-col>
              <div class="text-decoration-underline text-center">リンク</div>
              <template v-for="(link, index) in links" :key="index">
                <v-btn
                  variant="text"
                  color="light-blue"
                  :href="link.url"
                  target="_blank"
                  class="mt-3"
                >
                  <v-icon left>{{ link.icon }}</v-icon>
                  {{ link.text }}
                </v-btn>
              </template>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>

      <!-- Dynamic Images -->
      <v-col cols="12" sm="12" md="7" lg="7" xl="7">
        <v-row>
          <v-spacer></v-spacer>
          <template v-for="(image, index) in images" :key="`image-${index}`">
            <v-hover v-slot:default="{ isHovering, props }">
              <v-col>
                <v-card
                  :elevation="selected === image.id ? 2 : 10"
                  @click="updateSelectedImage(image.image, image.id)"
                  v-bind="props"
                >
                  <v-img :src="image.image"></v-img>
                </v-card>
              </v-col>
            </v-hover>
          </template>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-col>
            <v-img :src="selectedImage"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-card-actions>
        <v-btn
          icon="$close"
          variant="text"
          @click="closeDialog"
          text="close"
        ></v-btn>
      </v-card-actions>
    </v-row>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { ref } from "vue";

// Props for dynamic content
const props = defineProps({
  showDialog: Boolean,
  overviewDescription: String,
  languagesDescription: String,
  links: Array,
  images: Array,
});

const selectedImage = ref(props.images[0].image);
const selected = ref(props.images[0].id);

const updateSelectedImage = (imageUrl, imageId) => {
  selectedImage.value = imageUrl;
  selected.value = imageId;
};

const emits = defineEmits(["update:showDialog"]);

const closeDialog = () => {
  emits("update:showDialog", false);
};
</script>
