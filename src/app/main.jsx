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
		<Table columns={columns} data={data} />
	</div>
)

export default Main
