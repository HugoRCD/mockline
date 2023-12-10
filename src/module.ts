import { defineNuxtModule, createResolver, installModule, addComponentsDir } from "@nuxt/kit";
import { name, version } from '../package.json';

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * @default 'M'
   */
  prefix?: string
  /**
   * Enable auto-import of all components
   * @default true
   */
  injectComponents?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mockline',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'M',
    injectComponents: true
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = resolve('./runtime');

    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.build.transpile.push('sass')

    nuxt.options.css.push(resolve(runtimeDir, 'assets', 'main.css'));
    await installModule('@nuxtjs/color-mode', { classSuffix: '' })
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
    if (options.injectComponents) {
      await addComponentsDir({
        path: resolve(runtimeDir, 'components', 'elements'),
        prefix: options.prefix,
        watch: false
      })
    }
  }
})
