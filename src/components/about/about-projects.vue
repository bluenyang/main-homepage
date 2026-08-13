<script setup lang="ts">
  import { aboutProjects, glassPanelClass, type ProjectItem } from '@/data/about-content';
  import AboutProjectModal from './about-project-modal.vue';
  import { Icon } from '@iconify/vue';
  import { ref } from 'vue';

  const selected = ref<ProjectItem | null>(null);

  function openProject(project: ProjectItem): void {
    selected.value = project;
  }

  function closeProject(): void {
    selected.value = null;
  }
</script>

<template>
  <section :id="'projects'" class="scroll-mt-32">
    <div :class="glassPanelClass" class="p-6 md:p-10">
      <h2 class="text-foreground font-sans text-2xl font-semibold">Featured Projects</h2>
      <div class="mt-8 grid gap-3 sm:grid-cols-2">
        <button
          v-for="project in aboutProjects"
          :key="project.id"
          type="button"
          class="group border-border/60 bg-background/30 hover:border-accent/50 hover:bg-background/50 rounded-2xl border p-5 text-left transition-colors duration-200"
          @click="openProject(project)"
        >
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="text-foreground font-sans text-lg font-semibold">
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
              <p class="text-foreground/80 mt-2 font-sans text-sm">{{ project.teaser }}</p>
            </div>
            <Icon
              icon="lucide:arrow-up-right"
              class="text-muted group-hover:text-accent mt-1 size-5 shrink-0 transition-colors duration-200"
            />
          </div>
        </button>
      </div>
    </div>
    <AboutProjectModal :project="selected" @close="closeProject" />
  </section>
</template>
