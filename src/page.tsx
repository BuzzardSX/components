import Select from './select'
import { Grid } from './data'

type UserRole = 'user' | 'admin'

interface User {
	name: string
	age: number
	role: UserRole
}

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

const users: User[] = [
	{
		name: 'Mike',
		age: 23,
		role: 'user'
	},
	{
		name: 'Tom',
		age: 12,
		role: 'user'
	},
	{
		name: 'Billy',
		age: 47,
		role: 'admin'
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
						nameS: {
							recordIndex: 'name',
							title: 'NameS'
						},
						age: {
							recordIndex: 'age',
							title: 'Age'
						},
						role: {
							recordIndex: 'role',
							title: 'Role'
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
