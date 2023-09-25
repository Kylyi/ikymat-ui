import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  installModule,
  addComponentsDir,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "ikymat-ui",
    version: "1.0.0",
    configKey: "ikymat-ui",
    compatibility: {
      nuxt: "^3.0.0-rc.8",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {},

  // Shorthand sugar to register Nuxt hooks
  hooks: {},

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Transpile runtime
    const runtimeDir = resolver.resolve("./runtime");

    // Modules
    await installModule("@unocss/nuxt");
    await installModule("@vueuse/nuxt");

    // Components
    addComponentsDir({
      path: resolver.resolve(runtimeDir, "components"),
      watch: false,
    });

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    //addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
