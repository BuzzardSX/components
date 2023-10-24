type Key = string | number

type Value = string | number

type ChangeEventHandler<K extends Key> = (key: K) => void

interface Props<K extends Key, V extends Value> {
	items: K extends unknown ? V extends unknown ? { key: K, value: V }[] : never : never
	onChange?: ChangeEventHandler<K>
}

export {
	Key,
	Value,
	ChangeEventHandler,
	Props
}
