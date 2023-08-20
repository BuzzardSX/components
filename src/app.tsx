import Select from './select'

const App = () =>
	<div>
		<div>
			<Select
				records={[
					{ id: 'LG' },
					{ id: 'Philips' },
					{ id: 'Samsung' },
					{ id: 'Sony' }
				]}
				recordKey='id' />
		</div>
	</div>

export default App
