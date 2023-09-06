import type { ReactNode } from 'react'

type Key = string | number

type Value = string | number

type ChangeEventHandler<K extends Key> = (key: K) => void

type Item<K, V> = {
	key: K
	value: V
}

type Items<K, V> = K extends unknown ? V extends unknown ? Item<K, V>[] : never : never

namespace Example {
	/**
	 * Нужно сделать так, чтобы при использовании компонента, TS мог однозначно определить, относится ли массив items к типу Item, либо нарушает его
	*/
	/**
	 * Точно известно, что поле itemMap будет иметь тип (item: I) => K, где I extends object и K extends Key
	 */
}

interface Props<K extends Key, V extends Value> {
	items: Items<K, V>
	onChange?: ChangeEventHandler<K>
	renderItem?: (value: V) => ReactNode
}

export type {
	Props,
	ChangeEventHandler,
	Key,
	Value
}
