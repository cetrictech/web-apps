<template>
  <footer class="editorial-wrap editorial-footer">
    <div class="footer-top"><NuxtLink to="/" class="wordmark" aria-label="Lix Photography home">lix<span>.</span><small>PHOTOGRAPHY</small></NuxtLink><p>Made with light.<br>Kept with love.</p><a href="/#home" class="text-link">Back to top ↑</a></div>
    <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} Lix Photography</span><span>KISUMU, KENYA</span><div><NuxtLink to="/privacy">Privacy &amp; cookies</NuxtLink><button @click="openCookieSettings" type="button">Cookie settings</button></div></div>
  </footer>
</template>
<script setup lang="ts">
const { openCookieSettings } = useCookieConsent();
</script>
