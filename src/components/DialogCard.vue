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
              <v-hover v-slot:default="{ isHovering, props }">
                <v-card
                  :elevation="selectedImage =! kaedeImage ? 2 : (isHovering ? 2 : 10)"
                  @click="updateSelectedImage(kaedeImage)"
                  v-bind="props"
                >
                  <v-img :src="kaedeImage"></v-img>
                </v-card>
              </v-hover>
            </v-col>
            <v-col>
              <!-- <v-card @click="updateSelectedImage(logoImage)">
                <v-img :src="logoImage"></v-img>
              </v-card> -->
              <v-hover v-slot:default="{ isHovering, props }">
                <v-card
                  :elevation="selectedImage === logoImage ? 2 : (isHovering ? 2 : 10)"
                  @click="updateSelectedImage(logoImage)"
                  v-bind="props"
                >
                  <v-img :src="logoImage"></v-img>
                </v-card>
              </v-hover>
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


const images = [
  { id: 'kaede', image: kaedeImage },
  { id: 'logo', image: logoImage },
  { id: 'higashi', image: higashiImage }
]

const selectedImage = ref(kaedeImage)
const selected = ref('kaede')

const updateSelectedImage = (imageUrl, imageId) => {
  selectedImage.value = imageUrl
  selected.value = imageId
}

const props = defineProps({
  showDialog: Boolean
})

const emits = defineEmits(['update:showDialog'])

const closeDialog = () => {
  emits('update:showDialog', false)
}
</script>
