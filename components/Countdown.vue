<script lang="ts" setup>

// Date de fin du compte à rebours
const endDate = new Date("2023-12-25")

// Variable pour stocker la durée restante
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

// Fonction pour calculer la durée restante et la mettre à jour
function updateCountdown () {
  const now = new Date()
  const difference = endDate - now

  // Calcul de la durée restante en jours, heures, minutes et secondes
  days.value = Math.floor(difference / 1000 / 60 / 60 / 24)
  hours.value = Math.floor(difference / 1000 / 60 / 60) % 24
  minutes.value = Math.floor(difference / 1000 / 60) % 60
  seconds.value = Math.floor(difference / 1000) % 60
}

// Mise à jour initiale du compte à rebours
onMounted(updateCountdown)

// Mise à jour du compte à rebours toutes les secondes
setInterval(updateCountdown, 1000)
</script>

<template>
  <div class="flex gap-2 justify-center mt-8">
    <span class="countdown-item text-2xl font-bold">
      {{ days }}<span class="mt-1 text-lg font-light" />
    </span>
    <span class="countdown-item text-2xl font-bold">
      {{ hours }}<span class="mt-1 text-lg font-light" />
    </span>
    <span class="countdown-item text-2xl font-bold">
      {{ minutes }}<span class="mt-1 text-lg font-light" />
    </span>
    <span class="countdown-item text-2xl font-bold">
      {{ seconds }}<span class="mt-1 text-lg font-light" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.white-gradient {
  background-image: linear-gradient(0deg, rgb(236, 236, 238) 0%, rgb(75, 75, 88) 100%);
}

.countdown-item {
  @apply bg-gradient-to-b from-neutral-800/30 to-transparent;
  @apply rounded-md w-16 h-16 flex items-center justify-center;
  @apply text-white/80 border-[2px] border-neutral-800/40;
}
</style>
