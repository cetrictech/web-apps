<template>
  <Transition
    enter-active-class="transition-opacity duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="shouldShowOverlay"
      class="connection-status-overlay"
      role="alert"
      aria-live="assertive"
      aria-label="No internet connection"
    >
      <div class="connection-status-overlay__panel">
        <span
          class="connection-status-overlay__badge"
          :class="{
            'connection-status-overlay__badge--recovered': hasConnectionRecovered,
          }"
        >
          {{ hasConnectionRecovered ? 'Back online' : 'Offline' }}
        </span>

        <div class="space-y-3">
          <h2 class="connection-status-overlay__title">
            {{ hasConnectionRecovered ? 'Connection restored' : 'No internet connection' }}
          </h2>
          <p class="connection-status-overlay__copy">
            {{
              hasConnectionRecovered
                ? 'Your connection is back. Force a refresh to reconnect the app cleanly.'
                : 'Reconnect to the internet, then force a refresh to reload the app.'
            }}
          </p>
        </div>

        <button
          type="button"
          class="connection-status-overlay__button"
          @click="refreshPage"
        >
          Force refresh
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const isOnline = ref(true);
const hasLostConnection = ref(false);

const hasConnectionRecovered = computed(() => isOnline.value && hasLostConnection.value);
const shouldShowOverlay = computed(() => !isOnline.value || hasLostConnection.value);

const syncNetworkStatus = () => {
  isOnline.value = window.navigator.onLine;

  if (!isOnline.value) {
    hasLostConnection.value = true;
  }
};

const refreshPage = () => {
  window.location.reload();
};

onMounted(() => {
  syncNetworkStatus();
  window.addEventListener('online', syncNetworkStatus);
  window.addEventListener('offline', syncNetworkStatus);
});

onBeforeUnmount(() => {
  window.removeEventListener('online', syncNetworkStatus);
  window.removeEventListener('offline', syncNetworkStatus);
});
</script>

<style scoped>
.connection-status-overlay {
  position: fixed;
  inset: 0;
  z-index: 320;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background:
    radial-gradient(circle at top, color-mix(in srgb, var(--primary) 18%, transparent), transparent 22rem),
    radial-gradient(
      circle at 82% 14%,
      color-mix(in srgb, var(--foreground) 6%, transparent),
      transparent 20rem
    ),
    color-mix(in srgb, var(--background) 84%, transparent);
  backdrop-filter: blur(14px);
}

.connection-status-overlay__panel {
  width: min(100%, 28rem);
  border: 1px solid color-mix(in srgb, var(--border) 88%, transparent);
  border-radius: 1.75rem;
  padding: 1.5rem;
  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--card) 96%, transparent),
      color-mix(in srgb, var(--card) 88%, transparent)
    );
  box-shadow:
    0 24px 64px rgba(15, 23, 42, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  text-align: center;
}

.connection-status-overlay__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border: 1px solid color-mix(in srgb, var(--destructive) 42%, transparent);
  border-radius: 999px;
  padding: 0.375rem 0.75rem;
  background: color-mix(in srgb, var(--destructive) 12%, transparent);
  color: var(--destructive);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.connection-status-overlay__badge--recovered {
  border-color: color-mix(in srgb, var(--primary) 42%, transparent);
  background: color-mix(in srgb, var(--primary) 14%, transparent);
  color: var(--primary);
}

.connection-status-overlay__title {
  color: var(--foreground);
  font-size: clamp(1.5rem, 2vw, 1.8rem);
  font-weight: 700;
  line-height: 1.1;
}

.connection-status-overlay__copy {
  color: var(--muted-foreground);
  font-size: 0.98rem;
  line-height: 1.65;
}

.connection-status-overlay__button {
  width: 100%;
  margin-top: 1.5rem;
  border: 0;
  border-radius: 999px;
  padding: 0.95rem 1.2rem;
  background: var(--primary);
  color: var(--primary-foreground);
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition:
    transform 180ms ease,
    opacity 180ms ease,
    box-shadow 180ms ease;
  box-shadow: 0 16px 34px color-mix(in srgb, var(--primary) 28%, transparent);
}

.connection-status-overlay__button:hover {
  transform: translateY(-1px);
  opacity: 0.96;
}

.connection-status-overlay__button:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--primary) 70%, white 30%);
  outline-offset: 3px;
}

@media (max-width: 640px) {
  .connection-status-overlay__panel {
    border-radius: 1.5rem;
    padding: 1.25rem;
  }
}
</style>
