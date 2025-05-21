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
          <v-row justify="center" class="my-4">
            <v-col cols="12" md="10" lg="8" class="text-center">
              <p class="mb-6">最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。もしこのサイトや私について何かコメントがありましたら、下記のSNSまでご連絡ください。</p>
            </v-col>
          </v-row>
          <v-row justify="center" class="my-8">
            <v-col class="text-center">
              <div class="d-flex justify-center gap-6">
                <a
                  href="https://x.com/atsukihat"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-icon"
                >
                  <v-avatar class="social-circle" color="white" size="60">
                    <v-icon size="large" color="black">mdi-twitter</v-icon>
                  </v-avatar>
                </a>
                <a
                  href="https://github.com/amoon46"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-icon"
                >
                  <v-avatar class="social-circle" color="white" size="60">
                    <v-icon size="large" color="black">mdi-github</v-icon>
                  </v-avatar>
                </a>
                <a
                  href="https://www.instagram.com/hattori_atsuki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-icon"
                >
                  <v-avatar class="social-circle" color="white" size="60">
                    <v-icon size="large" color="black">mdi-instagram</v-icon>
                  </v-avatar>
                </a>
                <a
                  href="https://zenn.dev/atsukihat"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-icon"
                >
                  <v-avatar class="social-circle" color="white" size="60">
                    <v-icon size="large" color="black" :icon="zennIcon"></v-icon>
                  </v-avatar>
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
  display: inline-block;
  margin: 0 8px;
}
.social-icon:hover {
  transform: scale(1.2);
}
.social-circle {
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
