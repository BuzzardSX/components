import type { ReactNode } from 'react'

export namespace Record {
	export type Key = string

	export type Value = string

	export interface Props<I, K extends Record.Key, V extends Record.Value> {
		data: I[]
		$key: (item: I) => K
		value: (item: I) => V
	}

	export interface Render<K extends Record.Key, V extends Record.Value> {
		children: (key: K, value: V) => ReactNode
	}

	export type Component = <I, K extends Record.Key, V extends Record.Value>({ data, children }: Record.Props<I, K, V> & Record.Render<K, V>) => JSX.Element
}

const Component: Record.Component = ({ data, $key, value, children: render }) =>
	<>
		{data.map((item) => render($key(item), value(item)))}
	</>

interface Data<I, K extends Record.Key, V extends Record.Value> {
	data: I[]
	recordKey: (item: I) => K
	recordValue: (item: I) => V
}

export type { Data }
export default Component
