type RecordKey = string

type RecordValue = string | number

interface Data<I, K extends RecordKey, V extends RecordValue> {
	data: I[]
	recordKey: (item: I) => K
	recordValue: (item: I) => V
}

interface Props<I, K extends RecordKey, V extends RecordValue> extends Data<I, K, V> {
	disabled?: boolean
	required?: boolean
}

type Component = <I, K extends RecordKey, V extends RecordValue>(props: Props<I, K, V>) => JSX.Element

const Select: Component =
	({
		data,
		recordKey,
		recordValue,
		...props
	}) =>
		<select {...props}>
			{data.map(
				(item) => {
					const key = recordKey(item)

					return (
						<option key={key} value={key}>
							{recordValue(item)}
						</option>
					)
				}
			)}
		</select>

export default Select
