import Select from './select'

const chars = ['a', 'b', 'c']

const nums = [1, 2, 3]

const brands = ['LG', 'Samsung', 'Philips']

const Page = () => {
	return (
		<div>
			<Select optionValues={brands} onChange={(value) => console.log(value)} />
		</div>
	)
}

export default Page
