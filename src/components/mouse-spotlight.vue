<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';

  const rootEl = ref<HTMLDivElement | null>(null);

  let pointerX = 50;
  let pointerY = 30;
  let rafId: number | null = null;
  let isListening = false;

  function render(): void {
    rafId = null;
    rootEl.value?.style.setProperty('--spot-x', `${pointerX}%`);
    rootEl.value?.style.setProperty('--spot-y', `${pointerY}%`);
  }

  function onPointerMove(event: PointerEvent): void {
    pointerX = (event.clientX / window.innerWidth) * 100;
    pointerY = (event.clientY / window.innerHeight) * 100;
    if (rafId === null) {
      rafId = requestAnimationFrame(render);
    }
  }

  onMounted(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    isListening = !prefersReducedMotion && !isCoarsePointer;

    if (isListening) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
    }
  });

  onUnmounted(() => {
    if (isListening) {
      window.removeEventListener('pointermove', onPointerMove);
    }
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
    }
  });
</script>

<template>
  <div
    ref="rootEl"
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    style="--spot-x: 50%; --spot-y: 30%"
    aria-hidden="true"
  >
    <div
      class="absolute inset-0 opacity-70 dark:opacity-90"
      style="
        background: radial-gradient(
          650px circle at var(--spot-x) var(--spot-y),
          color-mix(in oklch, var(--accent) 26%, transparent),
          transparent 70%
        );
      "
    ></div>
  </div>
</template>
