import type { ReactNode } from 'react'

export namespace Record {
	export type Key = string

	export type Value = string

	interface Props<I, K extends Key, V extends Value> {
		data: I[]
		$key: (item: I) => K
		value: (item: I) => V
	}

	interface Render<K extends Key, V extends Value> {
		children: (key: K, value: V) => ReactNode
	}

	export type Component = <I, K extends Key, V extends Value>({ data, children }: Props<I, K, V> & Render<K, V>) => JSX.Element

	export interface Data<I, K extends Key, V extends Value> {
		data: I[]
		recordKey: (item: I) => K
		recordValue: (item: I) => V
	}
}

const Component: Record.Component = ({ data, $key, value, children: render }) =>
	<>
		{data.map((item) => render($key(item), value(item)))}
	</>

export default Component
