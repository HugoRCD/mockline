<script lang="ts" setup>
import { SvgoCurrenciaLogo, SvgoHochardLogo, SvgoHelprLogo } from "#components"

const { appName } = useAppConfig();
useHead({
  title: appName,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "Home" },
    { name: "description", content: "Nuxt Starter" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});

const projects = [
  {
    url: "https://hrcd.me",
    logoComponent: SvgoHochardLogo,
    title: "HR Folio"
  },
  {
    url: "https://currencia.hrcd.fr",
    logoComponent: SvgoCurrenciaLogo,
    title: "Currencia"
  },
  {
    url: "https://helpr.tech",
    logoComponent: SvgoHelprLogo,
    title: "Helpr"
  }
]
</script>

<template>
  <Html lang="en">
    <Body class="bg-white dark:bg-zinc-950 selection:bg-purple-500 selection:text-white">
      <div class="relative flex flex-col justify-center gap-4">
        <!-- grid -->
        <div
          class="pointer-events-none absolute inset-0 bg-center bg-grid-black/10 dark:bg-grid-white/5 bg-grid-14 [mask-image:radial-gradient(white,transparent_80%)]"
        />
        <Hero />
        <Divider class="my-8"/>
        <Feature />
        <div class="px-4 sm:px-8 py-16">
          <div class="flex flex-col gap-1 text-center max-w-2xl mx-auto mt-6 sm:mt-14">
            <h3 class="text-3xl font-medium leading-tight lg:text-5xl">
              Made with Mockline
            </h3>
            <p class="font-light leading-tight text-black/60 dark:text-white/60">
              App already using Mockline
            </p>
          </div>
          <div class="flex flex-col sm:flex-row justify-around gap-8 max-w-2xl mx-auto mt-6 sm:mt-14">
            <NuxtLink class="flex flex-col gap-2 cursor-pointer" v-for="item in projects" :key="item.title"
                      :to="item.url"
            >
              <component :is="item.logoComponent" :fontControlled="false" class="h-16" />
              <h3 class="text-lg font-mockline font-light leading-tight lg:text-xl bg-clip-text text-transparent bg-gradient-to-tl from-purple-800 from-10% to-purple-500 to-90%">
                {{ item.title }}
              </h3>
            </NuxtLink>
          </div>
        </div>
        <video src="/promo-mockline.mp4" autoplay loop muted
               class="w-full max-w-3xl mx-auto rounded-xl shadow-xl"></video>
        <Footer/>
      </div>
      <UNotifications />
    </Body>
  </Html>
</template>
