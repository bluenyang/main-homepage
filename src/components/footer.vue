<script setup lang="ts">
  import { Icon } from '@iconify/vue';
</script>

<template>
  <footer
    class="relative mx-auto flex w-4/5 flex-col items-center justify-center pt-4 transition-all duration-500"
  >
    <div class="absolute top-0 z-10 h-15 w-full"></div>
    <div class="z-20 mb-4 flex w-full flex-col gap-4 font-[Jua] sm:flex-row lg:flex-row">
      <div class="flex flex-1 items-center justify-center">
        <div class="w-fit">
          <p>BlueNyang</p>
          <p>e-Mail:</p>
          <ul class="w-fit list-none pl-4">
            <li>contact@bluenyang.kr</li>
            <li>bluenyang@croffledev.kr</li>
          </ul>
        </div>
      </div>
      <div class="flex h-full flex-1 flex-row items-center justify-evenly">
        <a
          href="https://github.com/bluenyang"
          target="_blank"
          rel="noreferrer"
          class="flex h-fit items-center justify-center"
        >
          <Icon
            icon="mdi:github"
            class="size-10 text-black transition-all duration-500 hover:-translate-y-1 hover:text-sky-300 dark:text-white dark:hover:text-sky-400"
          />
        </a>
        <a
          href="https://www.instagram.com/bluenyang2251/"
          target="_blank"
          rel="noreferrer"
          class="flex h-fit items-center justify-center"
        >
          <Icon
            icon="mdi:instagram"
            class="size-10 text-black transition-all duration-500 hover:-translate-y-1 hover:text-sky-300 dark:text-white dark:hover:text-sky-400"
          />
        </a>
        <a
          href="https://bluenyang-dev.tistory.com/"
          target="_blank"
          rel="noreferrer"
          class="flex h-fit items-center justify-center"
        >
          <Icon
            icon="lucide:coffee"
            class="size-10 text-black transition-all duration-500 hover:-translate-y-1 hover:text-sky-300 dark:text-white dark:hover:text-sky-400"
          />
        </a>
        <a
          href="https://dl.bluenyang.kr/public/"
          target="_blank"
          rel="noreferrer"
          class="flex h-fit items-center justify-center"
        >
          <Icon
            icon="mdi:download"
            class="size-10 text-black transition-all duration-500 hover:-translate-y-1 hover:text-sky-300 dark:text-white dark:hover:text-sky-400"
          />
        </a>
        <a
          href="https://docs.bluenyang.kr/s/public/"
          target="_blank"
          rel="noreferrer"
          class="flex h-fit items-center justify-center"
        >
          <Icon
            icon="mdi:file-document-outline"
            class="size-10 text-black transition-all duration-500 hover:-translate-y-1 hover:text-sky-300 dark:text-white dark:hover:text-sky-400"
          />
        </a>
      </div>
    </div>
    <p class="text-sm text-gray-700 dark:text-gray-300">
      &copy; 2025 BlueNyang. All rights reserved.
    </p>
  </footer>
</template>
