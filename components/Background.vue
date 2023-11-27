<script setup lang="ts">
import type { Container } from "tsparticles-engine"

// make a starry background
const options = {
  fpsLimit: 60,
  particles: {
    color: {
      value: "#ffffff"
    },
    collisions: {
      enable: false
    },
    move: {
      direction: "none",
      enable: true,
      random: true,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 700
      },
      value: 80
    },
    opacity: {
      random: true,
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      random: true,
      value: 1
    }
  },
  detectRetina: true
}

const onLoad = (container: Container) => {
  container.pause()
  setTimeout(() => container.play(), 2000)
}
</script>

<template>
  <div>
    <NuxtParticles
      id="tsparticles"
      :options="options"
      @load="onLoad"
    />
  </div>
</template>
