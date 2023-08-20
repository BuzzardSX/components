import type { ReactNode } from 'react'

export type RecordKey = string

export type RecordValue = string

interface Props<I, K extends RecordKey, V extends RecordValue> {
	data: I[]
	$key: (item: I) => K
	value: (item: I) => V
}

interface Render<K extends RecordKey, V extends RecordValue> {
	children: (key: K, value: V) => ReactNode
}

type Component = <I, K extends RecordKey, V extends RecordValue>({ data, children }: Props<I, K, V> & Render<K, V>) => JSX.Element


const Component: Component = ({ data, $key, value, children: render }) =>
	<>
		{data.map((item) => render($key(item), value(item)))}
	</>

interface Data<I, K extends RecordKey, V extends RecordValue> {
	data: I[]
	recordKey: (item: I) => K
	recordValue: (item: I) => V
}

export type { Data }
export default Component
