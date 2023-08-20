type RecordValue = string

interface Data<I, K extends RecordValue, V extends RecordValue> {
	data: I[]
	recordKey: (item: I) => K
	recordValue: (item: I) => V
}

interface Props<I, K extends RecordValue, V extends RecordValue> extends Data<I, K, V> {
	disabled?: boolean
	required?: boolean
}

type Component = <I, K extends RecordValue, V extends RecordValue>(props: Props<I, K, V>) => JSX.Element

const Select: Component =
	({ data, recordKey, recordValue, ...props }) =>
		<select {...props}>
			{data.map(
				(item) =>
					<option key={recordKey(item)} value={recordKey(item)}>
						{recordValue(item)}
					</option>
			)}
		</select>

export default Select
