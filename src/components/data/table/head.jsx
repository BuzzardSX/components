import { Consumer } from './context'
import { Map } from '~/root'

const Head = () => (
	<Consumer>
		{({ data, columns }) =>
			<thead>
				<Map
					items={columns}
					fallback={
						Object.keys(data[0]).map(
							key => <th key={key}>{key}</th>
						)
					}>
					{({ key, title }) => <th key={key}>{title}</th>}
				</Map>
			</thead>}
	</Consumer>
)

export default Head
