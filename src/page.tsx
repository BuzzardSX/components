type Key = string | number

type Value = Key

interface SelectProps<K extends Key> {
	options: ToArray<K>
	onChange?: (key: K) => void
}

const Select = <T extends Key>({ options, onChange }: SelectProps<T>) => {
	return (
		<select onChange={(event) => onChange?.(event.target.value as T)}>
			{options.map(
				(option) => <option value={option}>{option}</option>
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
