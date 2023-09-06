import Select from './select'

const brands = [
	{
		key: 1,
		value: 'LG'
	},
	{
		key: 2,
		value: 'Samsung'
	},
	{
		key: 3,
		value: 'Philips'
	}
]

const Page = () => {
	return (
		<div>
			<Select items={brands} onChange={(key) => console.log(key)} />
		</div>
	)
}

export default Page
