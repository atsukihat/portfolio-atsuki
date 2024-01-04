<template>
  <v-card>
    <v-container>
      <v-row class="justify-end">
        <v-card-actions>
          <v-btn icon="$close" variant="text" @click="closeDialog"></v-btn>
        </v-card-actions>
      </v-row>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  showDialog: Boolean
})

const emits = defineEmits(['update:showDialog'])

const closeDialog = () => {
  emits('update:showDialog', false)
}
</script>
