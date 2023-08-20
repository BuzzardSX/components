import Select from './select'

const App = () =>
	<div>
		<div>
			<Select
				data={[
					{ id: 'LG' },
					{ id: 'Philips' },
					{ id: 'Samsung' },
					{ id: 'Sony' }
				]}
				recordKey='id' recordValue='id' />
		</div>
	</div>

export default App
