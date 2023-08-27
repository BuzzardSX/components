import type { ChangeEventHandler } from 'react'
import type * as Data from './data'

interface Props<K extends Data.Key> extends Data.Props<K> {
	disabled?: boolean
	multiple?: boolean
	name?: string
}

const Select = <K extends Data.Key>({ itemKeys, onChange, ...props }: Props<K>) => {
	const changeHandler: ChangeEventHandler<HTMLSelectElement> =
		(event) => onChange?.(event.target.value as K)

	return (
		<select onChange={changeHandler} {...props}>
			{itemKeys.map((key) =>
				<option key={key} children={key} />
			)}
		</select>
	)
}

export default Select
