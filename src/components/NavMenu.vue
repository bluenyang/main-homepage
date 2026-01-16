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
  <ul class="items-center space-x-4 hidden lg:flex font-[Sour_Gummy] text-lg">
    <li v-for="menuItem in menuItems" :key="menuItem.name">
      <a
        v-if="menuItem.children === undefined"
        :href="menuItem.path"
        :target="menuItem.isBlank ? '_blank' : '_self'"
        class="block px-4 py-5 text-gray-700 dark:text-gray-300 hover:text-sky-600 font-medium dark:hover:text-sky-400 hover:-translate-y-1 transition-all duration-300"
      >
        {{ menuItem.name }}
      </a>
      <a
        v-else
        href="#"
        class="block px-4 py-5 text-gray-700 dark:text-gray-300 font-medium relative group"
      >
        {{ menuItem.name }}
        <ul
          class="absolute -left-2/3 mt-2 w-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        >
          <li
            v-for="child in menuItem.children"
            :key="child.name"
            class="border-b border-gray-200 dark:border-gray-700 last:border-0"
          >
            <a
              :href="child.path"
              :target="child.isBlank ? '_blank' : '_self'"
              class="block px-4 py-2 dark:text-gray-300 text-center hover:text-sky-600 font-medium dark:hover:text-sky-400 hover:-translate-y-1 transition-all duration-300"
            >
              {{ child.name }}
            </a>
          </li>
        </ul>
      </a>
    </li>
  </ul>
</template>
