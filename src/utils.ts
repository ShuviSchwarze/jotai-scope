import { INTERNAL_getBuildingBlocksRev1 as INTERNAL_getBuildingBlocks } from 'jotai/vanilla/internals'
import {
  AnyAtom,
  AnyWritableAtom,
  ORIGINAL_BUILDING_BLOCKS,
  ScopedStore,
  Store,
} from './types'

export function isEqualSet(a: Set<unknown>, b: Set<unknown>) {
  return a === b || (a.size === b.size && Array.from(a).every(b.has.bind(b)))
}

export function getOriginalBuildingBlocks(store: Store | ScopedStore) {
  return ORIGINAL_BUILDING_BLOCKS in store
    ? store[ORIGINAL_BUILDING_BLOCKS]
    : INTERNAL_getBuildingBlocks(store)
}

export function toNameString(this: { name: string }) {
  return this.name
}

export function isWritableAtom(atom: AnyAtom): atom is AnyWritableAtom {
  return 'write' in atom
}
