<script setup lang="ts">
  import AboutIntro from '@/components/about/about-intro.vue';
  import AboutSkills from '@/components/about/about-skills.vue';
  import AboutProjects from '@/components/about/about-projects.vue';
  import AboutExperiences from '@/components/about/about-experiences.vue';
  import AboutContact from '@/components/about/about-contact.vue';
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 pt-28 pb-16 md:px-6">
    <div class="flex flex-col gap-8">
      <AboutIntro />
      <AboutSkills />
      <AboutProjects />
      <AboutExperiences />
      <AboutContact />
    </div>
  </div>
</template>
