import type { ChangeEventHandler } from 'react'

type Key = string | number

type Value = Key

interface SelectProps<K extends Key> {
	options: ToArray<K>
	onChange?: (key: K) => void
}

const Select = <T extends Key>({ options, onChange }: SelectProps<T>) => {
	const changeHandler: ChangeEventHandler<HTMLSelectElement> =
		(event) => onChange?.(event.target.value as T)

	return (
		<select onChange={changeHandler}>
			{options.map((option) =>
				<option value={option}>{option}</option>
			)}
		</select>
	)
}

const chars = ['a', 'b', 'c']

const nums = [1, 2, 3]

const Page = () => (
	<div>
		<Select options={nums} onChange={(key) => console.log(key)} />
	</div>
)

export default Page
