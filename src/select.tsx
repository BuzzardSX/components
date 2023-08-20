type RecordValue = string | number

type GenericItem = {
	[key: string]: RecordValue
}

interface Data<T extends GenericItem> {
	records: T[]
	recordKey: keyof T
}

interface Props<T extends GenericItem> extends Data<T> {
}

function Component<T extends GenericItem>({ records, recordKey }: Props<T>) {
	return (
		<select>
			{records.map(
				({ [recordKey]: key }) =>
					<option value={key}>{key}</option>
			)}
		</select>
	)
}

export default Component
