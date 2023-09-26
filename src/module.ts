import {
  defineNuxtModule,
  createResolver,
  installModule,
  addComponentsDir,
  addComponent,
} from '@nuxt/kit'
import { name, version } from '../package.json'

import { extendUnocssOptions } from './unocss'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'ikymat-ui',
    compatibility: {
      nuxt: '^3.0.0-rc.8',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {},

  // Shorthand sugar to register Nuxt hooks
  hooks: {},

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolver.resolve('./runtime')
    const isDevelopment =
      runtimeDir.endsWith('src/runtime') || runtimeDir.endsWith('src\\runtime')

    // Modules
    if (!options.dev) {
      nuxt.options.unocss = extendUnocssOptions(nuxt.options.unocss)
    }
    await installModule('@unocss/nuxt')
    await installModule('@vueuse/nuxt')

    // Components
    addComponentsDir({
      path: resolver.resolve(runtimeDir, 'components'),
      watch: false,
    })

    addComponent({
      name: 'Btn', // name of the component to be used in vue templates
      filePath: resolver.resolve('./runtime/components/Button/Btn.vue'),
    })

    // List of used CSS|SCSS globaly
    const extension = isDevelopment ? 'scss' : 'css'
    nuxt.options.css = [
      resolver.resolve(`./runtime/assets/styles/breakpoints.${extension}`),
      resolver.resolve(`./runtime/assets/styles/colors.${extension}`),
      resolver.resolve(`./runtime/assets/styles/main.${extension}`),
      resolver.resolve('./runtime/assets/styles/perfect-scrollbar.css'),
      resolver.resolve(`./runtime/assets/styles/reset.${extension}`),
      resolver.resolve(`./runtime/assets/styles/ripple.${extension}`),
      resolver.resolve(`./runtime/assets/styles/table.${extension}`),
      resolver.resolve(`./runtime/assets/styles/theme.${extension}`),
      resolver.resolve(`./runtime/assets/styles/transitions.${extension}`),
      resolver.resolve(`./runtime/assets/styles/typography.${extension}`),
      resolver.resolve(`./runtime/assets/styles/zindex.${extension}`),
    ]

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve("./runtime/plugin"));
  },
})
