type Key = string | number

type Value = string | number

type ChangeEventHandler<K extends Key> = (key: K) => void

type Items<K, V> = K extends unknown ? V extends unknown ? { key: K, value: V }[] : never : never

interface Props<K extends Key, V extends Value> {
	items: Items<K, V>
	onChange?: ChangeEventHandler<K>
}

type StringToNull<T> = T extends string ? null : T

type Result = StringToNull<string | number>

export { Key, Value, ChangeEventHandler, Props }
