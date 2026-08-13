<script setup lang="ts">
  import { aboutSkills, glassPanelClass } from '@/data/about-content';
</script>

<template>
  <section :id="'skills'" class="scroll-mt-32">
    <div :class="glassPanelClass" class="p-6 md:p-10">
      <h2 class="text-foreground font-sans text-2xl font-semibold">Skills</h2>
      <div class="mt-8 space-y-6">
        <div v-for="group in aboutSkills" :key="group.group">
          <h3 class="text-muted font-sans text-sm tracking-wide uppercase">
            {{ group.group }}
          </h3>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="border-border bg-background/40 text-foreground rounded-full border px-3 py-1.5 font-sans text-sm"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
