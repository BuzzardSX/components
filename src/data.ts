export type Key = string | number

export type ChangeEventHandler<K> = (key: K) => void

type ItemKey = number

type NonLiteralNumber<T> = T extends number ? number extends T ? T : never : never

type Literal = 1

type Result = NonLiteralNumber<number>

type Item<K extends ItemKey> = {
	key: K
}

interface Args<K extends ItemKey> {
	items: Item<K>[]
}

const render = <K extends ItemKey>(args: Args<K>) => {}

render({
	items: [{ key: 1 }, { key: 2 }]
})

export interface Props<K extends Key> {
	dataKeys: ToArray<K>
	onChange?: (key: K) => void
}
