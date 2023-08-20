type RecordValue = string | number

type Item = {
	[key: string]: RecordValue
}

interface Data<I extends Item> {
	data: I[]
	recordKey: keyof I
	recordValue: keyof I
}

interface Props<I extends Item> extends Data<I> {
	disabled?: boolean
	required?: boolean
}

type Component = <I extends Item>(props: Props<I>) => JSX.Element

const Select: Component = ({ data, recordKey, recordValue, ...props }) =>
	<select {...props}>
		{data.map(
			({ [recordKey]: key, [recordValue]: value }) =>
				<option key={key} value={key}>
					{value}
				</option>
		)}
	</select>

export default Select
