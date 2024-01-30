<script lang="ts" setup>
const endDate = new Date("2024-04-30")

type CountdownItem = {
  name: string
  value: number
}
const timer = ref<CountdownItem[]>([
  { name: "days", value: 0 },
  { name: "hours", value: 0 },
  { name: "minutes", value: 0 },
  { name: "seconds", value: 0 }
])

function updateCountdown () {
  const now = new Date()
  const difference = endDate - now

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / 1000 / 60) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  timer.value = [
    { name: "days", value: days },
    { name: "hours", value: hours },
    { name: "minutes", value: minutes },
    { name: "seconds", value: seconds }
  ]
}

onMounted(updateCountdown)

setInterval(updateCountdown, 1000)
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="item in timer" :key="item.name" class="countdown-item text-2xl font-bold flex flex-col">
      <span class="text-2xl">{{ item.value }}</span>
      <span class="time-text">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.white-gradient {
  background-image: linear-gradient(0deg, rgb(236, 236, 238) 0%, rgb(75, 75, 88) 100%);
}

.countdown-item {
  @apply bg-gradient-to-b from-neutral-800 to-neutral-900;
  @apply rounded-md px-6 py-2 flex items-center justify-center;
  @apply text-white/80 border-[2px] border-neutral-800/40;

  .time-text {
    @apply text-xs text-neutral-500;
  }
}
</style>
