<script setup lang="ts">
  import { aboutEducations, glassPanelClass } from '@/data/about-content';
</script>

<template>
  <section :id="'educations'" class="scroll-mt-32">
    <div :class="glassPanelClass" class="p-6 md:p-10">
      <h2 class="text-foreground font-sans text-2xl font-semibold">Educations</h2>
      <p class="text-muted mt-2 font-sans text-sm">학력 · 교육 과정</p>

      <ol class="mt-8 space-y-6">
        <li
          v-for="item in aboutEducations"
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

          <div v-if="item.links?.length" class="mt-4 flex flex-wrap gap-2">
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
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
