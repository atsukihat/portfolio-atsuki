<script setup>
import zennIcon from "@/components/icons/ZennIcon.vue";
</script>

<template>
  <v-footer app absolute>
    <v-container>
      <v-row>
        <v-col> © 2024 Hattori Atsuki </v-col>
        <v-col class="flex d-flex justify-end">
          <a
            href="https://zenn.dev/atsukihat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon large color="black" :icon="zennIcon"></v-icon>
          </a>

          <a
            href="https://x.com/atsukihat"
            target="_blank"
            rel="noopener noreferrer"
            class="mx-3"
          >
            <v-icon large color="black">mdi-twitter</v-icon>
          </a>

          <a
            href="https://github.com/amoon46"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon large color="black">mdi-github</v-icon>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
