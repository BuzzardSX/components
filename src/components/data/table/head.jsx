import { Consumer } from './context'

const Head = () => (
	<Consumer>
		{({ data: rows, columns }) => (
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
		)}
	</Consumer>
)

export default Head
