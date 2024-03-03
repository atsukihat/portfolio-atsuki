<template>
  <v-container
    fluid
    id="skills"
    class="bg-secondary"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <v-row style="height: 100%">
      <v-col>
        <v-row style="height: 15%">
          <v-col align-self="center" class="text-center">
            <PageTitle>Skills</PageTitle>
          </v-col>
        </v-row>
        <v-container>
          <v-row style="height: 85%">
            <v-col
              v-for="(skill, index) in Skills"
              :key="index"
              cols="6"
              sm="6"
              md="6"
              lg="4"
              xl="4"
              align-self="center"
              class="text-center my-5"
            >
              <SkillCard :skill="skill" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useWindowSize } from "@/composables/useWindowSize";
import PageTitle from "@/components/shared/PageTitle";
import SkillCard from "@/components/shared/SkillCard.vue";
import PythonImg from "@/assets/python.svg";
import DjangoImg from "@/assets/django.svg";
import VueImg from "@/assets/vue.svg";
import LaravelImg from "@/assets/laravel.svg";
import DockerImg from "@/assets/docker.svg";
import MysqlImg from "@/assets/mysql.svg";

const Skills = [
  {
    name: "Python",
    image: PythonImg,
    years: "2年間",
    purpose: "データ分析，スクレイピング",
  },
  {
    name: "Laravel",
    image: LaravelImg,
    years: "6ヶ月",
    purpose: "Webアプリケーション開発",
  },
  {
    name: "Docker",
    image: DockerImg,
    years: "1年間",
    purpose: "開発環境構築",
  },
  {
    name: "Django",
    image: DjangoImg,
    years: "1年間",
    purpose: "Webアプリケーション開発",
  },
  {
    name: "Vue.js",
    image: VueImg,
    years: "6ヶ月",
    purpose: "フロントエンド開発",
  },
  {
    name: "MySQL",
    image: MysqlImg,
    years: "6ヶ月",
    purpose: "データベース設計",
  },
];

const { width, height } = useWindowSize();
</script>
