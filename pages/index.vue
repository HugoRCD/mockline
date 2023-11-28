<script lang="ts" setup>
definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home"
})
</script>

<template>
  <div class="relative flex flex-col justify-center gap-4">
    <!-- grid -->
    <div
      class="pointer-events-none absolute inset-0 bg-center bg-grid-black/10 dark:bg-grid-white/5 bg-grid-14 [mask-image:radial-gradient(white,transparent_80%)]"
    />

    <!-- Hero -->
    <HomeHero />

    <div class="bg-black z-20">
      <Divider class="my-8" />

      <HomeFeature />
    </div>
  </div>
</template>
