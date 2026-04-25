export const radius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12
}

export const borderRadius = Object.entries(radius).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: `${value}px`
  }),
  {}
)
