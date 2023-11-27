<script lang="ts" setup>
const { appName } = useAppConfig()
useHead({
  title: appName,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "Home" },
    { name: "description", content: "Nuxt Starter" }
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }
  ]
})
</script>

<template>
  <Html lang="en">
    <Body class="bg-white dark:bg-zinc-950">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <UNotifications />
    </Body>
  </Html>
</template>
