import type { ChangeEventHandler } from 'react'
import type * as Data from './data'

interface Props<K extends Data.Key, V extends Data.Value> extends Data.Props<K, V> {
	disabled?: boolean
	multiple?: boolean
	name?: string
}

const Select = <K extends Data.Key, V extends Data.Value>({ items, onChange, renderItem, ...props }: Props<K, V>) => {
	const changeHandler: ChangeEventHandler<HTMLSelectElement> =
		(event) => onChange?.(event.target.value as K)

	return (
		<select onChange={changeHandler} {...props}>
			{items.map(({ key, value }) =>
				<option key={key} value={key}>
					{renderItem?.(value as V) ?? value}
				</option>
			)}
		</select>
	)
}

export default Select
