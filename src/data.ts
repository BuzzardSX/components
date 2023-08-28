namespace Example {
	type Key = string | number

	interface Args<K extends Key> {
		current: ToArray<K>
	}
}

type Key = string | number

type ChangeEventHandler<K extends Key> = (key: K) => void

interface Props<K extends Key> {
	itemKeys: ToArray<K>
	onChange?: ChangeEventHandler<K>
}

export type { Props, ChangeEventHandler, Key }
