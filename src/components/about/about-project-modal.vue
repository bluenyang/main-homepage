<script setup lang="ts">
  import type { ProjectItem } from '@/data/about-content';
  import { glassPanelClass } from '@/data/about-content';
  import { Icon } from '@iconify/vue';
  import { onUnmounted, watch } from 'vue';

  const props = defineProps<{
    project: ProjectItem | null;
  }>();

  const emit = defineEmits<{
    close: [];
  }>();

  function onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      emit('close');
    }
  }

  watch(
    () => props.project,
    (project) => {
      window.removeEventListener('keydown', onKeydown);
      if (project) {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeydown);
      } else {
        document.body.style.overflow = '';
      }
    },
  );

  onUnmounted(() => {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', onKeydown);
  });
</script>

<template>
  <Teleport to="body">
    <div
      v-if="project"
      class="fixed inset-0 z-70 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`project-modal-${project.id}`"
    >
      <button
        type="button"
        class="bg-overlay absolute inset-0"
        aria-label="Close project details"
        @click="emit('close')"
      ></button>
      <div
        :class="glassPanelClass"
        class="scrollbar-thumb-border relative z-10 max-h-[85vh] w-full max-w-2xl scrollbar-thin scrollbar-track-transparent overflow-y-auto p-6 shadow-xl md:p-8"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <h3
                :id="`project-modal-${project.id}`"
                class="text-foreground font-sans text-2xl font-semibold"
              >
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
          <button
            type="button"
            class="text-foreground hover:bg-border/60 hover:text-accent inline-flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200"
            aria-label="Close"
            @click="emit('close')"
          >
            <Icon icon="lucide:x" class="size-5" />
          </button>
        </div>

        <div class="mt-8 space-y-6">
          <section>
            <h4 class="text-muted font-sans text-xs tracking-wide uppercase">Tech stack</h4>
            <ul class="mt-3 flex flex-wrap gap-2">
              <li
                v-for="tech in project.techStack"
                :key="tech"
                class="border-border bg-background/40 text-foreground rounded-full border px-3 py-1 font-sans text-xs"
              >
                {{ tech }}
              </li>
            </ul>
          </section>

          <section>
            <h4 class="text-muted font-sans text-xs tracking-wide uppercase">Features</h4>
            <ul
              class="text-foreground/90 mt-3 list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed"
            >
              <li v-for="item in project.features" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section>
            <h4 class="text-muted font-sans text-xs tracking-wide uppercase">Challenges</h4>
            <ul
              class="text-foreground/90 mt-3 list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed"
            >
              <li v-for="item in project.challenges" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section>
            <h4 class="text-muted font-sans text-xs tracking-wide uppercase">Learnings</h4>
            <ul
              class="text-foreground/90 mt-3 list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed"
            >
              <li v-for="item in project.learnings" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section>
            <h4 class="text-muted font-sans text-xs tracking-wide uppercase">Links</h4>
            <div class="mt-3 flex flex-wrap gap-2">
              <a
                v-for="link in project.links"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noreferrer"
                class="border-border text-foreground hover:border-accent hover:text-accent rounded-full border px-3 py-1.5 font-sans text-sm transition-colors duration-200"
              >
                {{ link.label }}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Teleport>
</template>
