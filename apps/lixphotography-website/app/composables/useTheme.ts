import { computed } from 'vue';

export type ThemeMode = 'light' | 'dark';

const storageKey = 'lix-photography-theme';

export function useTheme() {
  const { allowPreferences } = useCookieConsent();
  const readStoredTheme = () => {
    if (!import.meta.client || !allowPreferences.value) return null;
    try { return window.localStorage.getItem(storageKey); } catch { return null; }
  };
  const theme = useState<ThemeMode>('lix-theme-mode', () => 'dark');
  const initialized = useState<boolean>('lix-theme-initialized', () => false);
  const listenerBound = useState<boolean>('lix-theme-listener-bound', () => false);

  const applyTheme = (mode: ThemeMode, persist = true) => {
    theme.value = mode;

    if (!import.meta.client) {
      return;
    }

    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(mode);
    root.style.colorScheme = mode;

    if (persist && allowPreferences.value) {
      try { window.localStorage.setItem(storageKey, mode); } catch { /* Storage may be blocked. */ }
    }
  };

  const getPreferredTheme = (): ThemeMode => {
    if (!import.meta.client) {
      return theme.value;
    }

    const storedTheme = readStoredTheme();

    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const initializeTheme = () => {
    if (!import.meta.client || initialized.value) {
      return;
    }

    const preferredTheme = getPreferredTheme();
    const hasStoredPreference = readStoredTheme() !== null;

    applyTheme(preferredTheme, hasStoredPreference);
    initialized.value = true;

    if (listenerBound.value) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const syncWithSystem = (event: MediaQueryListEvent) => {
      if (readStoredTheme() !== null) {
        return;
      }

      applyTheme(event.matches ? 'dark' : 'light', false);
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', syncWithSystem);
    } else {
      mediaQuery.addListener(syncWithSystem);
    }

    listenerBound.value = true;
  };

  const setTheme = (mode: ThemeMode) => {
    applyTheme(mode);
    initialized.value = true;
  };

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark');
  };

  return {
    theme,
    initializeTheme,
    isDark: computed(() => theme.value === 'dark'),
    setTheme,
    toggleTheme,
  };
}
