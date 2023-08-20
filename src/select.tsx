type RecordValue = string | number

type Record = {
	[key: string]: RecordValue
}

interface Data<R extends Record> {
	data: R[]
	recordKey: keyof R
	recordValue: keyof R
}

interface Props<R extends Record> extends Data<R> {
}

function Component<R extends Record>({ data, recordKey, recordValue }: Props<R>) {
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
