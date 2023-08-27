export type Key = string | number

export type ChangeEventHandler<K> = (key: K) => void

type Item<K extends Key> = {
	key: K
}

interface Args<K extends Key> {
	items: Item<K>[]
}

const render = <K extends Key>(args: Args<K>) => {}

render({
	items: [{ key: 1 }, { key: 2 }]
})

export interface Props<K extends Key> {
	dataKeys: ToArray<K>
	onChange?: (key: K) => void
}
