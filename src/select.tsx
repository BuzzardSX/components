import type { ChangeEventHandler } from 'react'

type Key = string | number

type Value = string | number

type Item<K extends Key, V extends Value> = {
	key: K
	value: V
}

function render<K extends Key, V extends Value>(items: Item<K, V>[], current: K) {}

interface Data<K extends Key> {
	dataKeys: ToArray<K>
	onChange?: (key: K) => void
}

interface Props<K extends Key> extends Data<K> {
	disabled?: boolean
	multiple?: boolean
	name?: string
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
