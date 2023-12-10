# Mockline

Fully styled and customizable components for Nuxt, powered Tailwind CSS.

Documentation
Visit https://mockline.hrcd.me to explore the documentation.

## Features

- **Fully customizable**: All components are customizable via props and slots.
- **Lightweight**: No external CSS file. All styles are generated via Tailwind CSS.
- **Fully typed**: Written in TypeScript with predictable static types.
- **Developer friendly**: Fully documented and easy to contribute.
- **SSR**: Server-side rendering supported.
- **Dark mode**: Dark mode supported.

## Quick Setup

1. Add `@nuxtjs/mockline` dependency to your project

```bash
# Using bun
bun install -D @nuxtjs/mockline

# Using pnpm
pnpm add -D @nuxtjs/mockline

# Using yarn
yarn add --dev @nuxtjs/mockline

# Using npm
npm install --save-dev @nuxtjs/mockline
```

2. Add `@nuxtjs/mockline` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/mockline'
  ]
})
```

That's it! You can now use Mockline in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```
