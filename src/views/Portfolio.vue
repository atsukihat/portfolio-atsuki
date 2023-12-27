<template>
  <HomePage />
  <AboutPage />
  <WorkPage />
  <Contacts />
</template>

<script setup>
  import HomePage from '@/components/Home/HomePage.vue'
  import AboutPage from '@/components/About/AboutPage.vue'
  import WorkPage from '@/components/Work/WorkPage.vue'
  import Contacts from '@/components/Contacts/Contacts.vue'
  //contactだと名前空間が重複するのでContactsに変更
</script>
