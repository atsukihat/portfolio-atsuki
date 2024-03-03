<template>
  <v-container
    fluid
    id="work"
    class="bg-third"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <v-row style="height: 100%">
      <v-col>
        <v-row style="height: 10%">
          <v-col cols="12" class="text-center">
            <PageTitle>Works</PageTitle>
          </v-col>
        </v-row>
        <v-container>
          <v-row style="height: 90%" class="py-4">
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
              <p class="my-4">かえで（広島大学授業レビューサイト）</p>
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
              <p class="my-4">ポートフォリオ</p>
            </v-col>
            <v-col cols="6" class="text-center px-16">
              <DialogButton
                :show-dialog="UDShowDialog"
                :overview-description="UDOverviewDescription"
                :languages-description="UDLanguagesDescription"
                :links="UDLinks"
                :heading-image="UDHeadeingImage"
                :images="UDImages"
                @update:showDialog="UDShowDialog = $event"
              />
              <p class="my-4">UD-book（音声教材システム）</p>
            </v-col>
            <v-col cols="6" class="text-center px-16">
              <DialogButton
                :show-dialog="scrapingShowDialog"
                :overview-description="scrapingOverviewDescription"
                :languages-description="scrapingLanguagesDescription"
                :links="scrapingLinks"
                :heading-image="scrapingHeadeingImage"
                :images="scrapingImages"
                @update:showDialog="scrapingShowDialog = $event"
              />
              <p class="my-4">スクレイピング（TA採点自動化プログラム）</p>
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
import portfolioWorkImage from "@/assets/portfolio_works.png";
import PortfolioSkillsImage from "@/assets/portfolio_skills.png";
import UDHeadingImage from "@/assets/ud_illust.png";
import UDFeatureImage from "@/assets/ud_feature.png";
import UDReaderImage from "@/assets/ud_reader.png";
import ScrapingLanguageImage from "@/assets/scraping.png";
import ScrapingIconImage from "@/assets/scraping_icon.svg";
import ParisImage from "@/assets/paris.jpg";

const { width, height } = useWindowSize();

// かえでの内容の変数
const kaedeShowDialog = ref(false);
const kaedeOverviewDescription =
  "研究室のメンバーと開発した広島大学の授業レビューサイトです。企画から資金集め、開発まで全て行いました。リーダーとしてビジネスコンテストにも出場しました！";
const kaedeLanguagesDescription =
  "vue, vuetify, Laravel, mysql, docker, GithubActions";
const kaedeLinks = [
  {
    url: "https://hirodai-kaede.com/",
    icon: "mdi-web",
    text: "サイトへ",
  },
  {
    url: "https://hirodai-kaede.com/",
    icon: "mdi-web",
    text: "ビジネスコンテスト詳細",
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
  "ポートフォリオサイトです。今までの制作物やスキルを紹介しています。初めてのフロントのwebフレームワークを用いた開発でした。また、githubActionsを使用して自動デプロイなどにも挑戦してみました。";
const portfolioLanguagesDescription = "vue, vuetify, firebase, GithubActions";
const portfolioLinks = [
  {
    url: "https://github.com/amoon46/portfolio-atsuki",
    icon: "mdi-github",
    text: "Github",
  },
];
const portfolioHeadeingImage = PortfolioHeadingImage;
const portfolioImages = [
  { id: "home", image: PortfolioHomeImage },
  { id: "about", image: PortfolioAboutImage },
  { id: "work", image: portfolioWorkImage },
  { id: "skill", image: PortfolioSkillsImage },
];

// UD-bookの内容の変数
const UDShowDialog = ref(false);
const UDOverviewDescription =
  "人間社会科学研究科の研究員として１年間、文部科学省から委託された事業である音声教材システムの開発・保守・運用に従事しました。アジャイル開発や実際に学校に訪問し、システムの説明なども行いました。";
const UDLanguagesDescription =
  "HTML, CSS, javascript, Django, postgresql, docker";
const UDLinks = [
  {
    url: "https://home.hiroshima-u.ac.jp/ujima/onsei/index.html",
    icon: "mdi-web",
    text: "サイトへ",
  },
];
const UDHeadeingImage = UDHeadingImage;
const UDImages = [
  { id: "feature", image: UDFeatureImage },
  { id: "reader", image: UDReaderImage },
];

// スクレイピングの内容の変数
const scrapingShowDialog = ref(false);
const scrapingOverviewDescription =
  "大学のTeaching Assistantの採点作業を自動化するプログラムです。手動で採点を行うのが大変だったため、自動化しました。";
const scrapingLanguagesDescription = "python, selenium";
const scrapingLinks = [
  {
    url: "https://github.com/amoon46/TA-program",
    icon: "mdi-github",
    text: "Github",
  },
];
const scrapingHeadeingImage = ScrapingLanguageImage;
const scrapingImages = [{ id: "icon", image: ScrapingIconImage }];
</script>
