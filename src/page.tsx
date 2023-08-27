import Select from './select'

const chars = ['a', 'b', 'c']

const nums = [1, 2, 3]

const brands = ['LG', 'Samsung', 'Philips']

const Page = () => {
	return (
		<div>
			<Select dataKeys={nums} onChange={(key) => console.log(key)} />
		</div>
	)
}

export default Page
