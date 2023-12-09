<script setup lang="ts">

</script>

<template>
  <div class="relative">
    <input
      id="toggle"
      type="checkbox"
      class="peer sr-only opacity-0"
    >
    <label
      class="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
      for="toggle"
    >
      <span class="sr-only">Enable</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
input:checked + .toggle-switch {
  transform: translateX(2px);
  background-color: #3490dc;
}
input:focus + .toggle-switch {
  box-shadow: 0 0 0 3px rgba(52,144,220,0.5);
}
input:checked + .toggle-switch .toggle-circle {
  transform: translateX(100%);
}
</style>
