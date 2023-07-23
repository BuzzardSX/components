import { Consumer } from './context'
import { List } from '~/meta'

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
		{({ columns }) =>
			<thead>
				<List items={columns} fallback={<Fallback />} htmlTag='tr'>
					{row}
				</List>
			</thead>}
	</Consumer>

export default Head
