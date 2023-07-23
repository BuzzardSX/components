import { Table } from '~/components/data'

const data = [
	{
		id: 2858640071,
		brand: 'LG',
		model: 'F2J6HG7W'
	},
	{
		id: 3550197698,
		brand: 'Samsung',
		model: 'WW5100A'
	}
]

const columns = [
	{
		title: 'Бренд',
		key: 'brand',
		index: 'brand'
	},
	{
		title: 'Модель',
		key: 'model',
		index: 'model'
	}
]

const Main = () => (
	<div>
		<div>
			<Table columns={columns} data={data} dataKey='id' />
		</div>
	</div>
)

export default Main
