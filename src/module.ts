import { defineNuxtModule, addPlugin, createResolver, installModule, addComponentsDir } from "@nuxt/kit";
import { name, version } from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * @default 'M'
   */
  prefix?: string

  /**
   * @default false
   */
  global?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mockline',
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'M',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = resolve('./runtime');
    nuxt.options.css.push(resolve(runtimeDir, 'assets', 'main.scss'))
    await installModule('@nuxtjs/tailwindcss', {
      exposeConfig: true,
      config: {
        darkMode: 'class',
        content: {
          files: [
            resolve('./runtime/components/**/*.{vue,mjs,ts}'),
            resolve('./runtime/*.{mjs,js,ts}')
          ]
        }
      }
    })
    await addComponentsDir({
      path: resolve(runtimeDir, 'components', 'elements'),
      prefix: "M",
      watch: false
    })
    addPlugin(resolve('./runtime/plugin'))
  }
})
