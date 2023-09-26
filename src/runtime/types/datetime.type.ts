import { Dayjs } from 'Dayjs'

export type Datetime = Dayjs | number | string | Date | null | undefined

export type DatetimeStrict = Dayjs | number | string | Date

export const DATE_TYPES = Object.freeze([
  'date',
  'yearMonth',
  'datetime',
  'timestamp',
  'DateTime',
])
