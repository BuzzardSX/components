import { Fragment, type ReactNode } from 'react'

type Key = string

interface Item<K extends Key> {
	key: K
}

interface Props<K extends Key> {
	items: Item<K>[]
	children: (key: K) => ReactNode
}

const Data = <K extends Key>({ items, children }: Props<K>) =>
	<Fragment>
		{items.map(
			(item) => children(item.key)
		)}
	</Fragment>

export default Data
