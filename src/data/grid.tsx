import type Table from './table'

interface Props<R extends Record<string, string>> extends Table<R> {}

function Component<R extends Record<string, string>>({ definition, records }: Props<R>) {
	return (
		<table>
			<thead>
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
	)
}

export default Component
