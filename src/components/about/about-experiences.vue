<script setup lang="ts">
  import { aboutExperiences, glassPanelClass, type ExperienceItem } from '@/data/about-content';
  import AboutExperienceModal from './about-experience-modal.vue';
  import { ref } from 'vue';

  const selected = ref<ExperienceItem | null>(null);

  function openDetail(item: ExperienceItem): void {
    selected.value = item;
  }

  function closeDetail(): void {
    selected.value = null;
  }
</script>

<template>
  <section :id="'experiences'" class="scroll-mt-32">
    <div :class="glassPanelClass" class="p-6 md:p-10">
      <h2 class="text-foreground font-sans text-2xl font-semibold">Experiences</h2>
      <p class="text-muted mt-2 font-sans text-sm">팀 활동 · 경험</p>

      <ol class="mt-8 space-y-6">
        <li
          v-for="item in aboutExperiences"
          :key="item.id"
          class="border-border/60 bg-background/30 rounded-2xl border p-5"
        >
          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 class="text-foreground font-sans text-lg font-semibold">
                {{ item.title }}
              </h3>
              <p class="text-muted mt-0.5 font-sans text-sm">{{ item.org }} · {{ item.role }}</p>
            </div>
            <p class="text-muted shrink-0 font-sans text-sm">{{ item.period }}</p>
          </div>
          <p class="text-foreground/85 mt-2 font-sans text-sm">{{ item.teaser }}</p>

          <ul
            class="text-foreground/90 mt-3 list-disc space-y-1.5 pl-5 font-sans text-sm leading-relaxed"
          >
            <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
          </ul>

          <div v-if="item.links?.length || item.hasDetailPanel" class="mt-4 flex flex-wrap gap-2">
            <a
              v-for="link in item.links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
              class="border-border text-foreground hover:border-accent hover:text-accent rounded-full border px-3 py-1 font-sans text-xs transition-colors duration-200"
            >
              {{ link.label }}
            </a>
            <button
              v-if="item.hasDetailPanel"
              type="button"
              class="border-border text-foreground hover:border-accent hover:text-accent rounded-full border px-3 py-1 font-sans text-xs transition-colors duration-200"
              @click="openDetail(item)"
            >
              Detail
            </button>
          </div>
        </li>
      </ol>
    </div>
    <AboutExperienceModal :item="selected" @close="closeDetail" />
  </section>
</template>
