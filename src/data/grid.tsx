type DefinitionValue<R> = {
	recordIndex: keyof R
	title?: string
}

type Definition<R> = {
	[key: string]: DefinitionValue<R>
}

type Record = {
	[key: string]: string
}

interface Props<R extends Record> {
	definition: Definition<R>
	records: R[]
	groupKey?: keyof R
}

const Component = <R extends Record>({ definition, records }: Props<R>) =>
	<table>
		<thead>
			<tr>
				{Object.entries(definition)
					.map(
						([key, { title }]) => <th>{title ?? key}</th>
					)}
			</tr>
		</thead>
		<tbody>
			{records.map(
				(record) =>
					<tr>
						{Object.values(definition)
							.map(
								({ recordIndex }) => <td>{record[recordIndex]}</td>
							)}
					</tr>
			)}
		</tbody>
	</table>

export default Component
