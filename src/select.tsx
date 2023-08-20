type RecordKey = string

type RecordValue = string | number

interface Data<I, K extends RecordKey, V extends RecordValue> {
	data: I[]
	record: [key: (item: I) => K, value: (item: I) => V]
}

interface Props<I, K extends RecordKey, V extends RecordValue> extends Data<I, K, V> {
	disabled?: boolean
	required?: boolean
}

type Component = <I, K extends RecordKey, V extends RecordValue>(props: Props<I, K, V>) => JSX.Element

const Select: Component =
	({
		data,
		record: [key, value],
		...props
	}) =>
		<select {...props}>
			{data.map(
				(item) => {
					const optionKey = key(item)

					return (
						<option key={optionKey} value={optionKey}>
							{value(item)}
						</option>
					)
				}
			)}
		</select>

export default Select
