<template>
  <div class="lix-shell relative min-h-screen overflow-x-hidden bg-background text-foreground">
    <div class="premium-grid pointer-events-none fixed inset-0 opacity-40" />

    <AppNavbar />

    <main class="relative z-10 pt-28 lg:pt-32">
      <slot />
    </main>

    <AppFooter class="relative z-10" />
  </div>
</template>
