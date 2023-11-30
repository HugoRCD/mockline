<script setup lang="ts">
</script>

<template>
  <div class="h-screen relative flex flex-col justify-center items-center px-4 sm:px-8">
    <h1 class="text-center text-3xl font-light leading-tight lg:text-5xl">
      <SvgoMocklineLogo :font-controlled="false" class="w-16 h-16 lg:w-24 lg:h-24 mx-auto" />
      <span class="font-mockline font-medium text-4xl lg:text-6xl bg-gradient-to-br from-black/90 to-black/30 dark:from-white/90 dark:to-white/30 bg-clip-text text-transparent">
        mockline
      </span>
      <br>
      <span class="bg-gradient-to-br from-black/90 to-black/30 dark:from-white/90 dark:to-white/30 bg-clip-text text-transparent">
        Make design systems in a snap
      </span>
    </h1>
    <h2 class="mt-4 max-w-xl mx-auto text-center text-lg font-light text-black/60 dark:text-white/60" />
    <CircleSystem />
    <Countdown class="z-10" />
    <Background class="-z-1" />
  </div>
</template>

<style scoped lang="scss">
</style>
