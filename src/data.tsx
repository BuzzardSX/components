import type { ReactNode } from 'react'

export type RecordKey = string

export type RecordValue = string

interface Props<I, K extends RecordKey, V extends RecordValue> {
	data: I[]
	record: [
		key: (item: I) => K
	]
	value: (item: I) => V
	children: (value: V) => ReactNode
}

type Component = <I, K extends RecordKey, V extends RecordValue>({ data, children }: Props<I, K, V>) => JSX.Element

const TAG_NAME = 'option'

const Component: Component = ({ data, record: [key], value, children }) =>
	<>
		{data.map(
			(item) =>
				<TAG_NAME key={key(item)} value={key(item)}>
					{children(value(item))}
				</TAG_NAME>)}
	</>

export type DataSource<I, K extends RecordKey, V extends RecordValue> = Exclude<Props<I, K, V>, 'children'>

export default Component
