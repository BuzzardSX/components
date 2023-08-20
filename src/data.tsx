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

const TAG_NAME = 'option'

const TAG_VALUE_ATTRIBUTE = 'value'

const Data: Component = ({ value, record: [key, itemValue], children }) =>
	<>
		{value.map(
			(item) =>
				<TAG_NAME key={key(item)} value={key(item)}>
					{children(key(item), itemValue(item))}
				</TAG_NAME>)}
	</>

export default Data
