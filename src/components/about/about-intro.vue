<script setup lang="ts">
  import { aboutIntro, glassPanelClass } from '@/data/about-content';
</script>

<template>
  <section :id="'intro'" class="scroll-mt-32">
    <div :class="glassPanelClass" class="p-6 md:p-10">
      <p class="text-muted font-sans text-sm tracking-wide uppercase">
        {{ aboutIntro.brand }} · {{ aboutIntro.nameKo }}
        <span class="text-foreground/50">({{ aboutIntro.nameEn }})</span>
      </p>
      <h1
        class="text-foreground mt-4 max-w-3xl font-sans text-3xl leading-tight font-semibold md:text-4xl"
      >
        {{ aboutIntro.headline }}
      </h1>
      <p class="text-muted mt-4 max-w-2xl font-sans text-lg">
        {{ aboutIntro.subline }}
      </p>
      <p class="text-foreground/85 mt-6 max-w-3xl font-sans text-base leading-relaxed">
        {{ aboutIntro.body }}
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          v-for="cta in aboutIntro.ctas"
          :key="cta.label"
          :href="cta.href"
          :target="cta.href.startsWith('mailto:') ? undefined : '_blank'"
          :rel="cta.href.startsWith('mailto:') ? undefined : 'noreferrer'"
          class="border-border bg-background/40 text-foreground hover:border-accent hover:text-accent rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200"
        >
          {{ cta.label }}
        </a>
      </div>
    </div>
  </section>
</template>
