import Select from './select'

type Brand = {
	id: string,
	name: string
}

const brands: Brand[] = [
	{
		id: '1q',
		name: 'LG'
	},
	{
		id: 'Kj',
		name: 'Samsung'
	},
	{
		id: 'qJ',
		name: 'Philips'
	}
]

const App = () =>
	<div>
		<div>
			<Select
				data={brands}
				recordKey={(item) => item.id}
				recordValue={(item) => item.name} />
		</div>
	</div>

export default App
