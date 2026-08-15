<script setup lang="ts">
  import { aboutSections, type AboutSectionId } from '@/data/about-content';
  import { onMounted, onUnmounted, ref } from 'vue';

  const activeId = ref<AboutSectionId>('intro');

  function scrollToSection(id: AboutSectionId): void {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function updateActive(): void {
    const offset = 100;
    let current: AboutSectionId = 'intro';
    for (const section of aboutSections) {
      const el = document.getElementById(section.id);
      if (!el) {
        continue;
      }
      if (el.getBoundingClientRect().top - offset <= 0) {
        current = section.id;
      }
    }
    activeId.value = current;
  }

  onMounted(() => {
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActive);
  });
</script>

<template>
  <ul
    class="font-nav hidden items-center gap-x-0.5 overflow-x-auto text-base lg:flex"
    aria-label="About sections"
  >
    <li v-for="section in aboutSections" :key="section.id">
      <button
        type="button"
        class="rounded-xl px-2.5 py-1.5 font-medium whitespace-nowrap transition-colors duration-200"
        :class="
          activeId === section.id
            ? 'bg-accent/15 text-accent'
            : 'text-foreground/80 hover:text-accent'
        "
        @click="scrollToSection(section.id)"
      >
        {{ section.label }}
      </button>
    </li>
  </ul>
</template>
