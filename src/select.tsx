type RecordValue = string | number

type GenericItem = {
	[key: string]: RecordValue
}

interface Data<T extends GenericItem> {
	records: T[]
	dataKey: keyof T
}

interface Props<T extends GenericItem> extends Data<T> {
}

function Component<T extends GenericItem>({ records, dataKey }: Props<T>) {
	return (
		<select>
			{records.map(
				({ [dataKey]: key }) =>
					<option value={key}>{key}</option>
			)}
		</select>
	)
}

export default Component
