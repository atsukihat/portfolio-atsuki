<template>
  <v-card>
    <v-container>
      <v-row>
        <!-- 左側 -->
        <v-col cols="4">
          <!-- 概要の見出し -->
          <v-row>
            <v-col class="text-center">
              <div class="text-decoration-underline">
                概要
              </div>
            </v-col>
          </v-row>
          <!-- 概要の中身 -->
          <v-row>
            <v-col>
              <p>広大の学生のための授業レビューサイトです．サービスの提案からシステム開発，ビジコンに参加して資金集めを行いました．</p>
            </v-col>
          </v-row>
          <v-divider :thickness="2"></v-divider>
          <!-- 使用言語の見出し -->
          <v-row>
            <v-col class="text-center">
              <div class="text-decoration-underline">
                使用言語
              </div>
            </v-col>
          </v-row>
          <!-- 使用言語の中身 -->
          <v-row>
            <v-col>
              <p>vue, vuetify, Laravel, docker, firebase, githubActions</p>
            </v-col>
          </v-row>
        </v-col>
        <!-- 右側 -->
        <v-col cols="8">
          <!-- 画像の一覧 -->
          <v-row>
            <v-spacer></v-spacer>
            <v-col>
              <v-card @click="updateSelectedImage(kaedeImage)">
                <v-img :src="kaedeImage"></v-img>
              </v-card>
            </v-col>
            <v-col>
              <v-card @click="updateSelectedImage(logoImage)">
                <v-img :src="logoImage"></v-img>
              </v-card>
            </v-col>
            <v-col>
              <v-card @click="updateSelectedImage(higashiImage)">
                <v-img :src="higashiImage"></v-img>
              </v-card>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-row>
            <v-col>
              <v-card>
                <v-img :src="selectedImage"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { ref } from 'vue'
import kaedeImage from '@/assets/kaede.jpg'
import logoImage from '@/assets/logo.png'
import higashiImage from '@/assets/Higashi.jpg'


const selectedImage = ref(kaedeImage);

const updateSelectedImage = (imageUrl) => {
  selectedImage.value = imageUrl
}

const props = defineProps({
  showDialog: Boolean
})

const emits = defineEmits(['update:showDialog'])

const closeDialog = () => {
  emits('update:showDialog', false)
}
</script>
