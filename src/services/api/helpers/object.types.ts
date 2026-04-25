export type AnyObject = Record<string, unknown>

export type KeyConverter = (
  data: AnyObject | AnyObject[]
) => AnyObject | AnyObject[]
