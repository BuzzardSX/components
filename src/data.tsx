import type { ReactNode } from 'react'

type RecordKey = string

type RecordValue = string

interface Props<I, K extends RecordKey, V extends RecordValue> {
	value: I[]
	record: [
		key: (item: I) => K,
		value: (item: I) => V
	]
	children: (key: K, value: V) => ReactNode
}

type Component = <I, K extends RecordKey, V extends RecordValue>({ value, children }: Props<I, K, V>) => JSX.Element

const Data: Component = ({ value, record: [key, itemValue], children }) =>
	<>
		{value.map(
			(item) => children(key(item), itemValue(item))
		)}
	</>

export default Data
