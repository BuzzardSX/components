const Table = ({ data: rows }) => (
	<table>
		<thead>
		</thead>
		<tbody>
			{rows.map(
				row => (
					<tr>
						<td>{row}</td>
					</tr>
				)
			)}
		</tbody>
	</table>
)

export default Table
