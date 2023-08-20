interface Props {
	disabled?: boolean
	data: string[]
}

const Select = ({ data, ...props }: Props) =>
	<select {...props}>
		{data.map(
			option => <option value={option}>{option}</option>
		)}
	</select>

export default Select
