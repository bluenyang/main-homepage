<script setup lang="ts">
import SidebarToggler from './SidebarToggler.vue';
import NavMenu from './NavMenu.vue';
import ThemeToggler from './ThemeToggler.vue';
</script>

<template>
  <nav
    id="navbar"
    class="fixed z-1000 flex w-full items-center justify-between"
  >
    <div
      class="mx-auto flex h-16 w-4/5 items-center justify-between bg-white shadow-lg transition-colors duration-500 dark:bg-gray-800"
    >
      <!-- Left Side: Offcanvas Button and logo -->
      <div class="ml-4 flex items-center gap-x-4">
        <SidebarToggler />
        <div
          class="flex py-5 transition-transform duration-500 hover:scale-105 lg:flex-1"
        >
          <a href="/" class="-m-1.5 p-1.5">
            <span
              class="font-[Pacifico] text-2xl font-bold text-black transition-colors duration-500 hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
            >
              BlueNyang
            </span>
          </a>
        </div>
      </div>

      <!-- Center: Menu -->
      <NavMenu />

      <!-- Right Side: ThemeToggler -->
      <ThemeToggler />
    </div>
  </nav>
</template>
