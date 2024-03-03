<template>
  <v-container fluid id="contact" class="bg-indigo">
    <v-row>
      <v-col>
        <v-container>
          <v-row>
            <v-col v-col align-self="center" class="text-center">
              <PageTitle>Contact Me</PageTitle>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="6">
              <p>
                最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。もしこのサイトや私について何かコメントがありましたら、下記のメールアドレスまでご連絡ください。
              </p>
            </v-col>
          </v-row>
          <v-row justify="center" class="my-8">
            <v-col cols="4" class="text-center">
              <v-btn variant="outlined" @click="sendEmail">
                <v-icon left>mdi-email</v-icon>
                Send Me
              </v-btn>
              <p class="my-4">Send an email to me: atsukih46@gmail.com</p>
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

const { width, height } = useWindowSize();

function sendEmail() {
  window.location.href = "mailto:atsukih46@gmail.com";
}
</script>
