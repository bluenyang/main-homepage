<script setup lang="ts">
  import { contactEmails, socialLinks } from '@/data/social-link';
  import { Icon } from '@iconify/vue';
</script>

<template>
  <footer
    class="border-border mx-auto flex max-w-6xl flex-col items-center border-t px-4 py-10 md:px-6"
  >
    <div class="mb-8 flex w-full flex-col gap-8 sm:flex-row sm:items-center">
      <div class="flex flex-1 items-center justify-center">
        <div class="text-foreground w-fit">
          <p class="font-headline text-xl">BlueNyang</p>
          <p class="text-muted mt-2 font-sans text-sm">e-Mail</p>
          <ul class="mt-1 w-fit list-none font-sans">
            <li v-for="email in contactEmails" :key="email.address">
              <a
                :href="`mailto:${email.address}`"
                class="text-foreground/80 hover:text-accent transition-colors duration-200"
              >
                {{ email.address }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-1 flex-row items-center justify-evenly">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.href"
          :aria-label="link.name"
          target="_blank"
          rel="noreferrer"
          class="text-foreground hover:text-accent flex size-10 items-center justify-center rounded-full transition-colors duration-200"
        >
          <Icon :icon="link.icon" class="size-8" />
        </a>
      </div>
    </div>
    <p class="text-muted font-sans text-sm">&copy; 2026 BlueNyang. All rights reserved.</p>
  </footer>
</template>
