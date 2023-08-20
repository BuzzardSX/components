import Data from './data'
import { Record } from './data'

interface Props<I, K extends Record.Key, V extends Record.Value> extends Record.Data<I, K, V> {
	disabled?: boolean
	required?: boolean
}

type Component = <I, K extends Record.Key, V extends Record.Value>(props: Props<I, K, V>) => JSX.Element

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
