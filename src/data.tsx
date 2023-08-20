import type { ReactNode } from 'react'

export type RecordKey = string

export type RecordValue = string

interface Props<I, K extends RecordKey, V extends RecordValue> {
	data: I[]
	record: [
		key: (item: I) => K,
		value: (item: I) => V
	]
	children: (key: K, value: V) => ReactNode
}

type Component = <I, K extends RecordKey, V extends RecordValue>({ data, children }: Props<I, K, V>) => JSX.Element

const TAG_NAME = 'option'

const TAG_VALUE_ATTRIBUTE = 'value'

const Component: Component = ({ data, record: [key, itemValue], children }) =>
	<>
		{data.map(
			(item) =>
				<TAG_NAME key={key(item)} value={key(item)}>
					{children(key(item), itemValue(item))}
				</TAG_NAME>)}
	</>

export type DataSource<I, K extends RecordKey, V extends RecordValue> = Exclude<Props<I, K, V>, 'children'>

export default Component
