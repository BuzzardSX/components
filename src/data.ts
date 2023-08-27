export type Key = string | number

export type ChangeEventHandler<K extends Key> = (key: K) => void

type ItemKey = number

type BeforeItem<K> = { key: K }

type DataItem<K> = K extends number ? number extends K ? BeforeItem<K> : never : never

interface Args<K extends ItemKey> {
	items: DataItem<K>[]
}

const render = <K extends ItemKey>(args: Args<K>) => {}

render({
	items: [{ key: 1 }, { key: 2 }]
})

export interface Props<K extends Key> {
	dataKeys: ToArray<K>
	onChange?: (key: K) => void
}
