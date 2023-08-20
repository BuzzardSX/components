type RecordValue = string | number

type GenericItem = {
	[key: string]: RecordValue
}

interface Data<T extends GenericItem> {
	data: T[]
	recordKey: keyof T
	recordValue: keyof T
}

interface Props<T extends GenericItem> extends Data<T> {
}

function Component<T extends GenericItem>({ data, recordKey, recordValue }: Props<T>) {
	return (
		<select>
			{data.map(
				({ [recordKey]: key, [recordValue]: value }) =>
					<option key={key} value={key}>
						{value}
					</option>
			)}
		</select>
	)
}

export default Component
