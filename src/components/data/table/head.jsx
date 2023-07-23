import { Consumer } from './context'
import { Map } from '~/root'

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
				<Map
					items={columns}
					fallback={
						Object.keys(rows[0]).map(
							key => <th key={key}>{key}</th>
						)
					}>
					{({ key, title }) => <th key={key}>{title}</th>}
				</Map>
			</thead>
		)}
	</Consumer>
)

export default Head
