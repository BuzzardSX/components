import Data from './data'
import type { RecordKey, RecordValue } from './data'

interface DataSource<I, K extends RecordKey, V extends RecordValue> {
	data: I[]
	record: [
		key: (item: I) => K,
		value: (item: I) => V
	]
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
			<Data data={data} $key={record[0]} value={record[1]}>
				{(key, value) => (
					<option key={key} value={key}>{value}</option>
				)}
			</Data>
		</select>

export default Select
