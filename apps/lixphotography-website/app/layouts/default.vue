<template>
  <div class="lix-editorial min-h-screen bg-background text-foreground">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <AppNavbar />
    <main id="main-content"><slot /></main>
    <AppFooter />
  </div>
</template>
