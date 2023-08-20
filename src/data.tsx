import type { ReactNode } from 'react'

export namespace Record {
	export type Key = string

	export type Value = string
}

interface Props<I, K extends Record.Key, V extends Record.Value> {
	data: I[]
	$key: (item: I) => K
	value: (item: I) => V
}

interface Render<K extends Record.Key, V extends Record.Value> {
	children: (key: K, value: V) => ReactNode
}

type Component = <I, K extends Record.Key, V extends Record.Value>({ data, children }: Props<I, K, V> & Render<K, V>) => JSX.Element


const Component: Component = ({ data, $key, value, children: render }) =>
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
