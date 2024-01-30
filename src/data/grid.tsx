import type { Table, Record } from './table'

interface Props<R extends Record> extends Table<R> {}

function Component<R extends Record>({ definition, records }: Props<R>) {
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
