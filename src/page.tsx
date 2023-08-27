type Key = string | number

interface SelectProps<K extends Key> {
	options: ToArray<K>
	onChange?: (key: K) => void
}

const arr = [[1, 2], ['a', 'b']]

const Select = <T extends Key>({ options, onChange }: SelectProps<T>) => {
	return (
		<select onChange={(event) => onChange?.(event.target.value as T)}>
			{options.map(
				(option) => <option value={option}>{option}</option>
			)}
		</select>
	)
}

const Page = () => (
	<div>
		<Select options={[1, 2, 3]} onChange={(key) => console.log()} />
	</div>
)

export default Page
