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
		name: 'Mike',
		age: 23
	},
	{
		name: 'Tom',
		age: 12
	}
]

const transformedUsers = users.map(
	({ age, ...user }) => ({
		age: age.toString(),
		...user
	})
)

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
					records={transformedUsers} />
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
