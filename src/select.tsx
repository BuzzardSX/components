import type { ChangeEventHandler } from 'react'

type Value = string | number

type Label = Value

interface SelectProps<V extends Value> {
	optionValues: ToArray<V>
	onChange?: (value: V) => void
}

const Select = <V extends Value>({ optionValues, onChange }: SelectProps<V>) => {
	const changeHandler: ChangeEventHandler<HTMLSelectElement> =
		(event) => onChange?.(event.target.value as V)

	return (
		<select onChange={changeHandler}>
			{optionValues.map((value) =>
				<option key={value} children={value} />
			)}
		</select>
	)
}

export default Select
