type CookieChoice = { version: 1; preferences: boolean };

export function useCookieConsent() {
  const choice = useCookie<CookieChoice | null>('lix-cookie-consent', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 180,
    sameSite: 'lax', path: '/',
    secure: import.meta.client ? window.location.protocol === 'https:' : !import.meta.dev,
  });
  const settingsOpen = useState('lix-cookie-settings', () => false);
  const hasChoice = computed(() => choice.value?.version === 1 && typeof choice.value.preferences === 'boolean');
  const allowPreferences = computed(() => hasChoice.value && choice.value?.preferences === true);

  function saveChoice(preferences: boolean) {
    choice.value = { version: 1, preferences };
    settingsOpen.value = false;
    if (import.meta.client) {
      try {
        if (preferences) {
          const mode = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
          window.localStorage.setItem('lix-photography-theme', mode);
        } else {
          window.localStorage.removeItem('lix-photography-theme');
        }
      } catch { /* Browsing remains available when storage is blocked. */ }
    }
  }

  return { hasChoice, allowPreferences, settingsOpen, saveChoice,
    openCookieSettings: () => { settingsOpen.value = true; } };
}
