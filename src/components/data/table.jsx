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
								({ key, title }) => <th key={key}>{title}</th>
							)
						:
							Object.keys(rows[0]).map(
								key => <th key={key}>{key}</th>
							)}
				</tr>
			</thead>
			<tbody>
				{rows
					?
						rows.map(
							(row) =>
								<tr key={row.key}>
									{columns.map(
										({ key, index }) => <td key={key}>{row[index]}</td>
									)}
								</tr>
						)
					:
						<mark>Table is Empty</mark>}
			</tbody>
		</table>

export default Table
