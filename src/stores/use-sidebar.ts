import { readonly, ref, type Ref } from 'vue';

export interface SidebarToggle {
  isOpen: Ref<boolean>;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const isSidebarOpen: Ref<boolean> = ref(false);

export function useSidebar(): SidebarToggle {
  function toggleSidebar(): void {
    isSidebarOpen.value = !isSidebarOpen.value;
  }

  function closeSidebar(): void {
    isSidebarOpen.value = false;
  }

  return {
    isOpen: readonly(isSidebarOpen),
    toggleSidebar,
    closeSidebar,
  };
}
