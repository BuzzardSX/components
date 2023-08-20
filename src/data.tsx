import { Fragment, type ReactNode } from 'react'

type Key = string

interface Item<K extends Key> {
	key: K
}

interface Props<K extends Key> {
	items: Item<K>[]
	children: (key: K) => ReactNode
}

type Component = <K extends Key>({ items, children }: Props<K>) => JSX.Element

const TAG_NAME = 'option'

const Data: Component = ({ items, children }) =>
	<>
		{items.map(
			(item) => <TAG_NAME key={item.key} />
		)}
	</>

export default Data
