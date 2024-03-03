<template>
  <v-container
    fluid
    id="work"
    class="bg-third"
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
          <v-row style="height: 85%" class="py-4">
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
            <v-col cols="6" class="text-center px-16">
              <DialogButton
                :show-dialog="portfolioShowDialog"
                :overview-description="portfolioOverviewDescription"
                :languages-description="portfolioLanguagesDescription"
                :links="portfolioLinks"
                :heading-image="portfolioHeadeingImage"
                :images="portfolioImages"
                @update:showDialog="portfolioShowDialog = $event"
              />
              <p class="my-8">ポートフォリオ</p>
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
import PageTitle from "@/components/shared/PageTitle";
import kaedeHeadingImage from "@/assets/kaede_login.png";
import KaedeLoginImage from "@/assets/kaede_login.png";
import KaedeSearchImage from "@/assets/kaede_search.png";
import KaedeReviewImage from "@/assets/kaede_review.png";
import kaedeProfileImage from "@/assets/kaede_profile.png";
import PortfolioHeadingImage from "@/assets/portfolio.png";
import PortfolioHomeImage from "@/assets/portfolio_home.png";
import PortfolioAboutImage from "@/assets/portfolio_about.png";
import PortfolioSkillsImage from "@/assets/portfolio_skills.png";
import ParisImage from "@/assets/paris.jpg";

const { width, height } = useWindowSize();

// かえでの内容の変数
const kaedeShowDialog = ref(false);
const kaedeOverviewDescription =
  "研究室のメンバーと開発した広島大学の授業レビューサイトです。私の所属していた情報科学部が新設であったため、授業に関する情報が少なく苦労したため開発しました。";
const kaedeLanguagesDescription =
  "vue, vuetify, Laravel, mysql, docker, githubActions";
const kaedeLinks = [
  {
    url: "https://hirodai-kaede.com/",
    icon: "mdi-web",
    text: "サイトへ",
  },
];
const kaedeHeadeingImage = kaedeHeadingImage;
const kaedeImages = [
  { id: "login", image: KaedeLoginImage },
  { id: "search", image: KaedeSearchImage },
  { id: "review", image: KaedeReviewImage },
  { id: "profile", image: kaedeProfileImage },
];

// ポートフォリオの内容の変数
const portfolioShowDialog = ref(false);
const portfolioOverviewDescription =
  "ポートフォリオサイトです。今までの制作物やスキルを紹介しています。";
const portfolioLanguagesDescription = "vue, vuetify, firebase, githubActions";
const portfolioLinks = [
  {
    url: "https://hirodai-kaede.com/",
    icon: "mdi-web",
    text: "サイトへ",
  },
];
const portfolioHeadeingImage = PortfolioHeadingImage;
const portfolioImages = [
  { id: "home", image: PortfolioHomeImage },
  { id: "about", image: PortfolioAboutImage },
  { id: "skill", image: PortfolioSkillsImage },
];
</script>
