export type IItem<T extends {} = {}> = T & Record<string, any>

export type IItemBase<T = IItem> = {
  name: string | Extract<keyof T, string | number>
  field: Extract<keyof T, string | number>
  format?: (row: T, value?: any) => any
}
