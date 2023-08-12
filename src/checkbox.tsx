interface Props {
	disabled?: boolean
}

const Checkbox = (props: Props) =>
	<div>
		<input type='checkbox' {...props} />
	</div>

export default Checkbox
