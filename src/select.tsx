interface Data {
	data: string[]
}

interface Props extends Data {
	disabled?: boolean
}

const Select = ({ data, ...props }: Props) =>
	<select {...props}>
		{data.map(
			option => <option value={option}>{option}</option>
		)}
	</select>

export default Select
