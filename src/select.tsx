type RecordValue = string | number

type Record = {
	[key: string]: RecordValue
}

interface Data<R extends Record> {
	data: R[]
	recordKey: keyof R
	recordValue: keyof R
}

interface Props<R extends Record> extends Data<R> {
	disabled?: boolean
	required?: boolean
}

type Component = <R extends Record>(props: Props<R>) => JSX.Element

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
