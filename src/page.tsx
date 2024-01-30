import Select from './select'
import { Grid } from './data'

const items = [
	{
		key: 1,
		value: 'One'
	},
	{
		key: 2,
		value: 'Two'
	}
]

const users = [
	{
		name: 'Mike'
	},
	{
		name: 'Tom'
	}
]

const Page = () => {
	return (
		<div>
			<div>
				<Grid
					definition={{
						name: {
							recordIndex: 'name',
							title: 'Name'
						},
						name1: {
							recordIndex: 'name',
							title: 'Name1'
						}
					}}
					records={users} />
			</div>
			<div>
				<Select
					items={items}
					onChange={(key) => console.log(key)} />
			</div>
		</div>
	)
}

export default Page
