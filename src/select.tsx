import Data from './data'
import type { RecordKey, RecordValue, Data as DataSource } from './data'

interface Props<I, K extends RecordKey, V extends RecordValue> extends DataSource<I, K, V> {
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
			<Data {...{ data, $key: recordKey, value: recordValue }}>
				{(key, value) =>
					<option key={key} value={key}>
						{value}
					</option>}
			</Data>
		</select>

export default Select
