<script setup lang="ts">
import MenuList from '@/data/Menu.json';
import { useSidebar, type SidebarToggle } from '@/stores/useSidebar';
import { ref } from 'vue';

type Item = {
  name: string;
  path: string;
  isBlank: boolean;
  children?: Item[];
};

const { isOpen, toggleSidebar }: SidebarToggle = useSidebar();
const openedMenu = ref<string | null>(null);

const menuItems = MenuList as Item[];

const toggleMenu = (name: string) => {
  if (openedMenu.value === name) {
    openedMenu.value = null;
  } else {
    openedMenu.value = name;
  }
};
</script>

<template>
  <div
    class="fixed inset-0 z-1100 bg-black/70"
    :class="{ hidden: !isOpen }"
    @click="toggleSidebar"
  ></div>
  <div
    class="fixed inset-y-0 left-0 z-1100 h-screen w-full -translate-x-full transform overflow-y-auto bg-white p-6 transition-transform duration-300 ease-in-out sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden dark:bg-gray-800 dark:ring-gray-700"
    :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
    role="dialog"
    aria-modal="true"
  >
    <div class="flex items-center justify-between">
      <h5 class="text-bold font-[Jua] text-2xl">Menu</h5>
      <button
        type="button"
        id="sidebar-close-btn"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        @click="toggleSidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 fill-gray-600 transition-all duration-400 hover:scale-120 hover:stroke-sky-300 dark:fill-gray-300 dark:hover:stroke-sky-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex flex-grow">
      <ul
        class="flex w-full flex-col items-center space-y-4 font-[Sour_Gummy] text-lg"
      >
        <li
          v-for="menuItem in menuItems"
          :key="menuItem.name"
          class="w-full text-center"
        >
          <a
            v-if="menuItem.children === undefined"
            :href="menuItem.path"
            :target="menuItem.isBlank ? '_blank' : '_self'"
            class="block px-4 py-5 font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400"
          >
            {{ menuItem.name }}
          </a>
          <div v-else class="w-full text-center">
            <button
              type="button"
              @click="toggleMenu(menuItem.name)"
              class="block w-full px-4 py-5 font-medium text-gray-700 transition-colors duration-300 hover:text-sky-600 dark:text-gray-300"
            >
              {{ menuItem.name }}
            </button>

            <div
              class="grid transition-all duration-300 ease-in-out"
              :class="
                openedMenu === menuItem.name
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              "
            >
              <ul
                class="z-10 w-full overflow-hidden rounded-md border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
                :class="{ border: openedMenu === menuItem.name }"
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
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
