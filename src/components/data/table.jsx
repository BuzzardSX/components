const Table =
	({
		columns,
		data: rows
	}) =>
		<table>
			<thead>
				<tr>
					{columns.map(
						({ title }) => <th>{title}</th>
					)}
				</tr>
			</thead>
			<tbody>
				{rows
					?
						(
							<div>Not empty</div>
						)
						// rows.map(
						// 	row => (
						// 		<tr k>
						// 			<td>{row}</td>
						// 		</tr>
						// 	)
						// )
					:
						(
							<mark>Table is Empty</mark>
						)}
			</tbody>
		</table>

export default Table
