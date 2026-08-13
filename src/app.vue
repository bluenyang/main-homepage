<script setup lang="ts">
  import NavigationBar from '@/components/navigation-bar.vue';
  import SiteFooter from '@/components/footer.vue';
  import Sidebar from '@/components/sidebar.vue';
</script>

<template>
  <NavigationBar />
  <main>
    <router-view />
  </main>
  <SiteFooter />
  <Sidebar />
</template>
