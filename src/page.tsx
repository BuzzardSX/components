import { Grid } from './data'

type UserRole = 'user' | 'admin'

interface User {
	name: string
	age: number
	role: UserRole
}

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
							recordIndex: 'name'
						},
						age: {
							recordIndex: 'age'
						},
						role: {
							recordIndex: 'role'
						}
					}}
					records={transformedUsers} />
			</div>
		</div>
	)
}

export default Page
