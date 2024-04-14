
import type { ModuleOptions } from './module.js'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['primevueBootstrap']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['primevueBootstrap']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['primevueBootstrap']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['primevueBootstrap']?: ModuleOptions }
}


export type { ModuleOptions, default } from './module.js'
