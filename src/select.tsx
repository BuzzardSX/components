import Data from './data'
import type { DataSource, RecordKey, RecordValue } from './data'

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
			<Data {...{ data, record }}>
				{(key, value) => value}
			</Data>
		</select>

export default Select
