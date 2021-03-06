import { useState } from 'react'

type Patch<S> = Partial<S> | ((prev: S) => S)
type UsePatchState<S> = [S, (patch: Patch<S>) => void]

export function usePatchState<S>(initialState: S): UsePatchState<S> {
  const [state, setState] = useState<S>(initialState)
  function patchState(next: Patch<S>) {
    setState((prev) =>
      typeof next === 'function' ? next(prev) : { ...prev, ...next }
    )
  }
  return [state, patchState]
}
