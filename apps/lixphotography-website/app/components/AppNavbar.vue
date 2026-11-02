<template>
  <header class="site-header">
    <div class="editorial-wrap nav-inner">
      <NuxtLink to="/" aria-label="Lix Photography home" class="wordmark">lix<span>.</span><small>PHOTOGRAPHY</small></NuxtLink>
      <nav aria-label="Main navigation" class="desktop-nav">
        <NuxtLink v-for="link in links" :key="link.id" :to="`/#${link.id}`">{{ link.label }}</NuxtLink>
      </nav>
      <div class="nav-actions">
        <ThemeToggle />
        <a class="editorial-button small desktop-book" href="/#contact">Let's create <span aria-hidden="true">↗</span></a>
        <button class="menu-toggle" :aria-expanded="menuOpen" aria-controls="mobile-nav" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'">{{ menuOpen ? 'Close −' : 'Menu +' }}</button>
      </div>
    </div>
    <nav v-if="menuOpen" id="mobile-nav" class="mobile-nav editorial-wrap" aria-label="Mobile navigation">
      <NuxtLink v-for="link in links" :key="link.id" :to="`/#${link.id}`" @click="menuOpen = false">{{ link.label }} <span aria-hidden="true">↗</span></NuxtLink>
      <NuxtLink to="/#contact" @click="menuOpen = false">Book a session ↗</NuxtLink>
    </nav>
  </header>
</template>
<script setup lang="ts">
const links = [{ id: 'portfolio', label: 'The work' }, { id: 'about', label: 'The studio' }, { id: 'services', label: 'What we do' }];
const menuOpen = ref(false);
const route = useRoute();
watch(() => route.fullPath, () => { menuOpen.value = false; });
</script>
