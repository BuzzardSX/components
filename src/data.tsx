import type { ReactNode } from 'react'

type Key = string

interface Item<K extends Key> {
	key: K
}

interface Props<K extends Key> {
	value: Item<K>[]
	children: (key: K) => ReactNode
}

type Component = <K extends Key>({ value, children }: Props<K>) => JSX.Element

const Data: Component = ({ value, children }) =>
	<>
		{value.map(
			(item) => children(item.key)
		)}
	</>

export default Data
