import type { ReactNode } from 'react'

type Key = string | number

type Value = string | number

type ChangeEventHandler<K extends Key> = (key: K) => void

type Item<K, V> = {
	key: K
	value: V
}

type ToItemArray<K, V> = K extends unknown ? V extends unknown ? Item<K, V>[] : never : never

interface Props<K extends Key, V extends Value> {
	items: ToItemArray<K, V>
	onChange?: ChangeEventHandler<K>
	renderItem?: (value: V) => ReactNode
}

export type {
	Props,
	ChangeEventHandler,
	Key,
	Value
}
