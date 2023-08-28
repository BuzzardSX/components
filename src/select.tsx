import type { ChangeEventHandler } from 'react'
import type * as Data from './data'

interface Props<K extends Data.Key, V extends Data.Value> extends Data.Props<K, V> {
	disabled?: boolean
	multiple?: boolean
	name?: string
}

const Select = <K extends Data.Key, V extends Data.Value>({ items, onChange, ...props }: Props<K, V>) => {
	const changeHandler: ChangeEventHandler<HTMLSelectElement> =
		(event) => onChange?.(event.target.value as K)

	return (
		<select onChange={changeHandler} {...props}>
			{items.map(({ key }) =>
				<option key={key} children={key} />
			)}
		</select>
	)
}

export default Select
