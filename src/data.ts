export type Key = string | number

export type ChangeEventHandler<K> = (key: K) => void

export interface Props<K extends Key> {
	dataKeys: ToArray<K>
	onChange?: (key: K) => void
}
