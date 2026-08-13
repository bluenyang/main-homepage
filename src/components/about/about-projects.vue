<script setup lang="ts">
  import { aboutProjects, glassPanelClass } from '@/data/about-content';
</script>

<template>
  <section :id="'projects'" class="scroll-mt-32">
    <div :class="glassPanelClass" class="p-6 md:p-10">
      <h2 class="text-foreground font-sans text-2xl font-semibold">Featured Projects</h2>
      <div class="mt-8 grid gap-4 md:grid-cols-2">
        <article
          v-for="project in aboutProjects"
          :key="project.id"
          class="border-border/60 bg-background/30 rounded-2xl border p-5"
        >
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="text-foreground font-sans text-xl font-semibold">
              {{ project.title }}
            </h3>
            <span
              v-if="project.badge"
              class="bg-accent/15 text-accent rounded-full px-2.5 py-0.5 font-sans text-xs"
            >
              {{ project.badge }}
            </span>
          </div>
          <p class="text-muted mt-1 font-sans text-sm">{{ project.role }}</p>
          <p class="text-foreground/85 mt-3 font-sans text-sm leading-relaxed">
            {{ project.summary }}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <a
              v-for="link in project.links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
              class="border-border text-foreground hover:border-accent hover:text-accent rounded-full border px-3 py-1 font-sans text-xs transition-colors duration-200"
            >
              {{ link.label }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
