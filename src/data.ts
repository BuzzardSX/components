type Key = string | number

type Value = string | number

type ChangeEventHandler<K extends Key> = (key: K) => void

type Item<K, V> = {
	key: K
	value: V
}

interface Props<K extends Key, V extends Value> {
	items: K extends unknown ? V extends unknown ? Item<K, V>[] : never : never
	onChange?: ChangeEventHandler<K>
}

export type {
	Props,
	ChangeEventHandler,
	Key,
	Value
}
