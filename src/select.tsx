import type { ChangeEventHandler } from 'react'

type Key = string | number

interface Props<K extends Key> {
	dataKeys: ToArray<K>
	onChange?: (key: K) => void
}

const Select = <K extends Key>({ dataKeys, onChange }: Props<K>) => {
	const changeHandler: ChangeEventHandler<HTMLSelectElement> =
		(event) => onChange?.(event.target.value as K)

	return (
		<select onChange={changeHandler}>
			{dataKeys.map((key) =>
				<option key={key} children={key} />
			)}
		</select>
	)
}

export default Select
