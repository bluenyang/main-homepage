<script setup lang="ts">
  import type { ExperienceItem } from '@/data/about-content';
  import { glassPanelClass } from '@/data/about-content';
  import { Icon } from '@iconify/vue';
  import { onUnmounted, watch } from 'vue';

  const props = defineProps<{
    item: ExperienceItem | null;
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
    () => props.item,
    (item) => {
      window.removeEventListener('keydown', onKeydown);
      if (item) {
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
      v-if="item"
      class="fixed inset-0 z-70 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`experience-modal-${item.id}`"
    >
      <button
        type="button"
        class="bg-overlay absolute inset-0"
        aria-label="Close experience details"
        @click="emit('close')"
      ></button>
      <div
        :class="glassPanelClass"
        class="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto p-6 shadow-xl md:p-8"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3
              :id="`experience-modal-${item.id}`"
              class="text-foreground font-sans text-2xl font-semibold"
            >
              {{ item.title }}
            </h3>
            <p class="text-muted mt-1 font-sans text-sm">{{ item.org }} · {{ item.role }}</p>
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

        <p
          v-if="item.detailSummary"
          class="text-foreground/90 mt-6 font-sans text-sm leading-relaxed"
        >
          {{ item.detailSummary }}
        </p>

        <div class="mt-6 space-y-3 font-sans text-sm" aria-label="Homelab architecture">
          <div class="flex justify-center">
            <span
              class="border-border bg-background/50 text-foreground rounded-xl border px-4 py-2"
            >
              Cloudflare
            </span>
          </div>
          <div class="text-muted flex justify-center" aria-hidden="true">↓</div>
          <div class="flex justify-center">
            <span
              class="border-border bg-background/50 text-foreground rounded-xl border px-4 py-2"
            >
              Traefik
            </span>
          </div>
          <div class="text-muted flex justify-center" aria-hidden="true">↓</div>
          <div class="flex flex-wrap justify-center gap-3">
            <span
              class="border-border bg-background/50 text-foreground rounded-xl border px-4 py-2"
            >
              App Services
            </span>
            <span
              class="border-border bg-background/50 text-foreground rounded-xl border px-4 py-2"
            >
              Authentik OIDC
            </span>
          </div>
          <div class="text-muted flex justify-center" aria-hidden="true">↓</div>
          <div class="flex flex-wrap justify-center gap-3">
            <span class="border-accent/40 bg-accent/10 text-foreground rounded-xl border px-4 py-2">
              PostgreSQL
            </span>
            <span class="border-accent/40 bg-accent/10 text-foreground rounded-xl border px-4 py-2">
              Redis
            </span>
            <span class="border-accent/40 bg-accent/10 text-foreground rounded-xl border px-4 py-2">
              MinIO
            </span>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
