namespace Data {
	type Key = string | number

	export interface Props<K extends Key> {
		dataKeys: ToArray<K>
		onChange?: (key: K) => void
	}
}
