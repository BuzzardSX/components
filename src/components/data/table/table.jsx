import Head from './head'
import { Provider } from './context'

const Table =
	({
		columns,
		data: rows,
		dataKey
	}) =>
		<table>
			<Provider value={{ data: rows, columns }}>
				<Head />
				<tbody>
					{rows
						?
							rows.map(
								(row) =>
									<tr key={row[dataKey]}>
										{columns.map(
											({ key, index }) => <td key={key}>{row[index]}</td>
										)}
									</tr>
							)
						:
							<mark>Table is Empty</mark>}
				</tbody>
			</Provider>
		</table>

export default Table
