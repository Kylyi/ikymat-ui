import {
  defineNuxtModule,
  createResolver,
  installModule,
  addComponentsDir,
  addComponent,
} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'ikymat-ui',
    version: '1.0.0',
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

    // Modules
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
    nuxt.options.css = [
      resolver.resolve('./runtime/assets/styles/breakpoints.scss'),
      resolver.resolve('./runtime/assets/styles/colors.scss'),
      resolver.resolve('./runtime/assets/styles/main.scss'),
      resolver.resolve('./runtime/assets/styles/perfect-scrollbar.css'),
      resolver.resolve('./runtime/assets/styles/reset.scss'),
      resolver.resolve('./runtime/assets/styles/ripple.scss'),
      resolver.resolve('./runtime/assets/styles/table.scss'),
      resolver.resolve('./runtime/assets/styles/theme.scss'),
      resolver.resolve('./runtime/assets/styles/transitions.scss'),
      resolver.resolve('./runtime/assets/styles/typography.scss'),
      resolver.resolve('./runtime/assets/styles/zindex.scss'),
    ]

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    //addPlugin(resolver.resolve("./runtime/plugin"));
  },
})
