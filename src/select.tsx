import type { ChangeEventHandler } from 'react'

type Key = string | number

interface Props<K extends Key> {
	optionValues: ToArray<K>
	onChange?: (key: K) => void
}

const Select = <K extends Key>({ optionValues, onChange }: Props<K>) => {
	const changeHandler: ChangeEventHandler<HTMLSelectElement> =
		(event) => onChange?.(event.target.value as K)

	return (
		<select onChange={changeHandler}>
			{optionValues.map((key) =>
				<option key={key} children={key} />
			)}
		</select>
	)
}

export default Select
