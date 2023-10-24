export type Key = string | number

export type Value = string | number

export type ChangeEventHandler<K extends Key> = (key: K) => void

export interface Props<K extends Key, V extends Value> {
	items: K extends unknown ? V extends unknown ? { key: K, value: V }[] : never : never
	onChange?: ChangeEventHandler<K>
}
