<script setup lang="ts">
const siteExamples = [
  "/assets/example/linear.webp",
  "/assets/example/cosmos.webp",
  "/assets/example/raycast.webp",
  "/assets/example/wope.webp",
  "/assets/example/commit.webp",
  "/assets/example/lazy.webp"
]

function divClass (id: number) {
  return id % 2 === 0 ? "flex-row-reverse" : ""
}

const items = [
  {
    id: 1,
    title: "Build world's leading apps with mockline",
    description: "mockline is a design system generator that helps you build world's leading apps with ease.",
    image: "/assets/example/linear.webp",
    alt: "mockline example"
  },
  {
    id: 2,
    title: "AI powered design system generator",
    description: "mockline is powered by AI to respond to your needs and generate the best design system for you.",
    image: "/assets/example/cosmos.webp",
    alt: "mockline example"
  },
  {
    id: 3,
    title: "Powerful CLI",
    description: "mockline comes with a powerful CLI that helps developers and designers to work together.",
    image: "/assets/example/raycast.webp",
    alt: "mockline example"
  }
]

</script>

<template>
  <div class="relative flex flex-col justify-center gap-8 px-4 sm:px-8 py-16">
    <div v-for="item in items" :key="item.id" class="flex gap-4 flex-col sm:flex-row items-center justify-between" :class="divClass(item.id)">
      <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-light leading-tight lg:text-3xl">
          {{ item.title }}
        </h3>
        <p class="text-lg font-light text-black/60 dark:text-white/60">
          {{ item.description }}
        </p>
      </div>
      <img
        :src="item.image"
        class="w-full max-w-xl rounded-xl shadow-xl"
        :alt="item.alt"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
