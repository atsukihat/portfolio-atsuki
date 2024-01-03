<template>
  <v-container fluid  id=about class="bg-grey-lighten-5">
    <v-container>
      <v-row class="mt-12">
        <v-col cols="12" class="text-center">
          <p class="vibes-font title-size">About me</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <p>福岡県出身のエンジニア。</p>
          <p>東福岡高校を卒業後、1年の浪人期間を経て広島大学情報科学部に入学。コンピューターサイエンスについて学んだのち、広島大学大学院に進学。現在は、学習工学研究室で</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="6">
          <v-carousel show-arrows="hover" cycle hide-delimiters height="400">
            <v-carousel-item>
            <v-img src="/Users/atsuki/Documents/dev/portfolio-atsuki/src/assets/paris.jpg" max-height="400"></v-img>
            </v-carousel-item>

            <v-carousel-item>
            <v-img src="/Users/atsuki/Documents/dev/portfolio-atsuki/src/assets/presentation.png" max-height="400"></v-img>
            </v-carousel-item>

            <v-carousel-item>
            <v-img src="/Users/atsuki/Documents/dev/portfolio-atsuki/src/assets/Higashi.jpg" max-height="400"></v-img>
            </v-carousel-item>

          </v-carousel>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
    import srcImg from "/Users/atsuki/Documents/dev/portfolio-atsuki/src/assets/paris.jpg"
</script>
