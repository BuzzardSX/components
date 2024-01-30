import { useCallback } from 'react'
import type { ChangeEventHandler } from 'react'
import type * as List from './list'

interface Props<K extends List.Key, V extends List.Value> extends List.Props<K, V> {
	disabled?: boolean
	multiple?: boolean
	name?: string
}

const Select = <K extends List.Key, V extends List.Value>({ items, onChange, ...props }: Props<K, V>) => {
	const changeHandler = useCallback<ChangeEventHandler<HTMLSelectElement>>(
		({ target }) => {
			onChange?.(
				items.find(
					({ key }) => key as unknown == target.value
				)!.key as K
			)
		},
		[onChange, items]
	)

	return (
		<select onChange={changeHandler} {...props}>
			{items.map(({ key, value }) =>
				<option key={key} value={key}>
					{value}
				</option>
			)}
		</select>
	)
}

export default Select
