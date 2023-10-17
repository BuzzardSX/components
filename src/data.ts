import type { ReactNode } from 'react'

export type Key = string | number

export type Value = string | number

export type ChangeEventHandler<K extends Key> = (key: K) => void

type Item<K, V> = {
	key: K
	value: V
}

type Items<K, V> = K extends unknown ? V extends unknown ? Item<K, V>[] : never : never

export interface Props<K extends Key, V extends Value> {
	items: Items<K, V>
	onChange?: ChangeEventHandler<K>
	renderItem?: (value: V) => ReactNode
}
