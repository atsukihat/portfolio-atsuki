<template>
  <v-container fluid id="contact" class="bg-primary">
    <v-row>
      <v-col>
        <v-container>
          <v-row>
            <v-col align-self="center" class="text-center">
              <PageTitle>Contact Me</PageTitle>
            </v-col>
          </v-row>
          <v-row justify="center" class="my-8">
            <v-col class="text-center">
              <div class="d-flex justify-center gap-6">
                <a
                  href="https://zenn.dev/atsukihat"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-icon"
                >
                  <v-icon size="x-large" color="black" :icon="zennIcon"></v-icon>
                </a>
                <a
                  href="https://x.com/atsukihat"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-icon mx-4"
                >
                  <v-icon size="x-large" color="black">mdi-twitter</v-icon>
                </a>
                <a
                  href="https://github.com/amoon46"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-icon"
                >
                  <v-icon size="x-large" color="black">mdi-github</v-icon>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import PageTitle from "@/components/shared/PageTitle";
import zennIcon from "@/components/icons/ZennIcon.vue";
</script>

<style scoped>
.social-icon {
  transition: transform 0.3s ease;
}
.social-icon:hover {
  transform: scale(1.2);
}
</style>
