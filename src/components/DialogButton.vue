<template>
  <div class="text-center">
    <v-hover v-slot:default="{ isHovering, props }" open-delay="50">
      <v-card
        :elevation="isHovering ? 16 : 2"
        :class="{ 'on-hover': isHovering }"
        @click="dialog = true"
        v-bind="props"
        class="pa-2"
      >
        <v-img
          src="/Users/atsuki/Documents/dev/portfolio-atsuki/src/assets/kaede.jpg"
        ></v-img>
      </v-card>
    </v-hover>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DialogCard from '@/components/DialogCard'

  const dialog = ref(false)
</script>



<!-- <template>
  <div class="text-center">
    <v-hover v-slot:default="{ isHovering, props }" open-delay="50">
      <v-card
        :elevation="isHovering ? 16 : 2"
        :class="{ 'on-hover': isHovering }"
        @click="dialog = true"
        v-bind="props"
        class="pa-2"
      >
        <v-img
          src="/Users/atsuki/Documents/dev/portfolio-atsuki/src/assets/kaede.jpg"
        ></v-img>
      </v-card>
    </v-hover>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
    <DialogCard />
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)
</script>

<script>
import DialogCard from '@/components/DialogCard'

export default {
  components: {
    DialogCard
  },
  data() {
    return {
      dialog
    };
  }
}
</script> -->
