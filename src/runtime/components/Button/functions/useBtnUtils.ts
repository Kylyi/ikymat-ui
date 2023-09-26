// TYPES
import { reactivePick } from '#imports'
import type { IBtnProps } from '../types/btn-props.type'

export function useBtnUtils() {
  function getBtnProps(props: IBtnProps) {
    return reactivePick(props, [])
  }

  return {
    getBtnProps,
  }
}
