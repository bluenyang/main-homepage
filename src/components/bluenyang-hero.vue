<script setup lang="ts">
  import BlueNyang from '@/assets/BlueNyang.png';
  import LeftEye from '@/assets/BlueNyang-Eyes-Left.png';
  import RightEye from '@/assets/BlueNyang-Eyes-Right.png';
  import { onMounted, onUnmounted, ref } from 'vue';

  const ORIGIN_WIDTH = 1200;
  const ORIGIN_HEIGHT = 650;
  const LEFT_STD = { x: 449, y: 295 };
  const RIGHT_STD = { x: 555, y: 292 };

  // 눈 소켓 위치를 이미지의 가로/세로 비율로 각각 환산 (원본 대비 초기 위치 보정용)
  const LEFT_RATIO = { x: LEFT_STD.x / ORIGIN_WIDTH, y: LEFT_STD.y / ORIGIN_HEIGHT };
  const RIGHT_RATIO = { x: RIGHT_STD.x / ORIGIN_WIDTH, y: RIGHT_STD.y / ORIGIN_HEIGHT };

  type Pos = {
    x: number;
    y: number;
  };

  const mascotImg = ref<HTMLImageElement | null>(null);
  const ratio = ref(1);
  const leftPos = ref<Pos>({ x: 0, y: 0 });
  const rightPos = ref<Pos>({ x: 0, y: 0 });

  let resizeObserver: ResizeObserver | null = null;
  let rafId = 0;
  let pendingMouse: Pos | null = null;
  let prefersReducedMotion = false;

  function setRestPosition(imgW: number, imgH: number): void {
    // 눈 초기 위치 보정 (이미지 아트에 맞춘 수작업 오프셋)
    const leftOffsetX = 11 * ratio.value;
    const leftOffsetY = 2 * ratio.value;
    const rightOffsetX = 12 * ratio.value;
    const rightOffsetY = 1 * ratio.value;

    leftPos.value = {
      x: LEFT_RATIO.x * imgW + leftOffsetX,
      y: LEFT_RATIO.y * imgH - leftOffsetY,
    };
    rightPos.value = {
      x: RIGHT_RATIO.x * imgW - rightOffsetX,
      y: RIGHT_RATIO.y * imgH - rightOffsetY,
    };
  }

  function updateEyes(mouse: Pos): void {
    const img = mascotImg.value;
    if (!img) {
      return;
    }

    const rect = img.getBoundingClientRect();
    const localX = mouse.x - rect.left;
    const localY = mouse.y - rect.top;
    const radius = Math.min(rect.width, rect.height) * 0.02;

    const leftOrigin = {
      x: LEFT_STD.x * ratio.value,
      y: LEFT_STD.y * ratio.value,
    };
    const rightOrigin = {
      x: RIGHT_STD.x * ratio.value,
      y: RIGHT_STD.y * ratio.value,
    };

    const angleL = Math.atan2(localY - leftOrigin.y, localX - leftOrigin.x);
    leftPos.value = {
      x: leftOrigin.x + Math.cos(angleL) * radius,
      y: leftOrigin.y + Math.sin(angleL) * radius,
    };

    const angleR = Math.atan2(localY - rightOrigin.y, localX - rightOrigin.x);
    rightPos.value = {
      x: rightOrigin.x + Math.cos(angleR) * radius,
      y: rightOrigin.y + Math.sin(angleR) * radius,
    };
  }

  function tick(): void {
    rafId = 0;
    if (pendingMouse) {
      updateEyes(pendingMouse);
      pendingMouse = null;
    }
  }

  function handleMouseMove(event: MouseEvent): void {
    if (prefersReducedMotion) {
      return;
    }

    pendingMouse = { x: event.clientX, y: event.clientY };
    if (!rafId) {
      rafId = requestAnimationFrame(tick);
    }
  }

  onMounted(() => {
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (mascotImg.value) {
      resizeObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (!entry) {
          return;
        }

        ratio.value = entry.contentRect.width / ORIGIN_WIDTH;
        setRestPosition(entry.contentRect.width, entry.contentRect.height);
      });
      resizeObserver.observe(mascotImg.value);
    }

    if (!prefersReducedMotion) {
      document.addEventListener('mousemove', handleMouseMove);
    }
  });

  onUnmounted(() => {
    resizeObserver?.disconnect();
    document.removeEventListener('mousemove', handleMouseMove);
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  });
</script>

<template>
  <section class="mx-auto flex max-w-6xl flex-col items-center px-4 pt-28 pb-8 md:px-6">
    <div class="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-sm">
      <img
        ref="mascotImg"
        :src="BlueNyang"
        alt="BlueNyang"
        class="block h-auto w-full"
        decoding="async"
      />
      <img
        :src="LeftEye"
        alt=""
        class="pointer-events-none absolute top-0 left-0"
        :style="{
          width: `${ratio * 75}px`,
          height: `${ratio * 70}px`,
          transform: `translate(${leftPos.x}px, ${leftPos.y}px)`,
        }"
        decoding="async"
      />
      <img
        :src="RightEye"
        alt=""
        class="pointer-events-none absolute top-0 left-0"
        :style="{
          width: `${ratio * 75}px`,
          height: `${ratio * 70}px`,
          transform: `translate(${rightPos.x}px, ${rightPos.y}px)`,
        }"
        decoding="async"
      />
    </div>
  </section>
</template>
