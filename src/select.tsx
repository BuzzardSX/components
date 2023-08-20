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
		record: [$key, value],
		...props
	}) =>
		<select {...props}>
			<Data {...{ data, $key, value }}>
				{(key, value) =>
					<option key={key} value={key}>
						{value}
					</option>}
			</Data>
		</select>

export default Select
