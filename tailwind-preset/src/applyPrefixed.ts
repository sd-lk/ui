interface Prefixer {
  (input: string): string
}

interface ApplyPrefixed {
  (prefix: Prefixer, ...classes: string[]): Record<string, unknown>
}

export const applyPrefixed: ApplyPrefixed = (prefix, ...classes) => {
  const prefixed = classes.map((item) => prefix(item).slice(1)).join(' ')
  return {
    [`@apply ${prefixed}`]: {},
  }
}
