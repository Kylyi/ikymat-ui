import { NuxtLink } from '#components'

export type INavigationLink = {
  id: string
  icon?: string
  label: string
  to?: InstanceType<typeof NuxtLink>['to']
  children?: Omit<INavigationLink, 'id'>[]
  onClick?: () => void
}
