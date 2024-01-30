import Select from './select'
import { Grid } from './data'

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
							recordIndex: 'name'
						}
					}}
					records={users} />
			</div>
			<div>
				<Select
					items={[{ key: 1, value: 'One' }, { key: 2, value: 'Two' }]}
					onChange={(key) => console.log(key)} />
			</div>
		</div>
	)
}

export default Page
