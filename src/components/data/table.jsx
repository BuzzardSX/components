const Table = ({ data: rows }) => (
	<table>
		<thead>
			<tr>
				<th>11</th>
			</tr>
		</thead>
		<tbody>
			{rows
				?
					rows.map(
						row => (
							<tr>
								<td>{row}</td>
							</tr>
						)
					)
				:
					(
						<mark>Table is Empty</mark>
					)}
		</tbody>
	</table>
)

export default Table
