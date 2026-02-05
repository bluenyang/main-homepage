<script setup lang="ts">
import MenuList from '@/data/Menu.json';

type Item = {
  name: string;
  path: string;
  isBlank: boolean;
  children?: Item[];
};

const menuItems = MenuList as Item[];
</script>

<template>
  <ul class="hidden items-center space-x-4 font-[Sour_Gummy] text-lg lg:flex">
    <li v-for="menuItem in menuItems" :key="menuItem.name">
      <a
        v-if="menuItem.children === undefined"
        :href="menuItem.path"
        :target="menuItem.isBlank ? '_blank' : '_self'"
        class="block px-4 py-5 font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400"
      >
        {{ menuItem.name }}
      </a>
      <a
        v-else
        href="#"
        class="group relative block px-4 py-5 font-medium text-gray-700 transition-colors duration-300 dark:text-gray-300"
      >
        {{ menuItem.name }}
        <ul
          class="absolute -left-2/3 z-10 mt-2 w-50 rounded-md border border-gray-200 bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 dark:border-gray-700 dark:bg-gray-800"
        >
          <li
            v-for="child in menuItem.children"
            :key="child.name"
            class="border-b border-gray-200 last:border-0 dark:border-gray-700"
          >
            <a
              :href="child.path"
              :target="child.isBlank ? '_blank' : '_self'"
              class="block px-4 py-2 text-center font-medium transition-all duration-300 hover:-translate-y-1 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400"
            >
              {{ child.name }}
            </a>
          </li>
        </ul>
      </a>
    </li>
  </ul>
</template>
