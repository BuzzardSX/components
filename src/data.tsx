import { Fragment, type ReactNode } from 'react'

type Key = string

interface Item<K extends Key> {
	key: K
}

interface Props<K extends Key> {
	items: Item<K>[]
	itemRender: (key: K) => ReactNode
}

const Data = <K extends Key>({ items, itemRender }: Props<K>) =>
	<Fragment>
		{items.map(
			(item) => itemRender(item.key)
		)}
	</Fragment>

export default Data
