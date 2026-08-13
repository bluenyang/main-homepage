import { readonly, ref, type Ref } from 'vue';

export interface DarkMode {
  isDarkMode: Ref<boolean>;
  toggleDarkMode: () => void;
}

function readDarkMode(): boolean {
  if (document.documentElement.classList.contains('dark')) {
    return true;
  }

  const storedDarkMode = localStorage.getItem('darkMode');
  if (storedDarkMode !== null) {
    return storedDarkMode === 'true';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const isDarkMode = ref(readDarkMode());

function applyDarkMode(value: boolean): void {
  document.documentElement.classList.toggle('dark', value);
  localStorage.setItem('darkMode', value.toString());
}

applyDarkMode(isDarkMode.value);

export function useDarkMode(): DarkMode {
  function toggleDarkMode(): void {
    isDarkMode.value = !isDarkMode.value;
    applyDarkMode(isDarkMode.value);
  }

  return {
    isDarkMode: readonly(isDarkMode),
    toggleDarkMode,
  };
}
