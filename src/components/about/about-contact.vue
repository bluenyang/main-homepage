<script setup lang="ts">
  import { aboutContact, glassPanelClass } from '@/data/about-content';
  import { Icon } from '@iconify/vue';

  const links = [
    {
      label: 'Email',
      href: `mailto:${aboutContact.email}`,
      display: aboutContact.email,
      icon: 'mdi:email-outline',
    },
    {
      label: 'GitHub',
      href: aboutContact.github,
      display: 'github.com/bluenyang',
      icon: 'mdi:github',
    },
    {
      label: 'Blog',
      href: aboutContact.blog,
      display: 'blog.bluenyang.kr',
      icon: 'lucide:coffee',
    },
    {
      label: 'LinkedIn',
      href: aboutContact.linkedin,
      display: 'Gyutae Ahn',
      icon: 'mdi:linkedin',
    },
  ] as const;
</script>

<template>
  <section :id="'contact'" class="scroll-mt-32">
    <div :class="glassPanelClass" class="p-6 md:p-10">
      <h2 class="text-foreground font-sans text-2xl font-semibold">Contact</h2>
      <p class="text-muted mt-2 font-sans">함께 이야기하고 싶을 때.</p>
      <div class="mt-8 grid gap-3 sm:grid-cols-2">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          :target="link.href.startsWith('mailto:') ? undefined : '_blank'"
          :rel="link.href.startsWith('mailto:') ? undefined : 'noreferrer'"
          class="border-border/60 bg-background/30 hover:border-accent hover:text-accent flex items-center gap-3 rounded-2xl border px-4 py-4 transition-colors duration-200"
        >
          <Icon :icon="link.icon" class="size-6 shrink-0" />
          <span class="min-w-0">
            <span class="text-muted block font-sans text-xs">{{ link.label }}</span>
            <span class="text-foreground block truncate font-sans text-sm">
              {{ link.display }}
            </span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
