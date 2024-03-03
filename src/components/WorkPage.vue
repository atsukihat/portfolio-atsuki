<template>
  <v-container
    fluid
    id="work"
    class="bg-indigo"
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
            <v-col cols="6" class="text-center px-16">
              <DialogButton
                :show-dialog="kaedeShowDialog"
                :overview-description="kaedeOverviewDescription"
                :languages-description="kaedeLanguagesDescription"
                :links="kaedeLinks"
                :heading-image="kaedeHeadeingImage"
                :images="kaedeImages"
                @update:showDialog="kaedeShowDialog = $event"
              />
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
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useWindowSize } from "@/composables/useWindowSize";
import DialogButton from "../components/shared/DialogButton";
import KaedeImage from "@/assets/kaede.jpg";
import kaedeHeadingImage from "@/assets/kaede.jpg";
import ParisImage from "@/assets/paris.jpg";
import PageTitle from "@/components/shared/PageTitle";

const { width, height } = useWindowSize();

// かえでの内容の変数
const kaedeShowDialog = ref(false);
const kaedeOverviewDescription = "広島大学の授業レビューサイトを作成しました。";
const kaedeLanguagesDescription =
  "vue, vuetify, Laravel, docker, firebase, githubActions";
const kaedeLinks = [
  { url: "https://example.com", icon: "mdi-web", text: "Visit Website" },
];
const kaedeHeadeingImage = kaedeHeadingImage;
const kaedeImages = [
  { id: "kaede", image: KaedeImage },
  { id: "paris", image: ParisImage },
];
</script>
