import { Table } from '~/components/data'

const data = [
	{
		brand: 'LG'
	},
	{
		brand: 'Samsung'
	}
]

const columns = [
	{
		title: 'Brand'
	}
]

const Main = () => (
	<div>
		<div>
			<Table columns={columns} data={data} />
		</div>
		<div>
			<Table data={data} />
		</div>
	</div>
)

export default Main
