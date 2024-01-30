import type Table from './table'

interface Props<R> extends Table<R> {}

function Component<R>({ records }: Props<R>) {
	return (
		<table>
			<thead>
			</thead>
			<tbody>
				{records.map(
					(record) =>
						<tr>
							<td>Content</td>
						</tr>
				)}
			</tbody>
		</table>
	)
}

export default Component
