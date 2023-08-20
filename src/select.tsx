import Data from './data'

type RecordKey = string

type RecordValue = string | number

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
		record: [key, value],
		...props
	}) =>
		<select {...props}>
			<Data
				value={
					data.map((item) => ({ key: key(item), value: value(item) }))
				}>
				{(itemKey) => (
					<option key={itemKey} value={itemKey}>{itemKey}</option>
				)}
			</Data>
		</select>

export default Select
