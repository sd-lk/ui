interface Prefixer {
  (input: string): string
}
const screen = (item: string): string =>
  item
    // §.replace(/(\.[^\.]+)/, '$1\\')
    .replace(/\//, '\\/')

const unscreen = (item: string): string => item.replace('\\', '')

interface ApplyPrefixed {
  (prefix: Prefixer, ...classes: string[]): Record<string, unknown>
}

export const applyPrefixed: ApplyPrefixed = (prefix, ...classes) => {
  const next = classes
    .map((item) => {
      const screened = screen(item)
      const prefixed = prefix(screened).slice(1)
      return unscreen(prefixed)
    })
    .join(' ')
  return {
    [`@apply ${next}`]: {},
  }
}
