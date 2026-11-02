<template>
  <section id="portfolio" class="editorial-wrap editorial-section">
    <div class="section-topline"><p class="eyebrow">01 / SELECTED WORK</p><span class="quiet-label">A LITTLE OF WHAT WE SEE</span></div>
    <div class="section-heading-row"><h2>Life, in <em>focus.</em></h2><p>A collection of faces, connections, and<br>moments worth holding on to.</p></div>
    <div class="gallery-filters" aria-label="Filter photography">
      <button v-for="category in categories" :key="category" :aria-pressed="category === selectedCategory" :class="{ active: category === selectedCategory }" @click="selectedCategory = category; expanded = false">{{ category }}</button>
    </div>
    <div class="editorial-gallery">
      <figure v-for="(item, index) in visibleItems" :key="item.assetFile" :class="{ 'gallery-offset': index % 3 === 1 }">
        <button class="gallery-photo" @click="openPhoto(item)" :aria-label="`View ${item.title}`">
          <img :src="imageSrc(item.assetFile)" :alt="item.title" loading="lazy" decoding="async" :style="{ objectPosition: item.category === 'Graduation' ? 'center 38%' : 'center' }">
          <span class="gallery-open" aria-hidden="true">↗</span>
        </button>
        <figcaption><span>{{ item.title }}</span><small>{{ item.category }}</small></figcaption>
      </figure>
    </div>
    <div class="gallery-bottom"><span>{{ filteredItems.length }} stories. Countless memories.</span><button v-if="filteredItems.length > 6" class="text-link" @click="expanded = !expanded">{{ expanded ? 'Show selected work' : 'View the full collection' }} <span aria-hidden="true">{{ expanded ? '−' : '+' }}</span></button></div>
    <dialog ref="lightbox" class="photo-dialog" aria-label="Photograph viewer" @close="selectedItem = null" @click="closeBackdrop">
      <template v-if="selectedItem">
        <button class="dialog-close" @click="lightbox?.close()" aria-label="Close photograph">Close ×</button>
        <img :src="imageSrc(selectedItem.assetFile)" :alt="selectedItem.title">
        <div class="dialog-caption"><span>{{ selectedItem.title }}</span><a :href="siteInfo.whatsappHref" target="_blank" rel="noopener noreferrer">Book a session ↗</a></div>
      </template>
    </dialog>
  </section>
</template>
<script setup lang="ts">
import { portfolioItems, portfolioCategories, siteInfo, type PortfolioItem } from '~/data/site';
const categories = ['All work', ...portfolioCategories];
const selectedCategory = ref('All work');
const expanded = ref(false);
const filteredItems = computed(() => selectedCategory.value === 'All work' ? portfolioItems : portfolioItems.filter(item => item.category === selectedCategory.value));
const visibleItems = computed(() => expanded.value ? filteredItems.value : filteredItems.value.slice(0, 6));
const lightbox = ref<HTMLDialogElement | null>(null);
const selectedItem = ref<PortfolioItem | null>(null);
const imageSrc = (file: string) => `/images/portfolio/${file}`;
async function openPhoto(item: PortfolioItem) {
  selectedItem.value = item;
  await nextTick();
  lightbox.value?.showModal();
}
function closeBackdrop(event: MouseEvent) { if (event.target === lightbox.value) lightbox.value?.close(); }
</script>
