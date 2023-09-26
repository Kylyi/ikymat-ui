<script setup lang="ts">
// FIXME: This solution is not optimal... The proper way would be to import the
// `NuxtLink` component from `#components` and use <component :is="..." />
// approach to create the component but for some reason, once `NuxtLink` is
// imported, imports in the parent component (<Btn />) of preset get broken
// Probably Nuxt bug
// Added
import { computedEager } from '@vueuse/core'
import { useRoute } from '#imports'

// Types
import type { IBtnNavigationProps } from '../Button/types/btn-props.type.ts'

const props = defineProps<IBtnNavigationProps>()

// UTILS
const route = useRoute()

const toPathString = computedEager(() => {
  const to = props.to

  if (typeof to === 'string') {
    return to
  }

  if (typeof to === 'object' && 'path' in to) {
    return to.path
  }

  return ''
})

const currentPath = computedEager(() => {
  return route.path
})
</script>

<template>
  <NuxtLink
    v-if="to && !disabled"
    :to="to"
    :external="external"
    :target="external || download ? '_blank' : undefined"
    :download="download || undefined"
    :class="{
      'router-link-active': !exact && toPathString.startsWith(currentPath),
      'no-active': noActiveLink,
    }"
  >
    <slot />
  </NuxtLink>

  <button
    v-else
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
a.btn:hover {
  --apply: underline;
}
</style>
