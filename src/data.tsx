import type { ReactNode } from 'react'

export type RecordKey = string

export type RecordValue = string

interface Props<I, K extends RecordKey, V extends RecordValue> {
	data: I[]
	record: [
		key: (item: I) => K
	]
	value: (item: I) => V
	children: (key: K, value: V) => ReactNode
}

type Component = <I, K extends RecordKey, V extends RecordValue>({ data, children }: Props<I, K, V>) => JSX.Element


const Component: Component = ({ data, record: [key], value, children }) =>
	<>
		{data.map((item) => children(key(item), value(item)))}
	</>

export type DataSource<I, K extends RecordKey, V extends RecordValue> = Exclude<Props<I, K, V>, 'children'>

export default Component
