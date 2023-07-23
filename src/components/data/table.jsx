const Table =
	({
		columns,
		data: rows
	}) =>
		<table>
			<thead>
				<tr>
					{columns
						?
							columns.map(
								({ title }) => <th>{title}</th>
							)
						:
							Object.keys(rows[0]).map(
								key => <th>{key}</th>
							)}
				</tr>
			</thead>
			<tbody>
				{rows
					?
						rows.map(
							() => <tr>11</tr>
						)
					:
						<mark>Table is Empty</mark>}
			</tbody>
		</table>

export default Table
