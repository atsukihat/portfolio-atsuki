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
            <!-- 画像の一覧 -->
            <template v-for="image in images" :key="image.id">
              <v-hover v-slot:default="{ isHovering, props }">
                <v-col>
                  <v-card
                    :elevation="selected === image.id ? 10 : (isHovering ? 2 : 10)"
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
