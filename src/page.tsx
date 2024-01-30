import Select from './select'

const Page = () => {
	return (
		<div>
			<div>
				<Select
					items={[{ key: 1, value: 'One' }, { key: 2, value: 'Two' }]}
					onChange={(key) => console.log(key)} />
			</div>
		</div>
	)
}

export default Page
