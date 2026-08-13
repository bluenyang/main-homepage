<script setup lang="ts">
  import { aboutSkills, glassPanelClass } from '@/data/about-content';
  import { Icon } from '@iconify/vue';
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
              :key="item.name"
              class="group border-border bg-background/40 text-foreground hover:border-accent/60 hover:bg-accent/10 flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-sans text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <Icon
                :icon="item.icon"
                class="size-4 shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6"
              />
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
