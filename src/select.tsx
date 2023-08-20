interface Props {
	data: string[]
}

const Select = (props: Props) =>
	<select>
		{props.data.map(
			option => <option value={option}>{option}</option>
		)}
	</select>

export default Select
