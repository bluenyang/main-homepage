<script setup lang="ts">
  import { aboutSections, type AboutSectionId } from '@/data/about-content';
  import { isMenuGroup, menuItems } from '@/data/menu-item';
  import { useSidebar } from '@/stores/use-sidebar';
  import { Icon } from '@iconify/vue';
  import { computed, onUnmounted, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const isAboutPage = computed(() => route.name === 'About');
  const { isOpen, closeSidebar } = useSidebar();
  const openedMenu = ref<string | null>(null);

  const itemClass =
    'block w-full px-4 py-3 font-medium text-foreground/80 transition-colors duration-200 hover:text-accent aria-[current=page]:text-accent';

  const toggleMenu = (name: string): void => {
    openedMenu.value = openedMenu.value === name ? null : name;
  };

  function scrollToSection(id: AboutSectionId): void {
    closeSidebar();
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  watch(isOpen, (open) => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) {
      openedMenu.value = null;
    }
  });

  onUnmounted(() => {
    document.body.style.overflow = '';
  });
</script>

<template>
  <div
    class="bg-overlay fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden"
    :class="isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'"
    @click="closeSidebar"
  ></div>
  <div
    id="sidebar-panel"
    class="border-border bg-surface fixed inset-y-0 left-0 z-[60] h-screen w-full max-w-sm overflow-y-auto border-r p-6 transition-transform duration-300 ease-in-out lg:hidden"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    role="dialog"
    aria-modal="true"
    aria-labelledby="sidebar-title"
  >
    <div class="flex items-center justify-between">
      <h2 id="sidebar-title" class="font-headline text-foreground text-2xl">Menu</h2>
      <button
        id="sidebar-close-btn"
        type="button"
        class="text-foreground hover:bg-border/60 hover:text-accent inline-flex size-9 items-center justify-center rounded-full transition-colors duration-200"
        aria-label="Close"
        @click="closeSidebar"
      >
        <Icon icon="lucide:x" class="size-6" />
      </button>
    </div>

    <div v-if="isAboutPage" class="mt-6">
      <p class="text-muted px-4 font-sans text-xs tracking-wide uppercase">On this page</p>
      <ul class="font-nav mt-2 flex w-full flex-col text-lg">
        <li v-for="section in aboutSections" :key="section.id" class="w-full text-center">
          <button type="button" :class="itemClass" @click="scrollToSection(section.id)">
            {{ section.label }}
          </button>
        </li>
      </ul>
      <div class="border-border my-4 border-t"></div>
    </div>

    <ul
      class="font-nav flex w-full flex-col items-center text-lg"
      :class="isAboutPage ? '' : 'mt-6'"
    >
      <li v-for="menuItem in menuItems" :key="menuItem.name" class="w-full text-center">
        <template v-if="!isMenuGroup(menuItem)">
          <a
            v-if="menuItem.external"
            :href="menuItem.href"
            target="_blank"
            rel="noreferrer"
            :class="itemClass"
            @click="closeSidebar"
          >
            {{ menuItem.name }}
          </a>
          <router-link v-else :to="menuItem.href" :class="itemClass" @click="closeSidebar">
            {{ menuItem.name }}
          </router-link>
        </template>
        <div v-else class="w-full text-center">
          <button type="button" :class="itemClass" @click="toggleMenu(menuItem.name)">
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
            <ul class="border-border bg-background w-full overflow-hidden rounded-lg">
              <li
                v-for="child in menuItem.children"
                :key="child.name"
                class="border-border border-b last:border-0"
              >
                <a
                  :href="child.href"
                  target="_blank"
                  rel="noreferrer"
                  class="text-foreground/80 hover:text-accent block px-4 py-2 text-center font-medium transition-colors duration-200"
                  @click="closeSidebar"
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
</template>
