interface Props {
	disabled?: boolean
}

const Checkbox = (props: Props) =>
	<input type='checkbox' {...props} />

export default Checkbox
