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
				record={[
					(brand) => brand.id,
					(brand) => brand.name
				]} />
		</div>
	</div>

export default App
