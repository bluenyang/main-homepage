<script setup lang="ts">
  import { isMenuGroup, menuItems } from '@/data/menu-item';

  const itemClass =
    'block px-3 py-2 font-medium text-foreground/80 transition-colors duration-200 hover:text-accent aria-[current=page]:text-accent';
</script>

<template>
  <ul class="font-nav hidden items-center gap-x-1 text-lg lg:flex">
    <li v-for="menuItem in menuItems" :key="menuItem.name">
      <template v-if="!isMenuGroup(menuItem)">
        <a
          v-if="menuItem.external"
          :href="menuItem.href"
          target="_blank"
          rel="noreferrer"
          :class="itemClass"
        >
          {{ menuItem.name }}
        </a>
        <router-link v-else :to="menuItem.href" :class="itemClass">
          {{ menuItem.name }}
        </router-link>
      </template>
      <div v-else class="group relative">
        <button type="button" :class="itemClass">
          {{ menuItem.name }}
        </button>
        <ul
          class="border-border bg-surface pointer-events-none invisible absolute top-full left-1/2 z-10 mt-1 w-48 -translate-x-1/2 rounded-lg border py-1 opacity-0 transition-opacity duration-200 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100"
        >
          <li v-for="child in menuItem.children" :key="child.name">
            <a
              :href="child.href"
              target="_blank"
              rel="noreferrer"
              class="text-foreground/80 hover:text-accent block px-4 py-2 text-center font-medium transition-colors duration-200"
            >
              {{ child.name }}
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
