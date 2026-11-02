<template>
  <div
    class="app-launch-loader fixed inset-0 z-[220] flex items-center justify-center px-6"
    role="status"
    aria-live="polite"
    aria-label="Loading Lix Photography"
  >
    <div class="app-launch-loader__panel">
      <div class="app-launch-loader__orbit">
        <svg
          viewBox="0 0 120 120"
          class="app-launch-loader__ring"
          aria-hidden="true"
        >
          <circle
            class="app-launch-loader__track"
            cx="60"
            cy="60"
            r="46"
          />
          <circle
            class="app-launch-loader__stroke"
            cx="60"
            cy="60"
            r="46"
            pathLength="100"
          />
        </svg>

        <AppLogo class="app-launch-loader__logo" />
      </div>

      <span class="sr-only">Loading Lix Photography</span>
    </div>
  </div>
</template>

<style scoped>
.app-launch-loader {
  --launch-loader-backdrop: rgba(248, 245, 240, 0.94);
  --launch-loader-stroke: var(--primary);
  --launch-loader-track: rgba(201, 151, 77, 0.16);
  --launch-loader-shadow: rgba(201, 151, 77, 0.22);
  background:
    radial-gradient(circle at top, var(--glow-primary), transparent 18rem),
    radial-gradient(circle at 82% 14%, var(--glow-secondary), transparent 16rem),
    var(--launch-loader-backdrop);
  backdrop-filter: blur(12px);
}

.dark .app-launch-loader {
  --launch-loader-backdrop: rgba(10, 10, 10, 0.94);
  --launch-loader-track: rgba(212, 161, 90, 0.2);
  --launch-loader-shadow: rgba(212, 161, 90, 0.24);
}

.app-launch-loader__panel {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-launch-loader__orbit {
  position: relative;
  display: grid;
  height: 10rem;
  width: 10rem;
  place-items: center;
}

.app-launch-loader__ring {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  animation: app-launch-loader-spin 1.08s linear infinite;
  filter: drop-shadow(0 12px 26px var(--launch-loader-shadow));
}

.app-launch-loader__track,
.app-launch-loader__stroke {
  fill: none;
  stroke-width: 3;
}

.app-launch-loader__track {
  stroke: var(--launch-loader-track);
}

.app-launch-loader__stroke {
  stroke: var(--launch-loader-stroke);
  stroke-dasharray: 64 36;
  stroke-linecap: round;
}

.app-launch-loader__logo {
  height: 5.75rem;
  width: 5.75rem;
}

@keyframes app-launch-loader-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .app-launch-loader__ring {
    animation-duration: 2.8s;
  }
}
</style>
