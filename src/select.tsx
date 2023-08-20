import Data from './data'

type RecordKey = string

type RecordValue = string

interface DataSource<I, K extends RecordKey, V extends RecordValue> {
	data: I[]
	record: [key: (item: I) => K, value: (item: I) => V]
}

interface Props<I, K extends RecordKey, V extends RecordValue> extends DataSource<I, K, V> {
	disabled?: boolean
	required?: boolean
}

type Component = <I, K extends RecordKey, V extends RecordValue>(props: Props<I, K, V>) => JSX.Element

const Select: Component =
	({
		data,
		record,
		...props
	}) =>
		<select {...props}>
			<Data
				value={data}
				record={record}>
				{(itemKey) => (
					<option key={itemKey} value={itemKey}>{itemKey}</option>
				)}
			</Data>
		</select>

export default Select
