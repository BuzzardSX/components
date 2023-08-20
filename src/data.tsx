import type { ReactNode } from 'react'

export namespace Record {
	export type Key = string

	export type Value = string

	interface Props<I, K extends Key, V extends Value> {
		data: I[]
		$key: (item: I) => K
		value: (item: I) => V
	}

	interface Children<K extends Key, V extends Value> {
		children: (key: K, value: V) => ReactNode
	}

	export type Component = <I, K extends Key, V extends Value>({ data, children }: Props<I, K, V> & Children<K, V>) => JSX.Element

	export type Data<I, K extends Key, V extends Value> = Omit<Props<I, K, V>, '$key' | 'value'> & { recordKey: Props<I, K, V>['$key'], recordValue: Props<I, K, V>['value'] }
}

const Component: Record.Component = ({ data, $key, value, children: render }) =>
	<>
		{data.map((item) => render($key(item), value(item)))}
	</>

export default Component
