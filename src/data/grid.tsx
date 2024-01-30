interface Table<R> {
	definition: { recordIndex: keyof R }
	records: Array<R>
}

interface Props<R> extends Table<R> {}

function Component<R>(props: Props<R>) {
	return (
		<table>
			<thead>
			</thead>
			<tbody>
			</tbody>
		</table>
	)
}

export default Component
