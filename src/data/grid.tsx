import type { Table, Record } from './table'

interface Props<R extends Record> extends Table<R> {}

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
