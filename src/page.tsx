import type { ChangeEventHandler } from 'react'

type Key = string | number

type Value = Key

interface SelectProps<K extends Key> {
	dataKeys: ToArray<K>
	onChange?: (key: K) => void
}

const Select = <T extends Key>({ dataKeys, onChange }: SelectProps<T>) => {
	const changeHandler: ChangeEventHandler<HTMLSelectElement> =
		(event) => onChange?.(event.target.value as T)

	return (
		<select onChange={changeHandler}>
			{dataKeys.map((key) =>
				<option value={key} {...{ key }}>{key}</option>
			)}
		</select>
	)
}

const chars = ['a', 'b', 'c']

const nums = [1, 2, 3]

const Page = () => (
	<div>
		<Select dataKeys={nums} onChange={(key) => console.log(key)} />
	</div>
)

export default Page
