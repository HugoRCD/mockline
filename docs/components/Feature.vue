<script lang="ts" setup>
const featuresItem = [
  {
    title: "Design fast. Design consistently.",
    description: "Every component is designed to be consistent with each other and adapt to your brand."
  },
  {
    title: "Production-ready examples",
    description: "Designing is hard. So we've created production-ready examples to help you get started."
  },
  {
    title: "AI powered design system generator",
    description: "No more lorem ipsum, generate real content with our AI powered content generator."
  }
]
</script>

<template>
  <div class="relative flex flex-col justify-center gap-8 px-4 sm:px-8 py-16">
        <img
          alt="mockline logo"
          class="absolute inset-0 object-center opacity-70 h-64 sm:h-96 w-full py-8"
          src="/fade-mockline-logo.svg"
        >
    <div class="flex flex-col gap-1 text-center max-w-2xl mx-auto">
      <h4 class="text-lg font-light leading-tight lg:text-2xl">
        <span
          class="bg-clip-text font-mockline text-transparent bg-gradient-to-tl from-purple-800 from-10% to-purple-500 to-90%"
        >
          Features
        </span>
      </h4>
      <h3 class="text-3xl font-medium leading-tight lg:text-5xl">
        Build world's leading apps with mockline
      </h3>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6 sm:mt-14 mx-auto">
      <div
        v-for="item in featuresItem"
        :key="item.title"
        class="flex flex-col gap-2 max-w-[200px]"
      >
        <h3 class="text-lg font-light leading-tight lg:text-xl">
          {{ item.title }}
        </h3>
        <p class="font-light leading-tight text-black/60 dark:text-white/60">
          {{ item.description }}
        </p>
      </div>
    </div>
<!--    <div class="flex flex-col gap-1 text-center max-w-2xl mx-auto mt-6 sm:mt-14">
      <video
        src="/presentation-mockline.mp4"
        autoplay
        loop
        muted
        playsinline
        class="w-full max-w-3xl rounded-xl shadow-xl"
      />
    </div>-->
  </div>
</template>

<style lang="scss" scoped>

</style>
