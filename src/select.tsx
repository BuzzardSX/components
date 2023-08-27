import type { ChangeEventHandler } from 'react'

type Key = string | number

interface Data<K extends Key> {
	dataKeys: ToArray<K>
	onChange?: (key: K) => void
}

interface Props<K extends Key> extends Data<K> {
	disabled?: boolean
	multiple?: boolean
}

const Select = <K extends Key>({ dataKeys, onChange, ...props }: Props<K>) => {
	const changeHandler: ChangeEventHandler<HTMLSelectElement> =
		(event) => onChange?.(event.target.value as K)

	return (
		<select onChange={changeHandler} {...props}>
			{dataKeys.map((key) =>
				<option key={key} children={key} />
			)}
		</select>
	)
}

export default Select
