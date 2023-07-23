import { Consumer } from './context'
import { Map } from '~/root'

const Fallback = () => (
	<Consumer>
		{({ data }) =>
			Object.keys(data[0]).map(
				key => <th key={key}>{key}</th>
			)}
	</Consumer>
)

const row = ({ key, title }) => <th key={key}>{title}</th>

const Head = () =>
	<Consumer>
		{({ data, columns }) =>
			<thead>
				<Map items={columns} fallback={<Fallback />}>
					{row}
				</Map>
			</thead>}
	</Consumer>

export default Head
