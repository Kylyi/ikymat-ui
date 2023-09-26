// TYPES
import type { IBtnProps } from '../types/btn-props.type'
import { reactivePick } from '#imports'

export function useBtnUtils() {
  function getBtnProps(props: IBtnProps) {
    return reactivePick(props, [])
  }

  return {
    getBtnProps,
  }
}
