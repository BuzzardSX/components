import { Table } from '~/components/data'

const data = [
	{
		brand: 'LG',
		model: 'F2J6HG7W'
	},
	{
		brand: 'Samsung',
		model: 'WW5100A'
	}
]

const columns = [
	{
		title: 'Бренд',
		index: 'brand'
	},
	{
		title: 'Модель',
		index: 'model'
	}
]

const Main = () => (
	<div>
		<div>
			<Table columns={columns} data={data} />
		</div>
		{/* <div>
			<Table data={data} />
		</div> */}
	</div>
)

export default Main
