<template>
  <Home />
  <About />
  <Work />
  <Contacts />
</template>

<script setup>
  import Home from '@/components/Home/Home.vue'
  import About from '@/components/About/About.vue'
  import Work from '@/components/Work/Work.vue'
  import Contacts from '@/components/Contacts/Contacts.vue'
  //contactだと名前空間が重複するのでContactsに変更
</script>
